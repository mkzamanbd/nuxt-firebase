<template>
    <div>
        <Nuxt />
    </div>
</template>

<script>
export default {
    name: "default",
    middleware: 'auth'
}
</script>