<template>
    <div class="dashboard">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="row d-flex align-items-center justify-content-center">
                        <!-- <h1 class="text-center">Dashboard</h1> -->
                    </div>
                    <!-- <button type="button" @click="createUser">Create User</button> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import userData from '@/assets/location/UserData.json'
export default {
    head:{
        title: 'Dashboard'
    },
    computed:{
        users(){
            return userData
        }
    },
    methods:{
        createUser(){
            this.users.forEach(user =>{
                // console.log({...user, image:''})
                // console.log(user.name + ' Employee Creating...')
                this.$fire.firestore.collection('employees').add({...user, image:''}).then((snapshot) =>{
                    console.log(snapshot)
                    console.log(user.name + ' Employee Successfully Created.')
                }).catch(error =>{
                    console.log(error)
                })
                
            })
        }
    }
}
</script>                                                         
