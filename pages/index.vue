<template>
    <section class="full-wrapper">
        <div class="wrapper">
            <div class="alert alert-danger" role="alert" v-if="errorMessage">
                {{ errorMessage }}
            </div>
            <!-- End: alert message -->

            <img src="https://www.gstatic.com/devrel-devsite/prod/v33e7b2dc41690dd155c39da725d6a2a9b37af85c625b82149b8b1a06c071a1a2/firebase/images/lockup.png" class="img-fluid mt-3" alt="">

            <!-- Sign in form -->
            <form method="POST" @submit.prevent="login">
                <div class="input-group">
                    <span class="input-group-text"><i class="bi bi-people"></i></span>
                    <input type="text" name="email" class="form-control" v-model="credentials.email" placeholder="Email" required autofocus>
                </div>

                <div class="input-group">
                    <span class="input-group-text"><i class="bi bi-key"></i></span>
                    <input :type="togglePassword ? 'text' :'password'" name="password" class="form-control" v-model="credentials.password" placeholder="Password" required>
                    <a href="#" class="pass-eye text-upprcase" @click.prevent="togglePassword = !togglePassword">{{ togglePassword ? 'hide' :'show' }}</a>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="remember" id="flexCheckChecked">
                    <label class="form-check-label" for="flexCheckChecked">Remember Me</label>
                </div>

                <div class="form-group d-block">
                    <button type="submit" :disabled="isLoading" class="btn mt-3 btn-success signin-btn">Login</button>
                </div>
            </form>
            <!-- End: Sign in form -->

            <!-- sign in text -->
            <a href="">Forgot password</a>
            <!-- End: sign In text -->

            <!-- sign in footer -->
            <div class="footer">
                <p>&copy; 2020 <a href="#">Firebase</a>. All rights reserved.</p>
                <p>Develop by <a href="http://firebase.com" target="_blank">Firebase</a></p>
            </div>
            <!-- End: sign in footer -->
        </div>
    </section>
</template>

<script>
export default {
    layout: "empty",
    head:{
        title: 'Login',
    },
    data(){
        return{
            credentials:{
                email: 'user@phonebook.com',
                password: '123456'
            },
            togglePassword: false,
            isLoading: false,
            errorMessage: ''
        }
    },

    methods: {
        async login(){
            this.isLoading = true

            await this.$fire.auth.signInWithEmailAndPassword(this.credentials.email, this.credentials.password).then(response =>{
                console.log(response)
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

<style lang="scss" scoped>
// helpers =================================>
// Mixin ==================================>
// Flex-box
@mixin f-box($ai: flex-start, $jc: flex-start, $fw: nowrap, $fd: row) {
    display: flex;
    align-items: $ai;
    justify-content: $jc;
    flex-wrap: $fw;
    flex-direction: $fd;
}

// variables ==============================>
// Color
$pc : #007cc0;
$sc : #2a3f4c;
$wc : #f9f9f9;
$gc : gray;

// Transition
$ts: all linear .2s;

// box-shadow
$bs: 0 2px 15px rgba(0, 0, 0, 0.175);


// Start style ========================>
.full-wrapper{
    min-height: 100vh;
    @include f-box($ai: center,);
    .wrapper{
        background-color: $wc;
        width: 400px;
        margin: 0 auto;
        text-align: center;
        padding-bottom: 20px;
        border-top: 5px solid $pc;
        border-radius: 5px;
        box-shadow: $bs;
        @media screen and (max-width: 600px){
            width: 100%;
            padding: 20px;
            min-height: 100vh;
            border-radius: 0;
        }
        .alert-danger{
            border-radius: 0;
            border: none;
            color: #ff0000;
        }
        .logo{
            margin-top: 40px;
            width: 190px;
        }
        h2{
            margin-top: 10px;
            color: $sc;
        }
        form{
            padding: 20px;
            input[type="password"]{
                position: relative;
            }
            .pass-eye{
                color: $sc;
                border: none;
                background-color: transparent;
                position: absolute;
                right: 10px;
                top: 11px;
                font-size: 12px;
                z-index: 9;
                text-transform: uppercase;
            }
            .input-group{
                margin-bottom: 20px;
                .form-control, .input-group-text{
                    border-radius: 0;
                }
            }
            .form-check{
                text-align: left;
                input, label{
                    cursor: pointer;
                }
            }
            .signin-btn{
                color: $wc;
                background: $pc;
                width: 100%;
                display: block;
                border-radius: 2px;
            }
        }
        .footer{
            border-top: 1px solid $sc;
            right: 0;
            left: 0;
            margin-top: 20px;
            padding-top: 10px;
            p{
                margin: 0;
                font-size: 14px;
            }

        }
    }
}
</style>