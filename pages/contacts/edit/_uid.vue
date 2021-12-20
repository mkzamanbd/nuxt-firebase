<template>
    <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Contacts Edit
        </h2>
        <!-- CTA -->
        <div class="flex items-center p-4 bg-white rounded-lg shadow-xs border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
            <form class="w-full" @submit.prevent="updateContacts">
                <div class="w-1/2 mx-auto">
                    <div class="form-group mb-2">
                        <label for="inline-text">Name</label>
                        <input id="inline-text" v-model="form.name" type="text" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray" placeholder="Name" required autofocus>
                    </div>

                    <div class="form-group mb-2">
                        <label for="phone" class="form-label">Phone</label>
                        <input id="phone" v-model="form.phone" type="text" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray" placeholder="01X XX XXX XXX">
                    </div>

                    <div class="form-group mb-2">
                        <label for="email" >Email</label>
                        <input id="email" v-model="form.email" type="email" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray" placeholder="Email">
                    </div>

                    <div class="mb-2">
                        <label for="image" class="cursor-pointer mt-1">
                            Photo
                            <input id="image" type="file" class="hidden" @change="userImage">
                            <img v-if="form.image" :src="form.image" alt="image" width="100px" class="img-thumbnail mt-2">
                            <img v-else :src="`https://ui-avatars.com/api/?background=random&name=${form.name}`" alt="image" width="100px" class="img-thumbnail mt-2">
                        </label>
                    </div>

                    <div v-if="progressBar > 0" class="mb-2">
                        <b-progress :value="progressBar" max="100" show-progress animated></b-progress>
                    </div>
                    <div class="text-end">
                        <button type="submit" class="btn custom-btn btn-success me-2">Update</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'EditProfileComponent',
        data(){
            return {
                form:{
                    name: '',
                    phone:'',
                    email: '',
                    image: ''
                },
                progressBar: 0
            }
        },
        head:{
            title: 'Edit Profile'
        },
        mounted() {
            this.getContacts()
        },

        methods:{
            getContacts() {
                this.$fire.firestore.collection("contacts").doc(this.$route.params.uid).get().then((snapshot) =>{
                    this.form = snapshot.data()
                }).catch((error) =>{
                    console.log(error)
                });
            },

            updateContacts(){
                // update contacts information
                this.$fire.firestore.collection("contacts").doc(this.$route.params.uid).update(this.form).then((response)=> {
                    console.log("Document successfully updated!");
                    this.$toast.success('Document successfully updated.')
                    this.$router.push('/contacts')
                })
                    .catch((error) => {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
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

                            // console.log("File available at: " + this.form.image)
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
