<template>
    <div class="container px-6 mx-auto grid">
        <!-- breadcrumb -->
        <div class="flex items-center py-4">
            <ol class="flex text-sm leading-6 whitespace-nowrap min-w-0">
                <li class="flex items-center">
                    <span class="text-gray-900 dark:text-gray-200">Dashboard</span>
                    <svg width="3" height="6" aria-hidden="true" class="mx-3 overflow-visible text-gray-400">
                        <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                    </svg>
                </li>
                <li class="font-semibold text-gray-900 truncate dark:text-gray-200">Home</li>
            </ol>
        </div>
        <a class="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-primary rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple" href="#">
            <div class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span>Star this project on GitHub</span>
            </div>
            <span>View more →</span>
        </a>
        <!-- Cards -->
        <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
            <!-- Card -->
            <div class="flex items-center p-4 card">
                <div class="text-sm">
                    <span class="text-gray-700 dark:text-gray-400">
                        App Update
                    </span>
                    <div class="mt-4">
                        <label class="inline-flex items-center text-gray-600 dark:text-gray-400">
                            <input v-model="jerpApp.is_optional" value="N" type="radio" class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray" @change="handleAppUpdate">
                            <span class="ml-2">Optional</span>
                        </label>
                        <label class="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400">
                            <input v-model="jerpApp.is_optional" value="Y" type="radio" class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray" @change="handleAppUpdate">
                            <span class="ml-2">Required</span>
                        </label>
                    </div>
                </div>
            </div>
            <!-- Card -->
            <div class="flex items-center p-4 card">
                <div class="text-sm">
                    <span class="text-gray-700 dark:text-gray-400">
                        Demo Mode
                    </span>
                    <div class="mt-4">
                        <label class="inline-flex items-center text-gray-600 dark:text-gray-400">
                            <input v-model="is_demo_mode_on" value="1" type="radio" class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray" @change="handleDemoMode">
                            <span class="ml-2">On</span>
                        </label>
                        <label class="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400">
                            <input v-model="is_demo_mode_on" value="0" type="radio" class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray" @change="handleDemoMode">
                            <span class="ml-2">OFF</span>
                        </label>
                    </div>
                </div>
            </div>
            <!-- Card -->
            <div class="flex items-center p-4 card">
                <div class="text-sm">
                    <span class="text-gray-700 dark:text-gray-400">
                        App Version
                    </span>
                    <div class="mt-4">
                        <label class="block text-sm">
                            <input v-model="jerpApp.version" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray" @keydown.enter="handleAppVersion">
                        </label>
                    </div>
                </div>
            </div>
            <!-- Card -->
            <div class="flex items-center p-4 card">
                <div class="text-sm">
                    <span class="text-gray-700 dark:text-gray-400">
                        Product ({{ productTime }})
                    </span>
                    <div class="mt-4">
                        <label class="block text-sm">
                            <input v-model="product" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray" @keydown.enter="handleProductTime">
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                jerpApp: {},
                is_demo_mode_on: null,
                users: [],
                isLoaded: false,
                product: null,
                productTime: null,
            }
        },
        head:{
            title: 'Dashboard'
        },
        mounted(){
            // get data on firebase database
            this.$fire.database.ref('app_version').on('value', (snapshot) => {
                this.jerpApp = snapshot.val();
                console.log('app-version', snapshot.val())
            });
            this.$fire.database.ref('is_demo_mode_on').on('value', (snapshot) => {
                this.is_demo_mode_on = snapshot.val();
                console.log('demo mode', snapshot.val())
            });
            this.$fire.database.ref('product').on('value', (snapshot) => {
                this.productTime = snapshot.val();
                this.product = new Date(snapshot.val()).toLocaleString();
                console.log('product', snapshot.val())
            });
        },
        methods:{
            handleAppUpdate(){
                const ref = this.$fire.database.ref('app_version/');
                try{
                    ref.child('is_optional').set(this.jerpApp.is_optional);
                    this.$toast.success(`Successfully updated`);
                }
                catch(error){
                    console.log(error)
                    this.$toast.error(`Failed to update`);
                }
            },
            handleAppVersion(){
                const ref = this.$fire.database.ref('app_version/');
                try{
                    ref.child('version').set(this.jerpApp.version);
                    this.$toast.success(`App version successfully updated: ${this.jerpApp.version}`);
                }
                catch(error){
                    console.log(error)
                    this.$toast.error(`App version failed to update: ${this.jerpApp.version}`);
                }
            },
            handleDemoMode(){
                this.$fire.database.ref('is_demo_mode_on').set(this.is_demo_mode_on);
                this.$toast.success(`Demo mode: ${this.is_demo_mode_on === '1' ? 'ON' : 'OFF'}`);
            },
            handleProductTime(){
                try{
                    this.$fire.database.ref('product').set(new Date(this.product).getTime());
                    this.$toast.success(`Product time successfully updated`);
                }
                catch(error){
                    console.log(error)
                    this.$toast.error(`Product time failed to update`);
                }
            },
        }
    }
</script>                                                         