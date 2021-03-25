<template>
    <section>
        <div class="container mt-3 user-profile">
            <div class="card">
                <div class="card-header">Employees Edit</div>
                <div class="card-body">
                   <form @submit.prevent="updateEmployee">
                        <div class="row g-3 justify-content-center">
                            <!-- type text -->
                            <div class="col-md-8">
                                <div class="row mb-2">
                                    <div class="col-md-4">
                                        <label for="inline-text" class="form-label required mt-1">Name</label>
                                    </div>
                                    <div class="col-md-8">
                                        <input type="text" class="form-control" v-model="form.name" id="inline-text" placeholder="Name" required autofocus>
                                    </div>
                                </div>

                                <div class="row mb-2">
                                    <div class="col-md-4">
                                        <label for="corporate-number" class="form-label required mt-1">Corporate Number</label>
                                    </div>
                                    <div class="col-md-8">
                                        <input type="number" class="form-control" v-model="form.corporate_number" id="corporate-number" placeholder="01X XX XXX XXX">
                                    </div>
                                </div>

                                <div class="row mb-2">
                                    <div class="col-md-4">
                                        <label for="personal-number" class="form-label required mt-1">Personal Number</label>
                                    </div>
                                    <div class="col-md-8">
                                        <input type="number" class="form-control" v-model="form.personal_number" id="personal-number" placeholder="01X XX XXX XXX">
                                    </div>
                                </div>

                                <div class="row mb-2">
                                    <div class="col-md-4">
                                        <label for="bcs-batch" class="form-label required mt-1">BCS Batch</label>
                                    </div>
                                    <div class="col-md-8">
                                        <input type="text" class="form-control" v-model="form.bcs_batch" id="bcs-batch" placeholder="BCS Batch">
                                    </div>
                                </div>

                                <div class="row mb-2">
                                    <div class="col-md-4">
                                        <label for="facebook" class="form-label required mt-1">Facebook</label>
                                    </div>
                                    <div class="col-md-8">
                                        <input type="text" class="form-control" v-model="form.facebook" id="facebook" placeholder="Facebook Link">
                                    </div>
                                </div>

                                <div class="row mb-2">
                                    <div class="col-md-4">
                                        <label for="blood-group" class="form-label required mt-1">Blood Group</label>
                                    </div>
                                    <div class="col-md-8">
                                        <input type="text" class="form-control" v-model="form.blood_group" id="blood-group" placeholder="Blood Group">
                                    </div>
                                </div>

                                <div class="row mb-2">
                                    <div class="col-md-4">
                                        <label for="official-email" class="form-label required mt-1">Official Email Address</label>
                                    </div>
                                    <div class="col-md-8">
                                        <input type="email" class="form-control" v-model="form.email" id="official-email" placeholder="Official Email Address">
                                    </div>
                                </div>

                                <div class="row mb-2">
                                    <div class="col-md-4">
                                        <label for="image" class="form-label required mt-1">Photo</label>
                                    </div>
                                    <div class="col-md-8">
                                        <input type="file" class="form-control" id="image" @change="userImage">
                                        <img :src="form.image" alt="image" width="100px" v-if="form.image" class="img-thumbnail mt-2">
                                        <img :src="`https://ui-avatars.com/api/?background=random&name=${form.name}`" v-else alt="image" width="100px" class="img-thumbnail mt-2">
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-8 offset-4">
                                        <div class="mb-2" v-if="progressBar > 0">
                                            <b-progress :value="progressBar" max="100" show-progress animated></b-progress>
                                        </div>
                                        <div class="text-end">
                                            <button type="submit" class="btn custom-btn btn-success me-2">Update</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </section>
</template>

<script>

export default {
    name: 'EditProfileComponent',
    head:{
        title: 'Edit Profile'
    },
    data(){
        return {
            form:{
                name: '',
                corporate_number:'+880',
                personal_number:'+880',
                bcs_batch: '',
                blood_group: '',
                facebook: '',
                email: '',
                address: '',
                image: ''
            },
            progressBar: 0
        }
    },
    mounted() {
        this.getEmployee()
        //console.log(this.employee)
    },

    methods:{
        getEmployee() {
            this.$fire.firestore.collection("employees").doc(this.$route.params.uid).get().then((snapshot) =>{
                this.form = snapshot.data()
            }).catch((error) =>{
                console.log(error)
            });
        },

        updateEmployee(){
            // // update employee information
            this.$fire.firestore.collection("employees").doc(this.$route.params.uid).update(this.form).then((response)=> {
                console.log("Document successfully updated!");
                this.$toast.success('Document successfully updated.')
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
        },

        userImage(event){
            let file = event.target.files[0];

            if(file){

                //upload image
                let storageRef = this.$fire.storage.ref('employees/'+ Math.random() + '_'  + file.name);

                let uploadTask  = storageRef.put(file);

                uploadTask.on('state_changed', (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
                        //console.log("File available at: " + this.form.image)
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
