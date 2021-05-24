<template>
    <section class="full-wrapper">
        <div class="wrapper">
            <div class="alert alert-danger" role="alert" v-if="errorMessage">
                {{ errorMessage }}
            </div>
            <!-- End: alert message -->

            <!--logo -->
            <img class="logo" src="@/assets/images/logo_with_name.svg" alt="logo">
            <!-- End: logo -->

            <!-- Title -->
            <h2>Login</h2>
            <!-- End: title -->

            <!-- Sign in form -->
            <form method="POST" @submit.prevent="login">
                <div class="input-group">
                    <span class="input-group-text"><i class="fa fa-user-circle-o"></i></span>
                    <input type="text" name="email" class="form-control" v-model="credentials.email" placeholder="Email" required autofocus>
                </div>

                <div class="input-group">
                    <span class="input-group-text"><i class="fa fa-key"></i></span>
                    <input type="password" name="password" class="form-control" v-model="credentials.password" placeholder="Password" required>
                    <a href="#" class="pass-eye" @click.prevent="showPassword()"><i class="fa fa-eye"></i></a>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="remember" id="flexCheckChecked">
                    <label class="form-check-label" for="flexCheckChecked">Remember Me</label>
                </div>

                <div class="form-group d-block">
                    <button type="submit" class="btn mt-3 btn-success signin-btn">Login</button>
                </div>
            </form>
            <!-- End: Sign in form -->

            <!-- sign in text -->
            <a href="">Forgot password</a>
            <!-- End: sign In text -->

            <!-- sign in footer -->
            <div class="footer">
                <p>&copy; 2020 <a href="#">MaxSOP</a>. All rights reserved.</p>
                <p>Develop by <a href="http://maxsop.com/" target="_blank">MaxSOP</a></p>
            </div>
            <!-- End: sign in footer -->
        </div>
    </section>
</template>

<script>
// import firebase from "firebase/app";
// import 'firebase/auth'
export default {
    layout: "auth",
    head:{
        title: 'Login',
        link:[
            { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
        ]
    },
    data(){
        return{
            credentials:{
                email: 'user@phonebook.com',
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

            if(type === "password") {
                input.type = "text";
                document.querySelector('.fa-eye').classList.add("fa-eye-slash");
            } else {
                input.type = "password";
                document.querySelector('.fa-eye').classList.remove("fa-eye-slash");
            }
        },

        login(){
            this.isLoading = true

            this.$fire.auth.signInWithEmailAndPassword(this.credentials.email, this.credentials.password).then(response =>{

                window.location.reload()
                this.$router.push('/dashboard')
            }).catch(error =>{
                this.isLoading = false
                this.errorMessage = error.message
            })

        }
    }
}
</script>
