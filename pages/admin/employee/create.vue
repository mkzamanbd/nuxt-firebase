<template>
    <div>
        <!-- preloader -->
        <PreloaderComponent/>

        <div class="user-new-entry">
            <div class="container print-none">
                <ul class="nav nav-tabs mt-2">
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/admin/employee">All Records</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link active" to="/admin/employee/create">New Entry</nuxt-link>
                    </li>
                </ul>
            </div>

            <div class="container">
                <div class="card mb-5 border-0">
                    <div class="card-header p-0 border-0 d-flex">
                        <!-- page title -->
                        <div class="mt-3">
                            <h5 class="main-title">New Employee</h5>
                        </div>
                        <!-- header icon -->
                        <nuxt-link to="/admin/employee" title="Go back"
                            class="pe-0 ms-auto print-none top-icon-button mb-2 mt-3">
                            <i class="bi bi-arrow-left"></i>
                        </nuxt-link>

                    </div>
                    <div class="card-body p-0 pt-3">
                        <!-- start form -->
                        <form @submit.prevent="saveEmployee">

                            <div class="row g-3 justify-content-center">
                                <!-- type text -->
                                <div class="col-8">
                                    <div class="row mb-2">
                                        <div class="col-3">
                                            <label for="inline-text" class="form-label required mt-1">Name</label>
                                        </div>
                                        <div class="col-9">
                                            <input type="text" class="form-control" v-model="form.name" id="inline-text" placeholder="Name" autofocus>
                                        </div>
                                    </div>

                                    <div class="row mb-2">
                                        <div class="col-3">
                                            <label for="corporate-number" class="form-label required mt-1">Corporate Number</label>
                                        </div>
                                        <div class="col-9">
                                            <input type="text" class="form-control" v-model="form.corporate_number" id="corporate-number" placeholder="01X XX XXX XXX">
                                        </div>
                                    </div>

                                    <div class="row mb-2">
                                        <div class="col-3">
                                            <label for="personal-number" class="form-label required mt-1">Personal Number</label>
                                        </div>
                                        <div class="col-9">
                                            <input type="text" class="form-control" v-model="form.personal_number" id="corporate-number" placeholder="01X XX XXX XXX">
                                        </div>
                                    </div>

                                    <div class="row mb-2">
                                        <div class="col-3">
                                            <label for="bcs-batch" class="form-label required mt-1">BCS Batch</label>
                                        </div>
                                        <div class="col-9">
                                            <input type="text" class="form-control" v-model="form.bcs_batch" id="bcs-batch" placeholder="BCS Batch">
                                        </div>
                                    </div>

                                    <div class="row mb-2">
                                        <div class="col-3">
                                            <label for="facebook" class="form-label required mt-1">Facebook</label>
                                        </div>
                                        <div class="col-9">
                                            <input type="text" class="form-control" v-model="form.facebook" id="facebook" placeholder="Facebook Link">
                                        </div>
                                    </div>

                                    <div class="row mb-2">
                                        <div class="col-3">
                                            <label for="blood-group" class="form-label required mt-1">Blood Group</label>
                                        </div>
                                        <div class="col-9">
                                            <input type="text" class="form-control" v-model="form.blood_group" id="blood-group" placeholder="Blood Group">
                                        </div>
                                    </div>

                                    <div class="row mb-2">
                                        <div class="col-3">
                                            <label for="official-email" class="form-label required mt-1">Official Email Address</label>
                                        </div>
                                        <div class="col-9">
                                            <input type="text" class="form-control" v-model="form.email" id="official-email" placeholder="Official Email Address">
                                        </div>
                                    </div>

                                    <div class="row mb-2">
                                        <div class="col-3">
                                            <label for="image" class="form-label required mt-1">Official Email Address</label>
                                        </div>
                                        <div class="col-9">
                                            <input type="file" class="form-control" id="image" @change="userImage">
                                            <img :src="form.image" alt="image" width="100px" v-if="form.image" class="img-thumbnail">
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-9 offset-3">
                                            <div class="mb-2" v-if="progressBar > 0">
                                                <b-progress :value="progressBar" max="100" show-progress animated></b-progress>
                                            </div>

                                            <button type="submit" class="btn custom-btn btn-success me-2">Submit</button>
                                            <button type="reset" class="btn custom-btn btn-secondary me-2">Reset</button>
                                        
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </form>
                        <!-- end form -->
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import { app, db } from '~/plugins/firebase.js'

export default {
    name: 'NewEmployeeComponent',
    head:{
        title: 'New Employee'
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
                image: ''
            },
            progressBar: 0
        }
    },
    mounted() {

        /*fireDb.collection('employees').get().then(querySnapshot => {
            const documents = querySnapshot.docs.map(doc => doc.data())
            // do something with documents
            console.log(documents)
        })*/
        //this.writeToFirestore()
    },
    computed: {

    },
    methods:{
        reset_form(){
            this.form = {
                name: '',
                corporate_number:'+880',
                personal_number:'+880',
                bcs_batch: '',
                blood_group: '',
                facebook: '',
                email: '',
                image: ''
            }
        },
        saveEmployee(){
            this.$store.dispatch('loading/setLoadingStatus', true)
            db.collection('employees').add(this.form).then((snapshot) =>{
                this.$store.dispatch('loading/setLoadingStatus', false)
                this.reset_form()
            })
        },

        userImage(e){
            let file = e.target.files[0];

            if(file){

                //upload image
                let storageRef = app.storage().ref('employees/'+ Math.random() + '_'  + file.name);
            
                let uploadTask  = storageRef.put(file);
            
                uploadTask.on('state_changed', (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    this.progressBar = progress
                
                },(error) => {
                    // Handle unsuccessful uploads
                },(response) => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        this.form.image = downloadURL;
                        console.log("image Uri: " + this.form.image)
                    });
                });
            }

            if(this.form.image){
                app.storage().refFromURL(this.form.image).delete().then(function(){
                    console.log('delete old image')
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
