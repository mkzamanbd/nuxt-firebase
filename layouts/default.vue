<template>
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
        <!-- Sidebar -->
        <sidebar-default/>
            
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
