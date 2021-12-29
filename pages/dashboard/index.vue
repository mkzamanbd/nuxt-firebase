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
                <li class="font-semibold text-gray-900 truncate dark:text-gray-200">Dashboard V1</li>
            </ol>
        </div>
        <!-- breadcrumb end -->
        <!-- Cards -->
        <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
            <!-- Card -->
            <div class="flex items-center p-4 bg-white rounded-lg shadow-xs border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                <div class="text-sm">
                    <span class="text-gray-700 dark:text-gray-400">
                        App Update
                    </span>
                    <div class="mt-4">
                        <label class="inline-flex items-center text-gray-600 dark:text-gray-400">
                            <input v-model="app_version.is_optional" value="N" type="radio" class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
                            <span class="ml-2">Optional</span>
                        </label>
                        <label class="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400">
                            <input v-model="app_version.is_optional" value="Y" type="radio" class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
                            <span class="ml-2">Required</span>
                        </label>
                    </div>
                </div>
            </div>
            <!-- Card -->
            <div class="flex items-center p-4 bg-white rounded-lg shadow-xs border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                <div class="text-sm">
                    <span class="text-gray-700 dark:text-gray-400">
                        Demo Mode
                    </span>
                    <div class="mt-4">
                        <label class="inline-flex items-center text-gray-600 dark:text-gray-400">
                            <input v-model="is_demo_mode_on" value="1" type="radio" class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
                            <span class="ml-2">On</span>
                        </label>
                        <label class="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400">
                            <input v-model="is_demo_mode_on" value="0" type="radio" class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
                            <span class="ml-2">OFF</span>
                        </label>
                    </div>
                </div>
            </div>
            <!-- Card -->
            <div class="flex items-center p-4 bg-white rounded-lg shadow-xs border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                <div class="text-sm">
                    <span class="text-gray-700 dark:text-gray-400">
                        App Name
                    </span>
                    <div class="mt-4">
                        <label class="block text-sm">
                            <input v-model="app_version.name" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray">
                        </label>
                    </div>
                </div>
            </div>
            <!-- Card -->
            <div class="flex items-center p-4 bg-white rounded-lg shadow-xs border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                <div class="text-sm">
                    <span class="text-gray-700 dark:text-gray-400">
                        App Version
                    </span>
                    <div class="mt-4">
                        <label class="block text-sm">
                            <input v-model="app_version.version" class="block w-full mt-1 text-sm border rounded appearance-none p-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray">
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
                app_version: {},
                is_demo_mode_on: null
            }
        },
        head:{
            title: 'Dashboard'
        },
        mounted(){
            // get data on firebase database
            this.$fire.database.ref('app_version').on('value', (snapshot) => {
                this.app_version = snapshot.val();
                console.log(snapshot.val())
            })
            this.$fire.database.ref('is_demo_mode_on').on('value', (snapshot) => {
                this.is_demo_mode_on = snapshot.val();
                console.log(snapshot.val())
            })
        },
    }
</script>                                                         