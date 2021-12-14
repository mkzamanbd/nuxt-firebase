<template>
    <div>
        <Nuxt />
    </div>
</template>

<script>
    export default {
        name: "Auth",
        middleware: "guest"
    }
</script>