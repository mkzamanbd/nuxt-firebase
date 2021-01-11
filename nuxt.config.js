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
        '@nuxtjs/firebase'
    ],
    firebase:{
        config: {
            apiKey: 'AIzaSyDbvDaiazS5fJVcFu5l0AbhUvx8GBYsnYs',
            authDomain: 'directory-list-77c3f.firebaseapp.com',
            databaseURL: 'https://directory-list-77c3f-default-rtdb.firebaseio.com/',
            projectId: 'directory-list-77c3f',
            storageBucket: 'directory-list-77c3f.appspot.com',
            messagingSenderId: '226712188132',
            appId: '1:226712188132:web:fa08f3bf4591fc888368f1',
            measurementId: 'G-M1KYMXZGZ4'
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
            firestore: true
        }
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
    server:{
        host: '',
        port: '5000'
    }

}
