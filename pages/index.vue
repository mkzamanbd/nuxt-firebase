<template>
    <div class="login-container">
        <!-- authentication -->
        <section class="authentication">

            <!-- main wrapper -->
            <div class="wrapper">
                <!-- alert -->
                <div class="alert alert-danger p-2 mb-0 border-0 rounded-0" role="alert" v-if="errorMessage">
                    {{ errorMessage }}
                </div>

                <div class="wrap-content">
                    <div class="p-4 pt-2">
                        <!-- Brand logo -->
                        <div class="text-center">
                            <img src="@/assets/template/resources/images/logos/logo_with_name.svg" class="logo" alt="Brand logo">
                        </div>
                        <hr>

                        <!-- page title -->
                        <div class="text-center mt-2 mb-3">
                            <h3 class="main-title">Sign In</h3>
                        </div>

                        <!-- Sum text -->
                        <p class="px-4 text-center mb-3">
                            <small>
                                One account for everything Intuit, including QuickBooks.
                                <a href="#" target="_blank">Learn more</a>
                            </small>
                        </p>

                        <!-- form -->
                        <form @submit.prevent="login">
                            <div class="row g-3">
                                <!-- user ID -->
                                <div class="col-12">
                                    <label for="user" class="form-label required">Email Address</label>
                                    <input type="text" name="user" class="form-control" v-model="credentials.email" id="user" placeholder="access@example.com" required>
                                </div>

                                <!-- password input -->
                                <div class="col-12">
                                    <label for="password" class="form-label required">Password</label>
                                    <div class="input-group">
                                        <input type="password" name="password" v-model="credentials.password" class="form-control" id="password"
                                               placeholder="**********" required>
                                        <a href="#" class="pass-eye" @click="showPassword()"><i class="bi bi-eye-fill"></i></a>
                                    </div>
                                </div>

                                <!-- checkbox input -->
                                <div class="col-12">
                                    <div class="form-check">
                                        <input type="checkbox" name="remember" class="form-check-input" id="remember" value="">
                                        <label class="form-check-label" for="remember">Remember me</label>
                                    </div>
                                </div>


                                <!-- button -->
                                <div class="col-12">
                                    <button v-if="isLoading" type="button" class="btn w-100 btn-success custom-btn mr-2" disabled>
                                        <i class="bi bi-info-circle"></i>
                                        <span>Loading...</span>
                                    </button>
                                    <button type="submit" class="btn w-100 btn-success custom-btn mr-2" v-else>
                                        <i class="bi bi-lock"></i>
                                        <span>Sign in</span>
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
// import firebase from "firebase/app";
// import 'firebase/auth'
export default {
    layout: "auth",
    head:{
        title: 'Login'
    },
    data(){
        return{
            credentials:{
                email: 'admin@directory.com',
                password: '123456'
            },
            isLoading: false,
            errorMessage: ''
        }
    },

    methods: {
        showPassword() {
            let input = document.getElementsByName("password")[0],
                type = input.getAttribute("type");

            if (type === "password") {
                input.type = "text";
                document.querySelector('.bi-eye-fill').classList.add("bi-eye-slash-fill");
            } else {
                input.type = "password";
                document.querySelector('.bi-eye-fill').classList.remove("bi-eye-slash-fill");
            }
        },

        login(){
            this.isLoading = true

            this.$fire.auth.signInWithEmailAndPassword(this.credentials.email, this.credentials.password).then(response =>{
                
                console.log(response.user)



                // response.user.getIdToken(true).then(userToken =>{
                //     console.log(userToken);
                // })
                //console.log(token);
                
                //this.$router.push('/admin')
                this.isLoading = false
            }).catch(error =>{
                this.isLoading = false
                this.errorMessage = error.message
                console.log(error)
            })

        }
    }
}
</script>
