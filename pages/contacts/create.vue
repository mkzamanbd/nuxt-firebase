<template>
    <div class="container mt-3">
        <div class="card border-0">
            <div class="card-header d-flex justify-content-between px-0">
                <h5 class="main-title">New Contact</h5>
                
                <nuxt-link to="/contacts" title="Go back">
                    <i class="bi bi-arrow-left"></i>
                </nuxt-link>

            </div>

            <div class="card-body p-0">
                <!-- start form -->
                <form @submit.prevent="saveContact">

                    <div class="row mt-3 justify-content-center">
                        <!-- type text -->
                        <div class="col-md-8">
                            <div class="form-group mb-2">
                                <label for="inline-text">Name</label>
                                <input id="inline-text" v-model="form.name" type="text" class="form-control" placeholder="Name" required autofocus>
                            </div>

                            <div class="form-group mb-2">
                                <label for="phone" class="form-label">Phone</label>
                                <input id="phone" v-model="form.phone" type="number" class="form-control" placeholder="01X XX XXX XXX">
                            </div>

                            <div class="form-group mb-2">
                                <label for="email" >Email</label>
                                <input id="email" v-model="form.email" type="email" class="form-control" placeholder="Email">
                            </div>

                            <div class="form-group mb-2">
                                <label for="image" class="form-label required mt-1">Photo</label>
                                <input id="image" type="file" class="form-control" @change="userImage">
                                <img v-if="form.image" :src="form.image" alt="image" width="100px" class="img-thumbnail mt-2">
                            </div>

                            <div v-if="progressBar > 0" class="mb-2">
                                <b-progress :value="progressBar" max="100" show-progress animated></b-progress>
                            </div>

                            <div class="text-end">
                                <button type="submit" class="btn custom-btn btn-success">Submit</button>
                            </div>

                        </div>
                    </div>
                </form>
                <!-- end form -->
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'NewContactComponent',
        data(){
            return {
                form:{
                    name: '',
                    phone:'+880',
                    email: '',
                    image: ''
                },

                progressBar: 0,
            }
        },
        head:{
            title: 'New Contact'
        },

        methods:{
            reset_form(){
                this.form = {
                    name: '',
                    phone:'',
                    email: '',
                    image: ''
                }
                this.progressBar = 0
            },
            saveContact(){
                this.$fire.firestore.collection('contacts').add(this.form).then((snapshot) =>{
                    this.$toast.success('Contact Successfully Saved.')
                    this.reset_form()
                }).catch((error) =>{
                    console.log(error)
                })
            },

            userImage(event){
                const file = event.target.files[0];

                if(file){
                    // upload image
                    const storageRef = this.$fire.storage.ref('contacts/'+ Math.random() + '_'  + file.name);

                    const uploadTask  = storageRef.put(file);

                    uploadTask.on('state_changed', (snapshot) => {
                        // Observe state change events such as progress, pause, and resume
                        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                        this.progressBar = progress

                    },(error) => {
                        // Handle unsuccessful uploads
                        console.log(error)
                    },() => {
                        // Handle successful uploads on complete

                        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                            this.form.image = downloadURL;
                            this.progressBar = 0;
                            this.$toast.success('Image successfully uploaded.')
                        });
                    });
                }

                if(this.form.image){
                    this.$fire.storage.refFromURL(this.form.image).delete().then(function(){
                        this.$toast.success('Old image successfully Deleted, & Updated new Image.')
                    }).catch( (error) =>{
                        console.log(error)
                    })
                }
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>
