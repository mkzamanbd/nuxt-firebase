<template>
    <div class="dashboard">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Dashboard</h1>
                    <div class="mt-5">
                        <!-- primary button -->
                        <button class="btn custom-btn btn-primary me-2" @click="importDivisions">Import Divisions</button>

                        <!-- secondary button -->
                        <button class="btn custom-btn btn-secondary me-2" @click="importDistricts">Import Districts</button>

                        <!-- success button -->
                        <button class="btn custom-btn btn-success me-2" @click="importUpazilas">Import Upazilas</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import divisions from '@/assets/location/divisions.json';
import districts from '@/assets/location/districts.json';
import upazilas from '@/assets/location/upazilas.json';

export default {
    head:{
        title: 'Dashboard'
    },
    computed:{
        divisions(){
            return divisions
        },

        districts(){
            return districts
        },

        upazilas(){
            return upazilas
        }
    },
    mounted(){},

    methods:{

        //import divisions to firestore collection
        importDivisions(){
            let count = 1
            this.divisions.forEach((doc) => {
                console.log(count+ '=>' + doc)
                // this.$fire.firestore.collection('divisions').add(doc).then((snapshot) =>{
                //     console.log(snapshot)
                // })
                count ++
            });
        },

        //import districts to firestore collection
        importDistricts(){
            let count = 1
            this.districts.forEach((doc) => {
                console.log(count+ '=>' + doc)
                // this.$fire.firestore.collection('districts').add(doc).then((snapshot) =>{
                //     console.log(snapshot)
                // })
                count ++
            });
        },

        //import upazilas to firestore collection
        importUpazilas(){
            let count = 1
            this.upazilas.forEach((doc) => {
                console.log(count+ '=>' + doc)
                // this.$fire.firestore.collection('upazilas').add(doc).then((snapshot) =>{
                //     console.log(count + snapshot)
                // })
                count ++
            });
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
