<template>
    <div>
        <div class="container mt-3 user-profile">
            <div class="text-end mb-3 print-none">
                <!-- Print -->
                <a href="#" class="btn top-icon-button print-none ms-auto" title="Print" onclick="window.print()">
                    <i class="bi bi-printer"></i>
                </a>
            </div>
            <div class="card border-0">
                <div class="card-header mb-4 border rounded-0 d-flex align-items-center">
                    <div class="profile-image">
                        <img v-if="employee" :src="employee.image" class="border" alt="profile">
                        <img v-else src="https://cutt.ly/mhFRsxO" class="border" alt="profile">
                        <a href="profile_gallery.html" class="btn" title="Change profile picture"><i class="bi bi-camera"></i></a>
                    </div>
                    <div class="ms-3">
                        <h2>{{ employee ? employee.name : 'Null' }}</h2>
                        <p class="text-muted">{{ this.$route.params.uid }}</p>
                    </div>
                </div>
                <div class="card-body rounded-0 border">
                    <div class="row">
                        <div class="col-12 col-md-4">
                            <div class="info-wrapper px-2">
                                <div class="border-bottom my-2 pb-2 d-flex align-items-center">
                                    <h5>Contact</h5>
                                    <a href="user_settings.html"
                                        class="btn top-icon-button print-none ms-auto print-none"
                                        title="Edit work experience">
                                        <i class="bi bi-pencil-square"></i>
                                    </a>
                                </div>
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <div class="row align-items-start">
                                            <div class="col-1">
                                                <i class="bi bi-telephone"></i>
                                            </div>
                                            <div class="col-10">
                                                <span class="d-block">+880 1786 494650</span>
                                                <span class="d-block">+880 1786 494650</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="row align-items-start">
                                            <div class="col-1">
                                                <i class="bi bi-envelope"></i>
                                            </div>
                                            <div class="col-10">
                                                <span class="d-block">info@maxsop.com</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="row align-items-start">
                                            <div class="col-1">
                                                <i class="bi bi-house-door"></i>
                                            </div>
                                            <div class="col-10">
                                                <span class="d-block">Permanent address:</span>
                                                <span class="d-block">Thana, Upazilla, District, Division,
                                                    Mymensingh</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="row align-items-start">
                                            <div class="col-1">
                                                <i class="bi bi-geo-alt"></i>
                                            </div>
                                            <div class="col-10">
                                                <span class="d-block">Present address:</span>
                                                <span class="d-block">Thana, Upazilla, District, Division,
                                                    Mymensingh</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <h5 class="border-bottom my-2 pb-2">Personal</h5>
                                <ul class="list-group">
                                    <li class="list-group-item"><strong>Date of birth:</strong> <span>5 December,
                                            2020</span></li>
                                    <li class="list-group-item"><strong>Father's name:</strong> <span>Abcd</span></li>
                                    <li class="list-group-item"><strong>Mother's name:</strong> <span>Abcd</span></li>
                                    <li class="list-group-item"><strong>NID number:</strong> <span>123456789</span></li>
                                </ul>
                                
                            </div>
                        </div>
                        <div class="col-12 col-md-8">
                            <div class="border-bottom my-2 pb-2 d-flex align-items-center">
                                <h5>Description</h5>
                                <a href="#" class="btn top-icon-button print-none ms-auto print-none"
                                    title="Edit Deschiption" data-bs-toggle="modal" data-bs-target="#description">
                                    <i class="bi bi-pencil-square"></i>
                                </a>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vel, accusamus quam
                                eligendi aspernatur similique ducimus obcaecati laboriosam maiores iste ex eaque debitis
                                facilis, hic magnam neque? Quasi, incidunt doloremque!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: 'EmployeeProfileComponent',
    head:{
        title: 'Employee Profile'
    },
    data(){
        return {
            employee: {}
        }
    },
    mounted() {
        this.getEmployee()
        //console.log(this.employee)
    },

    methods:{
        getEmployee() {
            this.$fire.firestore.collection("employees").doc(this.$route.params.uid).get().then((snapshot) =>{
                this.employee = snapshot.data()
            }).catch((error) =>{
                
                console.log(error)
            });
        }
    }

}
</script>

<style lang="scss" scoped>

</style>
