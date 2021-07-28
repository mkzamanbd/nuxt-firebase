<template>
    <div>
        <Nuxt />
    </div>
</template>

<script>
export default {
    name: "auth",
    middleware: "guest"
}
</script>