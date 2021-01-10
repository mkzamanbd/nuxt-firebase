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
                                        <td>{{ employee.name }}</td>
                                        <td>{{ employee.corporate_number }}</td>
                                        <td class="print-none text-end">
                                            <a href="" class="btn table-small-button" title="View">
                                                <i class="bi bi-eye"></i>
                                            </a>
                                            <a href="" class="btn table-small-button" title="Return">
                                                <i class="bi bi-trash"></i>
                                            </a>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
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
            employees: []
        }
    },

    mounted() {
        this.loadEmployees()
    },
    methods:{
        loadEmployees(){
            db.collection('employees').get().then(querySnapshot => {
                // do something with documents
                this.employees = querySnapshot.docs.map(doc => doc.data())

                console.log(this.employees)
            }).catch(error =>{
                console.log(error)
            })
        },

        deleteEmployee(uid){
            db.collection("employees").doc(uid).delete().then(function() {
                console.log("Document successfully deleted!");
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            });
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
