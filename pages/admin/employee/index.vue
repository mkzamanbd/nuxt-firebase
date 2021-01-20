<template>
    <section>
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

            <div class="container mt-3">
                <!-- table -->
                <div class="card">
                    <div class="card-header d-md-flex align-items-center d-block">
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
                        <nuxt-link to="/admin/employee/create" class="btn top-icon-button print-none">
                            <i class="bi bi-plus-circle"></i>
                        </nuxt-link>
                    </div>
                    <!-- content body -->
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-hover table-bordered">
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
                                            <nuxt-link :to="`/admin/employee/edit/${employee.id}`" class="btn table-small-button p-1"><i class="bi bi-pencil-square"></i></nuxt-link>

                                            <button type="button" class="btn table-small-button p-1" @click.prevent="deleteEmployee(employee)">
                                                <i class="bi bi-x-square"></i>
                                            </button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </section>
</template>

<script>

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
    // async asyncData(ctx) {
    //     let employees = [];
    //     let querySnapshot = await ctx.$fire.firestore.collection('employees').orderBy('name').get();
    //     querySnapshot.forEach((doc) => {
    //         employees.push(doc)
    //     });

    //     return {
    //         employees
    //     }
    // },

    mounted(){
        this.loadEmployees()
    },

    methods:{
        reloadEmployees(){
            this.$fire.firestore.collection("employees").onSnapshot((querySnapshot) => {
                this.employees = []
                querySnapshot.forEach((doc) => {
                    this.employees.push(doc)
                });
            });
        },
        loadEmployees(){
            this.$fire.firestore.collection('employees').get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.employees.push(doc)
                });
        
            }).catch((error) =>{
                console.log(error)
            })
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

        }
    }
}
</script>

<style lang="scss" scoped>

</style>
