<template>
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
        <!-- Sidebar -->
        <sidebar-default/>

        <!-- Backdrop -->
        <div
            v-show="isSideMenuOpen"
            enter-active-class="transition ease-in-out duration-150"
            enter-active-class-start="opacity-0"
            enter-active-class-end="opacity-100"
            leave-active-class="transition ease-in-out duration-150"
            leave-active-class-start="opacity-100"
            leave-active-class-end="opacity-0"
            class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center md:hidden"
        ></div>
        <!-- Backdrop end -->
            
        <div class="flex flex-col flex-1 w-full">
            <header-default/>
            
            <main class="h-full overflow-y-auto">
                <Nuxt/>
            </main>
        </div>
    </div>
</template>

<script>
    export default {
        middleware: 'auth',
        computed:{
            isSideMenuOpen(){
                return this.$store.state.isSideMenuOpen;
            }
        }
    }
</script>
