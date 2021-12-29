<template>
    <header class="sticky top-0 z-10 py-4 backdrop-filter backdrop-blur bg-white/60 dark:bg-gray-800/60 w-full border-b border-b-gray-300 dark:border-b-gray-700 flex-shrink-0 bg-white h-16">
        <div class="flex container px-6 mx-auto items-center text-primary dark:text-purple-300">
            <!-- header menu button -->
            <div class="flex justify-between items-center md:hidden">
                <button type="button" class="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300" @click="toggleSideMenu">
                    <span class="sr-only">Navigation</span>
                    <svg width="24" height="24">
                        <path d="M5 6h14M5 12h14M5 18h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    </svg>
                </button>
                <!-- header menu button end -->
            </div>
            <div class="flex items-center justify-between w-full">
                <!-- description -->
                <div class="flex justify-start">
                    <div class="hidden md:block">
                        <button
                            type="button"
                            class="py-1.5 w-72 flex items-center text-sm leading-6 text-gray-400 focus-visible:outline-0 ring-0 focus:ring-0 pl-2 pr-3"
                            @click="$store.commit('TOGGLE_SEARCH_BOX', true)"
                            @keydown.escape="$store.commit('TOGGLE_SEARCH_BOX', false)"
                        >
                            <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-3 flex-none">
                                <path d="m19 19-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle>
                            </svg>
                            Quick search...
                            <span class="ml-auto pl-3 flex-none text-xs font-semibold">Ctrl K</span>
                        </button>
                    </div>
                </div>
                <!-- right menu -->
                <ul class="flex items-center flex-shrink-0 space-x-4">
                    <!-- search box -->
                    <li class="md:hidden">
                        <button type="button" class="w-6 h-6 flex items-center justify-center text-gray-400 focus-visible:outline-0 focus:ring-0" @click="isSearchBoxOpen = true" @keydown.escape="isSearchBoxOpen = false">
                            <svg width="24" height="24" fill="none" aria-hidden="true" class="flex-none">
                                <path d="m19 19-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle>
                            </svg>
                        </button>
                    </li>
                    <!-- Theme toggler -->
                    <li class="flex">
                        <button class="h-8 w-8 align-middle flex items-center justify-center rounded-md focus:outline-none focus:shadow-outline-purple" aria-label="Toggle color mode" @click="toggleTheme">
                            <template v-if="isDarkMode">
                                <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                                        class="fill-purple-400/20"
                                    ></path>
                                    <path
                                        d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                                        class="fill-purple-500"
                                    ></path>
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                                        class="fill-purple-500"
                                    ></path>
                                </svg>
                            </template>
                            <template v-if="!isDarkMode">
                                <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                                    <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class="fill-purple-400/20 stroke-purple-500"></path>
                                    <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" class="stroke-purple-500"></path>
                                </svg>
                            </template>
                        </button>
                    </li>
                    <!-- Notifications menu -->
                    <li class="relative">
                        <button
                            class="h-8 w-8 relative align-middle flex items-center justify-center rounded-md focus:outline-none focus:shadow-outline-purple"
                            aria-label="Notifications"
                            aria-haspopup="true"
                            @click="toggleNotificationsMenu"
                            @keydown.escape="isNotificationsMenuOpen = false"
                        >
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                            </svg>
                            <!-- Notification badge -->
                            <span
                                aria-hidden="true"
                                class="absolute top-0 right-0 inline-block w-2 h-2 animate-ping transform translate-x-1 -translate-y-1 bg-red-400 border-2 border-white rounded-full dark:border-gray-800"
                            ></span>
                        </button>
                        <template v-if="isNotificationsMenuOpen">
                            <ul
                                x-transition:leave="transition ease-in duration-150"
                                x-transition:leave-start="opacity-100"
                                x-transition:leave-end="opacity-0"
                                class="absolute right-0 mt-6 w-56 p-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700"
                                @click="isNotificationsMenuOpen = false"
                                @keydown.escape="isNotificationsMenuOpen = false"
                            >
                                <li class="flex">
                                    <a
                                        class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                    >
                                        <span>Messages</span>
                                        <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
                                            13
                                        </span>
                                    </a>
                                </li>
                                <li class="flex">
                                    <a
                                        class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                    >
                                        <span>Sales</span>
                                        <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
                                            2
                                        </span>
                                    </a>
                                </li>
                                <li class="flex">
                                    <a
                                        class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                    >
                                        <span>Alerts</span>
                                    </a>
                                </li>
                            </ul>
                        </template>
                    </li>
                    <!-- Profile menu -->
                    <li class="relative">
                        <button class="h-8 w-8 align-middle flex items-center justify-center rounded-full focus:shadow-outline-purple focus:outline-none" aria-label="Account" aria-haspopup="true" @click="toggleProfileMenu" @keydown.escape="isProfileMenuOpen = false">
                            <img class="object-cover w-8 h-8 rounded-full" src="https://ui-avatars.com/api/?name=KZ&color=7F9CF5&background=EBF4FF" alt="" aria-hidden="true" />
                        </button>
                        <template v-if="isProfileMenuOpen">
                            <ul
                                x-transition:leave="transition ease-in duration-150"
                                x-transition:leave-start="opacity-100"
                                x-transition:leave-end="opacity-0"
                                class="absolute right-0 w-56 p-2 mt-6 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
                                aria-label="submenu"
                                @click="isProfileMenuOpen = false"
                                @keydown.escape="isProfileMenuOpen = false"
                            >
                                <li class="flex">
                                    <a
                                        class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                    >
                                        <svg class="w-4 h-4 mr-3" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                        </svg>
                                        <span>Profile</span>
                                    </a>
                                </li>
                                <li class="flex">
                                    <a
                                        class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                    >
                                        <svg class="w-4 h-4 mr-3" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                            ></path>
                                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        <span>Settings</span>
                                    </a>
                                </li>
                                <li class="flex">
                                    <a
                                        class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                                        href="#"
                                    >
                                        <svg class="w-4 h-4 mr-3" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                                        </svg>
                                        <span>Log out</span>
                                    </a>
                                </li>
                            </ul>
                        </template>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        data(){
            return {
                isDarkMode: false,
                isPagesMenuOpen: false,
                isProfileMenuOpen: false,
                isNotificationsMenuOpen: false,
            }
        },
        computed:{
            currentUser(){
                return this.$store.state.authUser;
            }
        },
        methods:{
            logout(){
                this.$fire.auth.signOut().then(() => {
                    // Sign-out successful.
                    window.location.href = '/';
                }).catch((error) => {
                    // An error happened.
                    console.log(error);
                });
            },
            toggleSideMenu(){
                this.$store.commit('TOGGLE_SIDEBAR');
            },
            toggleTheme(){
                this.isDarkMode = !this.isDarkMode;
                this.$store.commit('TOGGLE_DARK_THEME');
            },
            toggleProfileMenu(){
                this.isProfileMenuOpen = !this.isProfileMenuOpen
            },
            toggleNotificationsMenu(){
                this.isNotificationsMenuOpen = !this.isNotificationsMenuOpen
            },
        }
    }
</script>