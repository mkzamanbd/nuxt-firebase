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
                            <table class="table custom-table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">SL</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col" class="print-none text-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr v-for="(employee, index) in employees" :key="index">
                                        <th scope="row">{{ index + 1}}</th>
                                        <td>{{ employee.data().name }}</td>
                                        <td>{{ employee.data().corporate_number }}</td>
                                        <td class="print-none text-end">
                                            <button type="button" @click="editEmoloyee(employee)" class="btn table-small-button btn-warning text-light p-1" data-bs-toggle="modal" data-bs-target="#editEmoloyee"><i class="bi bi-pencil-square"></i></button>

                                            <button type="button" class="btn table-small-button btn-danger text-light p-1" @click.prevent="deleteEmployee(employee.id)" title="Return">
                                                <i class="bi bi-x-square"></i>
                                            </button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div class="modal fade" ref="my-modal" id="editEmoloyee" style="display: none" tabindex="-1" aria-labelledby="editEmoloyeeLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <form @submit.prevent="updateEmployee">

                                        <div class="modal-header">
                                            <h5 class="modal-title" id="editEmoloyeeLabel">Edit Emoloyee</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>

                                        <div class="modal-body">                                        
                                            <div class="row g-3 justify-content-center">
                                                <!-- type text -->
                                                <div class="col-8">
                                                    <div class="row mb-2">
                                                        <div class="col-4">
                                                            <label for="inline-text" class="form-label required mt-1">Name</label>
                                                        </div>
                                                        <div class="col-8">
                                                            <input type="text" class="form-control" v-model="form.name" id="inline-text" placeholder="Name" autofocus>
                                                        </div>
                                                    </div>

                                                    <div class="row mb-2">
                                                        <div class="col-4">
                                                            <label for="corporate-number" class="form-label required mt-1">Corporate Number</label>
                                                        </div>
                                                        <div class="col-8">
                                                            <input type="text" class="form-control" v-model="form.corporate_number" id="corporate-number" placeholder="017 XX XXX XXX">
                                                        </div>
                                                    </div>

                                                    <div class="row mb-2">
                                                        <div class="col-4">
                                                            <label for="bcs-batch" class="form-label required mt-1">BCS Batch</label>
                                                        </div>
                                                        <div class="col-8">
                                                            <input type="text" class="form-control" v-model="form.bcs_batch" id="bcs-batch" placeholder="BCS Batch">
                                                        </div>
                                                    </div>

                                                    <div class="row mb-2">
                                                        <div class="col-4">
                                                            <label for="facebook" class="form-label required mt-1">Facebook</label>
                                                        </div>
                                                        <div class="col-8">
                                                            <input type="text" class="form-control" v-model="form.facebook" id="facebook" placeholder="Facebook Link">
                                                        </div>
                                                    </div>

                                                    <div class="row mb-2">
                                                        <div class="col-4">
                                                            <label for="blood-group" class="form-label required mt-1">Blood Group</label>
                                                        </div>
                                                        <div class="col-8">
                                                            <input type="text" class="form-control" v-model="form.blood_group" id="blood-group" placeholder="Blood Group">
                                                        </div>
                                                    </div>

                                                    <div class="row mb-2">
                                                        <div class="col-4">
                                                            <label for="official-email" class="form-label required mt-1">Official Email Address</label>
                                                        </div>
                                                        <div class="col-8">
                                                            <input type="text" class="form-control" v-model="form.email" id="official-email" placeholder="Official Email Address">
                                                        </div>
                                                    </div>

                                                    <div class="row mb-2">
                                                        <div class="col-4">
                                                            <label for="image" class="form-label required mt-1">Official Email Address</label>
                                                        </div>
                                                        <div class="col-8">
                                                            <input type="file" class="form-control" id="image" @change="UserImage(this)">
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn custom-btn btn-danger" data-bs-dismiss="modal">Close</button>
                                            <button type="submit" class="btn custom-btn btn-success">Update</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- pagination -->
                    <div class="card-footer print-none">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination pagination-sm m-0  justify-content-end">
                                <li class="page-item disabled"><a class="page-link" href="#"><i class="bi bi-chevron-left"></i></a></li>
                                <li class="page-item"><a class="page-link page-link-active" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#"><i class="bi bi-chevron-right"></i></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
import { db } from '~/plugins/firebase.js'
export default {
    head:{
        title: 'Employee List'
    },
    data(){
        return{
            employees: [],
            form:{
                name: '',
                corporate_number:'+880',
                bcs_batch: '',
                blood_group: '',
                facebook: '',
                email: '',
            },
            employee_uid: null
        }
    },

    mounted() {
        this.loadEmployees()
    },
    methods:{

        reloadEmoloyees(){
            db.collection("employees").onSnapshot((querySnapshot) => {
                this.employees = []
                querySnapshot.forEach((doc) => {
                    this.employees.push(doc)
                });
            });
        },
        loadEmployees(){
            db.collection('employees').get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.employees.push(doc)
                });

            }).catch((error) =>{
                console.log(error)
            })
        },

        editEmoloyee(employee){
            this.form = employee.data()
            this.employee_uid = employee.id
        },

        updateEmployee(){

            console.log(this.employee_uid)
            // // update employee information
            db.collection("employees").doc(this.employee_uid).update(this.form).then((response)=> {
                console.log("Document successfully updated!");
                this.reloadEmoloyees()
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
        },

        deleteEmployee(uid){
            console.log(uid)
            if(confirm('Are You Sure?')){
                db.collection("employees").doc(uid).delete().then((response) => {
                    console.log("Document successfully deleted!");
                    
                }).catch((error) => {
                    console.error("Error removing document: ", error);
                });
                this.reloadEmoloyees()
            }
            
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
