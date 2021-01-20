<template>
    <section>
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

            <div class="container mt-3">
                <div class="card">
                    <div class="card-header d-flex">
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

                    <div class="card-body">
                        <!-- start form -->
                        <form @submit.prevent="saveEmployee">

                            <div class="row g-3 justify-content-center">
                                <!-- type text -->
                                <div class="col-md-8">
                                    <div class="row mb-2">
                                        <div class="col-md-3">
                                            <label for="inline-text" class="form-label required mt-1">Name</label>
                                        </div>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" v-model="form.name" id="inline-text" placeholder="Name" required autofocus>
                                        </div>
                                    </div>

                                    <div class="row mb-2">
                                        <div class="col-md-3">
                                            <label for="corporate-number" class="form-label required mt-1">Corporate Number</label>
                                        </div>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" v-model="form.corporate_number" id="corporate-number" placeholder="01X XX XXX XXX">
                                        </div>
                                    </div>

                                    <div class="row mb-2">
                                        <div class="col-md-3">
                                            <label for="personal-number" class="form-label required mt-1">Personal Number</label>
                                        </div>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" v-model="form.personal_number" id="personal-number" placeholder="01X XX XXX XXX">
                                        </div>
                                    </div>

                                    <div class="row mb-2">
                                        <div class="col-md-3">
                                            <label for="bcs-batch" class="form-label required mt-1">BCS Batch</label>
                                        </div>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" v-model="form.bcs_batch" id="bcs-batch" placeholder="BCS Batch">
                                        </div>
                                    </div>

                                    <div class="row mb-2">
                                        <div class="col-md-3">
                                            <label for="facebook" class="form-label required mt-1">Facebook</label>
                                        </div>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" v-model="form.facebook" id="facebook" placeholder="Facebook Link">
                                        </div>
                                    </div>

                                    <div class="row mb-2">
                                        <div class="col-md-3">
                                            <label for="blood-group" class="form-label required mt-1">Blood Group</label>
                                        </div>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" v-model="form.blood_group" id="blood-group" placeholder="Blood Group">
                                        </div>
                                    </div>

                                    <div class="row mb-2">
                                        <div class="col-md-3">
                                            <label for="official-email" class="form-label required mt-1">Official Email Address</label>
                                        </div>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" v-model="form.email" id="official-email" placeholder="Official Email Address">
                                        </div>
                                    </div>

                                    <div class="row mb-2">
                                        <div class="col-md-3">
                                            <label for="division" class="form-label required mt-1">Location</label>
                                        </div>
                                        <div class="col-md-9">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <select class="form-select" id="division" v-model="form.division_id" @change="getDistricts">
                                                        <option value="" selected>Choose Division</option>
                                                        <option :value="division.id" v-for="(division, index) in divisions" :key="index">{{ division.name }}</option>
                                                    </select>
                                                </div>

                                                <div class="col-md-6">
                                                    <select class="form-select" id="district" v-model="form.district_id" @change="getUpazilas">
                                                        <option value="" selected>Choose District</option>
                                                        <option :value="district.id" v-for="(district, index) in districts" :key="index">{{ district.name }}</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="row mt-2">
                                                <div class="col-md-6">
                                                    <select class="form-select" id="upazilas" v-model="form.upazila_id">
                                                        <option value="" selected>Choose Upazila</option>
                                                        <option :value="upazila.id" v-for="(upazila, index) in upazilas" :key="index">{{ upazila.name }}</option>
                                                    </select>
                                                </div>

                                                <div class="col-md-6">
                                                    <input type="text" class="form-control" v-model="form.address" id="address" placeholder="Address">
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="row mb-2">
                                        <div class="col-md-3">
                                            <label for="image" class="form-label required mt-1">Photo</label>
                                        </div>
                                        <div class="col-md-9">
                                            <input type="file" class="form-control" id="image" @change="userImage">
                                            <img :src="form.image" alt="image" width="100px" v-if="form.image" class="img-thumbnail mt-2">
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-9 offset-3">
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

    </section>
</template>

<script>

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
                division_id: '',
                district_id: '',
                upazila_id: '',
                address: '',
                image: ''
            },

            progressBar: 0,
            divisions: [],
            districts: [],
            upazilas: [],
        }
    },
    mounted() {
        this.getDivisions()
    },

    methods:{
        getDivisions(){
            this.$fire.firestore.collection('divisions').get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.divisions.push(doc.data())
                });
            }).catch((error) =>{
                console.log(error)
            })
        },

        getDistricts(){
            this.$fire.firestore.collection('districts').where('division_id', '==', this.form.division_id).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.districts.push(doc.data())
                });
            }).catch((error) =>{
                console.log(error)
            })
        },

        getUpazilas(){
            this.$fire.firestore.collection('upazilas').where('district_id', '==', this.form.district_id).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.upazilas.push(doc.data())
                });
            }).catch((error) =>{
                console.log(error)
            })
        },

        reset_form(){
            this.form = {
                name: '',
                corporate_number:'+880',
                personal_number:'+880',
                bcs_batch: '',
                blood_group: '',
                facebook: '',
                email: '',
                division_id: '',
                district_id: '',
                upazila_id: '',
                address: '',
                image: ''
            }
            this.progressBar = 0
        },
        saveEmployee(){
            this.$store.dispatch('loading/setLoadingStatus', true)
            this.$fire.firestore.collection('employees').add(this.form).then((snapshot) =>{
                this.$toast.success('Employee Successfully Saved.')
                this.$store.dispatch('loading/setLoadingStatus', false)
                this.reset_form()
            })
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
