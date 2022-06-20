<template>
    <aside
        id="sidebar"
        x-transition:enter="transition ease-in-out duration-150"
        x-transition:enter-start="opacity-0 transform -translate-x-20"
        x-transition:enter-end="opacity-100"
        x-transition:leave="transition ease-in-out duration-150"
        x-transition:leave-start="opacity-100"
        x-transition:leave-end="opacity-0 transform -translate-x-20"
        class="z-20 fixed left-0 flex flex-col max-h-screen border-r border-r-gray-300 dark:border-r-gray-700 md:border-0 overflow-hidden md:relative inset-0 flex-shrink-0 w-64 bg-white dark:bg-gray-800 md:block lg:block"
        :class="{'hidden' : !isSideMenuOpen}"
        @keydown.escape="isSideMenuOpen = false"
    >
        <nav class="text-gray-500 dark:text-gray-400 h-full">
            <div class="px-6 flex justify-between items-center h-16 md:border-b md:border-b-gray-300 md:dark:border-b-gray-700">
                <a class="text-lg font-bold text-gray-800 dark:text-gray-200" href="/">
                    <span>Firebase</span>
                </a>
                <button type="button" class="md:hidden" @click="isSideMenuOpen = false">
                    <svg viewBox="0 0 10 10" class="w-2 h-2 overflow-visible">
                        <path d="M0 0L10 10M10 0L0 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    </svg>
                </button>
            </div>

            <ul id="sidebar-link" class="sidebar-link top-16 inset-y-0 overflow-y-auto fixed w-64 py-4">
                <li class="relative px-6">
                    <span v-if="$route.path == '/dashboard'" class="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg" aria-hidden="true"></span>
                    <nuxt-link :class="{'text-gray-800 dark:text-gray-100' : $route.path == '/dashboard'}" class="py-3 flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" to="/dashboard">
                        <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                        <span class="ml-4">Dashboard</span>
                    </nuxt-link>
                </li>

                <li class="relative px-6">
                    <span v-if="$route.path == '/dashboard/user'" class="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg" aria-hidden="true"></span>
                    <nuxt-link :class="{'text-gray-800 dark:text-gray-100' : $route.path == '/dashboard/user'}" class="py-3 flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" to="/dashboard/user">
                        <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                        </svg>
                        <span class="ml-4">Manage Users</span>
                    </nuxt-link>
                </li>
                <li class="relative px-6">
                    <span v-if="$route.path == '/contacts'" class="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg" aria-hidden="true"></span>
                    <nuxt-link :class="{'text-gray-800 dark:text-gray-100' : $route.path == '/contacts'}" class="py-3 flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" to="/contacts">
                        <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                        </svg>
                        <span class="ml-4">Contacts List</span>
                    </nuxt-link>
                </li>

                <li class="relative px-6">
                    <span v-if="$route.path == '/notification'" class="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg" aria-hidden="true"></span>
                    <nuxt-link :class="{'text-gray-800 dark:text-gray-100' : $route.path == '/notification'}" class="py-3 flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" to="/notification">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                        </svg>
                        <span class="ml-4">Notification</span>
                    </nuxt-link>
                </li>
            </ul>
        </nav>
    </aside>
    <!-- Sidebar end -->
</template>

<script>
    export default {
        data(){
            return {
                isPagesMenuOpen: false,
            }
        },
        computed:{
            isSideMenuOpen: {
                get(){
                    return this.$store.state.isSideMenuOpen
                },
                set(value){
                    this.$store.commit('TOGGLE_SIDEBAR', value)
                }
            }
        },
        methods:{
            togglePagesMenu(){
                this.isPagesMenuOpen = !this.isPagesMenuOpen
            },
        }
    }
</script>