export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'JERP',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
            { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
        ],
        script:[
            { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        // master scss
        '~/assets/template/master.scss'
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',

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
            apiKey: "AIzaSyDM8weLbL8kr6TwLz54bQuyd85L0G3rdN8",
            authDomain: "fir-d846d.firebaseapp.com",
            databaseURL: "https://fir-d846d-default-rtdb.firebaseio.com",
            projectId: "fir-d846d",
            storageBucket: "fir-d846d.appspot.com",
            messagingSenderId: "452750114138",
            appId: "1:452750114138:web:55425ad8e5ab59c0044763",
            measurementId: "G-LNR0J66XBN"
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
            database: true,
            firestore: true,
            storage: true,
        }
    },

    // toast message
    toast: {
        position: 'top-right',
        duration: 2000
    },

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    pwa: {
        meta: {
            title: 'JERP',
            author: 'PhoneBook',
        },
        manifest: {
            name: 'JERP',
            short_name: 'JERP',
            lang: 'en',
        },

        // disable the modules you don't need
        workbox: {
            importScripts: [
                '/firebase-auth-sw.js'
            ],

            // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
            // only set this true for testing and remember to always clear your browser cache in development
            dev: process.env.NODE_ENV === 'development',
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        // use for only bootstrap compile warning
        babel: {
            compact: true
        },
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
