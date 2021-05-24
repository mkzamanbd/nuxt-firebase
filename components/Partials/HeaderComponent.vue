<template>
    <header>
        <nav class="navbar page-navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <!-- Aside expand button -->
                <div class="expand-button">
                    <button class="btn btn-outline-success p-1" @click="asideExpand()">
                        <i class="bi bi-list-nested"></i>
                    </button>
                </div>
                <!-- End aside expand button -->

                <!-- dark button -->
                <button class="btn cuttom-btn btn-light btn-sm p-0 dark-button ms-auto"><i class="bi bi-moon"></i></button>
                <!-- End dark button -->

                <!-- Responsive button -->
                <button class="navbar-toggler p-1 ms-auto" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <i class="bi bi-three-dots-vertical"></i>
                </button>
                <!-- End responsive button -->
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav my-2 text-end ms-auto mb-lg-0 py-3 py-lg-0">
                        <!-- Help -->
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">
                                <span class=" me-3 me-lg-1">Help</span>
                                <i class="bi bi-info-circle"></i>
                            </a>
                        </li>
                        <!-- Search -->
                        
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#" id="user-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="d-lg-none me-3">Profile</span>
                                <i class="bi bi-person"></i>
                            </a>
                            <ul class="dropdown-menu"  aria-labelledby="user-dropdown">
                                <li>
                                    <a class="dropdown-item" href="user_profile.html">
                                        <div class="d-flex align-items-center my-2">
                                            <img src="https://ui-avatars.com/api/?name=PhoneBook" class="user-icon" alt="">
                                            <div class="ms-2">
                                                <h6>PhoneBook Admin</h6>
                                                <p class="text-small">{{ currentUser.email }}</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <hr>
                                <li><a class="dropdown-item" href="#">Settings</a></li>
                                <li><a class="dropdown-item" href="#">Change Password</a></li>
                                <hr>
                                <li><a class="dropdown-item" href="#" @click.prevent="Logout">Log Out</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name:'HeaderComponent',
        computed:{
            currentUser(){
                return this.$store.state.authUser;
            }
        },
        mounted(){
            //console.log(this.currentUser)
        },
        methods:{
            asideExpand(){
                document.querySelector(".page-aside").classList.toggle("hide")
                document.querySelector(".mainbar").classList.toggle("expand")
                document.querySelector(".page-aside-layer").classList.toggle("show")
            },
            Logout(){
                this.$fire.auth.signOut().then(() => {
                    // Sign-out successful.
                    window.location.reload()
                }).catch((error) => {
                    // An error happened.
                    console.log(error);
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
