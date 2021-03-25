export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'Directory List',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
        script:[
            { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        //master scss
        '@/assets/template/sass/master.scss'
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        //'~/plugins/firebase.js'
        //{ src:'~/plugins/awesome-notifications.js', ssr:false }
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://firebase.nuxtjs.org/guide/getting-started
        '@nuxtjs/pwa',
        '@nuxtjs/firebase',

	    '@nuxtjs/toast',
    ],
    firebase:{
        config: {
            apiKey: "AIzaSyDyejH-LPa8vs5yKFT0jGp-3Q5tAmuOCgI",
            authDomain: "phonebook-zaman.firebaseapp.com",
            databaseURL: "https://phonebook-zaman-default-rtdb.firebaseio.com",
            projectId: "phonebook-zaman",
            storageBucket: "phonebook-zaman.appspot.com",
            messagingSenderId: "311858761938",
            appId: "1:311858761938:web:aa0c1e60f99e17da4f1d0b",
            measurementId: "G-TRHP53VLDE"
        },
        services: {
            auth: {
                persistence: 'local', // default
                initialize: {
                    onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
                    onAuthStateChangedAction: 'onAuthStateChangedAction',
                    subscribeManually: false
                },
                ssr: true, // default
            },
            firestore: true,
            storage: true,
        }
    },

    //toast message
    toast: {
        position: 'top-right',
        duration: 2000,
        fullWidth: true,
        fitToScreen: true
    },

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    pwa: {
        // disable the modules you don't need
        meta: false,
        icon: false,
        // if you omit a module key form configuration sensible defaults will be applied
        // manifest: false,

        workbox: {
            importScripts: [
                // ...
                '/firebase-auth-sw.js'
            ],
            // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
            // only set this true for testing and remember to always clear your browser cache in development
            dev: process.env.NODE_ENV === 'development',
        }
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
    },
    // server:{
    //     host: '',
    //     port: '5000'
    // },

    loading: {
        continuous: true,
        color: '#2CA01C',
        height: '4px'
    },

}
