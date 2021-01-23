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
            { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap' }
        ],
        script:[
            { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        //bootstrap icon
        '@/node_modules/bootstrap-icons/font/bootstrap-icons.css',
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
            apiKey: "AIzaSyCxK9WK_S0M4tE0YQ9Kvs0yBzBSCw6mAb0",
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
