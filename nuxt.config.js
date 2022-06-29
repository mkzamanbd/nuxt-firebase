const isDev = process.env.NODE_ENV === 'development'
const useEmulators = false // manually change if emulators needed

export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        titleTemplate: '%s - Firebase App',
        title: 'Firebase App',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
            { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
        ],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ['~/assets/styles.css'],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxt/postcss8',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',

        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',

        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',

        // https://firebase.nuxtjs.org/guide/getting-started
        '@nuxtjs/firebase',

        // toast config
        '@nuxtjs/toast',
    ],
    firebase: {
        config: {
            apiKey: 'AIzaSyBFtksWDGmLeyFJ3FtptIOSu4VQBSDu074',
            authDomain: 'notification-forwarder-22.firebaseapp.com',
            databaseURL: 'https://notification-forwarder-22-default-rtdb.asia-southeast1.firebasedatabase.app',
            projectId: 'notification-forwarder-22',
            storageBucket: 'notification-forwarder-22.appspot.com',
            messagingSenderId: '794260611954',
            appId: '1:794260611954:web:bff8b446f4319a580373eb',
            measurementId: 'G-X64X55H3NP',
        },
        services: {
            auth: {
                initialize: {
                    onAuthStateChangedAction: 'onAuthStateChanged',
                },
                ssr: true,
                emulatorPort: isDev && useEmulators ? 9099 : undefined,
                disableEmulatorWarnings: false,
            },
            database: true,
            firestore: true,
            storage: true,
        },
    },

    // toast message
    toast: {
        position: 'top-right',
        duration: 2000,
    },

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    pwa: {
        meta: {
            title: 'Firebase',
            author: 'Firebase',
        },
        manifest: {
            name: 'Firebase',
            short_name: 'Firebase',
            lang: 'en',
        },

        // disable the modules you don't need
        workbox: {
            importScripts: ['/firebase-auth-sw.js'],

            // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
            // only set this true for testing and remember to always clear your browser cache in development
            dev: process.env.NODE_ENV === 'development',
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
    },

    // server:{
    //     host: '',
    //     port: '3000'
    // },

    loading: {
        continuous: true,
        color: '#2CA01C',
        height: '4px',
    },
}
