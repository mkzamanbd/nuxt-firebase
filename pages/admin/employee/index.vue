<template>
    <div>
        <PreloaderComponent/>
        <div class="user-list">
            <div class="container print-none">
                <ul class="nav nav-tabs mt-2">
                    <li class="nav-item">
                        <nuxt-link class="nav-link active" to="/admin/employee">All Records</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/admin/employee/create">New Entry</nuxt-link>
                    </li>
                </ul>
            </div>

            <div class="container">
                <!-- table -->
                <div class="card border-0">
                    <div class="card-header p-0 d-md-flex align-items-center border-0  d-block">
                        <!-- page title -->
                        <div class="mt-3 mb-2">
                            <h4 class="main-title">Employees List</h4><br>
                            <small class="print-none">About 563,000,000 results (0.98 seconds)</small>
                        </div>
                        <!-- Print -->
                        <a href="#" class="btn top-icon-button print-none ms-auto" title="Print" onclick="window.print()">
                            <i class="bi bi-printer"></i>
                        </a>
                        <!-- refresh -->
                        <a href="" class="btn top-icon-button print-none" title="Refresh">
                            <i class="bi bi-arrow-clockwise"></i>
                        </a>
                        <!-- add -->
                        <a href="" class="btn top-icon-button print-none" title="Creat new purchase">
                            <i class="bi bi-plus-circle"></i>
                        </a>
                    </div>
                    <!-- content body -->
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table custom-table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">SL</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col" class="text-center">Image</th>
                                        <th scope="col" class="print-none text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr v-for="(employee, index) in employees" :key="index">
                                        <th scope="row">{{ index + 1}}</th>
                                        <td>{{ employee.data().name }}</td>
                                        <td>{{ employee.data().corporate_number }}</td>
                                        <td class="text-center">
                                            <img :src="employee.data().image" v-if="employee.data().image" alt="image" width="80px" class="img-thumbnail">
                                            <img :src="`https://ui-avatars.com/api/?background=random&name=${employee.data().name}`" v-else alt="image" width="80px" class="img-thumbnail">
                                        </td>
                                        <td class="print-none text-center">

                                            <nuxt-link :to="`/admin/employee/${employee.id}`" class="btn table-small-button p-1"><i class="bi bi-person-bounding-box"></i></nuxt-link>
                                            <button type="button" @click="editEmployee(employee)" class="btn table-small-button p-1" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen"><i class="bi bi-pencil-square"></i></button>

                                            <button type="button" class="btn table-small-button p-1" @click.prevent="deleteEmployee(employee)">
                                                <i class="bi bi-x-square"></i>
                                            </button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        <div class="modal fade" id="exampleModalFullscreen" tabindex="-1" aria-labelledby="exampleModalFullscreenLabel" aria-modal="true" role="dialog">
                            <div class="modal-dialog modal-fullscreen">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="editEmployeeLabel">Edit Employee</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
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
                                                            <input type="text" class="form-control" v-model="form.corporate_number" id="corporate-number" placeholder="01X XX XXX XXX">
                                                        </div>
                                                    </div>

                                                    <div class="row mb-2">
                                                        <div class="col-md-4">
                                                            <label for="personal-number" class="form-label required mt-1">Personal Number</label>
                                                        </div>
                                                        <div class="col-md-8">
                                                            <input type="text" class="form-control" v-model="form.personal_number" id="personal-number" placeholder="01X XX XXX XXX">
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
                                                            <input type="text" class="form-control" v-model="form.email" id="official-email" placeholder="Official Email Address">
                                                        </div>
                                                    </div>

                                                    <div class="row mb-2">
                                                        <div class="col-md-4">
                                                            <label for="division" class="form-label required mt-1">Location</label>
                                                        </div>
                                                        <div class="col-md-8">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <select class="form-select" id="division" v-model="form.division_id" @change="getDistricts">
                                                                        <option value="">Choose Division</option>
                                                                        <option :value="division.id" :selected="form.division_id === division.id" v-for="(division, index) in divisions" :key="index">{{ division.name }}</option>
                                                                    </select>
                                                                </div>

                                                                <div class="col-md-6">
                                                                    <select class="form-select" id="district" v-model="form.district_id" @change="getUpazilas">
                                                                        <option value="">Choose District</option>
                                                                        <option :value="district.id" :selected="form.district_id === district.id" v-for="(district, index) in districts" :key="index">{{ district.name }}</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div class="row mt-2">
                                                                <div class="col-md-6">
                                                                    <select class="form-select" id="upazilas" v-model="form.upazila_id">
                                                                        <option value="">Choose Upazila</option>
                                                                        <option :value="upazila.id" :selected="form.upazila_id === upazila.id" v-for="(upazila, index) in upazilas" :key="index">{{ upazila.name }}</option>
                                                                    </select>
                                                                </div>

                                                                <div class="col-md-6">
                                                                    <input type="text" class="form-control" v-model="form.address" id="address" placeholder="Address">
                                                                </div>
                                                            </div>
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
                                                                <button type="reset" class="btn custom-btn btn-secondary me-2" data-bs-dismiss="modal">Close</button>
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
                        </div>

                    </div>

                </div>

            </div>
        </div>

    </div>
</template>

<script>

export default {
    head:{
        title: 'Employee List'
    },
    data(){
        return{
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
            employee_uid: null
        }
    },
    async asyncData(ctx) {
        let employees = [];
        let querySnapshot = await ctx.$fire.firestore.collection('employees').orderBy('name').get();
        querySnapshot.forEach((doc) => {
            employees.push(doc)
        });

        return {
            employees
        }
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

        reloadEmployees(){
            this.$fire.firestore.collection("employees").onSnapshot((querySnapshot) => {
                this.employees = []
                querySnapshot.forEach((doc) => {
                    this.employees.push(doc)
                });
            });
        },
        // loadEmployees(){
        //     this.$fire.firestore.collection('employees').get().then((querySnapshot) => {
        //         querySnapshot.forEach((doc) => {
        //             this.employees.push(doc)
        //         });
        //
        //     }).catch((error) =>{
        //         console.log(error)
        //     })
        // },

        editEmployee(employee){
            this.getDivisions()
            this.getDistricts()
            this.getUpazilas()
            this.form = employee.data()
            this.employee_uid = employee.id
        },

        updateEmployee(){
            // // update employee information
            this.$fire.firestore.collection("employees").doc(this.employee_uid).update(this.form).then((response)=> {
                console.log("Document successfully updated!");
                this.$toast.success('Document successfully updated.')
                this.reloadEmployees()
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
        },

        deleteEmployee(employee){
            //delete employee

            if(confirm('Are You Sure?')){
                //delete image form storage
                if(employee.data().image){
                    this.$fire.storage.refFromURL(employee.data().image).delete().then(function(){
                        console.log('delete image')
                    }).catch( (error) =>{
                        console.log(error)
                    });
                }

                this.$fire.firestore.collection("employees").doc(employee.id).delete().then((response) => {
                    this.$toast.success('Document successfully deleted.')
                    console.log("Document successfully deleted!");

                }).catch((error) => {

                    console.error("Error removing document: ", error);
                });
                this.reloadEmployees()
            }

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
