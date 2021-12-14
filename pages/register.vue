<template>
    <div class="login-container">
        <!-- authentication -->
        <section class="authentication">

            <!-- main wrapper -->
            <div class="wrapper">

                <div class="wrap-content">
                    <div class="p-4 pt-2">
                        <!-- Brand logo -->
                        <div class="text-center">
                            <img src="@/assets/images/logo_with_name.svg" class="logo" alt="Brand logo">
                        </div>
                        <hr>

                        <!-- page title -->
                        <div class="text-center mt-2 mb-3">
                            <h3 class="main-title">Sign Up</h3>
                        </div>

                        <!-- Sum text -->
                        <p class="px-4 text-center mb-3">
                            <small>
                                One account for everything Intuit, including QuickBooks.
                                <a href="#" target="_blank">Learn more</a>
                            </small>
                        </p>

                        <!-- form -->
                        <form @submit.prevent="register">
                            <div class="row g-3">
                                <!-- user ID -->
                                <div class="col-12">
                                    <label for="user" class="form-label required">Email Address</label>
                                    <input id="user" v-model="credentials.email" type="text" class="form-control" placeholder="access@example.com" required>
                                </div>

                                <!-- password input -->
                                <div class="col-12">
                                    <label for="password" class="form-label required">Password</label>
                                    <div class="input-group">
                                        <input id="password" v-model="credentials.password" type="password"  class="form-control"
                                               placeholder="**********" required>
                                        <a href="#" class="pass-eye" @click="showPassword()"><i class="bi bi-eye-fill"></i></a>
                                    </div>
                                </div>

                                <!-- checkbox input -->
                                <div class="col-12">
                                    <div class="form-check">
                                        <input id="remember" type="checkbox" class="form-check-input" value="">
                                        <label class="form-check-label" for="remember">Remember me</label>
                                    </div>
                                </div>


                                <!-- button -->
                                <div class="col-12">
                                    <button v-if="isLoading" type="button" class="btn w-100 btn-success custom-btn mr-2" disabled>
                                        <i class="bi bi-info-circle"></i>
                                        <span>Loading...</span>
                                    </button>
                                    <button v-else type="submit" class="btn w-100 btn-success custom-btn mr-2">
                                        <i class="bi bi-lock"></i>
                                        <span>Sign Up</span>
                                    </button>
                                </div>

                            </div>
                        </form>

                        <!-- Sign in terms of use -->
                        <div class="text-center text-small my-2">
                            <small>
                                By clicking sign in, you agree to our <br>
                                <a href="#" class="text-small">Terms</a>
                                and have read and acknowledge our
                                <a href="#" class="text-small">Global Privacy Statement.</a>
                            </small>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                credentials:{
                    email: '',
                    password: ''
                },
                isLoading: false
            }
        },
        mounted() {

        },
        methods: {
            showPassword() {
                const input = document.getElementsByName("password")[0];
                const type = input.getAttribute("type");

                if (type === "password") {
                    input.type = "text";
                    document.querySelector('.bi-eye-fill').classList.add("bi-eye-slash-fill");
                } else {
                    input.type = "password";
                    document.querySelector('.bi-eye-fill').classList.remove("bi-eye-slash-fill");
                }
            },

            register(){
                this.isLoading = true
                console.log(this.credentials)
                this.$fire.auth.createUserWithEmailAndPassword(this.credentials.email, this.credentials.password).then((response) =>{
                    // response
                    console.log(response.user)

                }).catch((error) =>{
                    this.isLoading = false
                    this.errorMessage = error.message
                })
            }
        }
    }
</script>
