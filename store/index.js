// store/index.js

export const state = () => ({
    authUser: null,
    isDarkMode: false,
    isSideMenuOpen: false,
    isSearchBoxOpen: false,
});

export const mutations = {
    TOGGLE_DARK_THEME: (state, value) => {
        state.isDarkMode = value !== undefined ? value : !state.isDarkMode;
    },
    TOGGLE_SIDEBAR: (state, value) => {
        state.isSideMenuOpen = value !== undefined ? value : !state.isSideMenuOpen;
    },
    TOGGLE_SEARCH_BOX: (state, value) => {
        state.isSearchBoxOpen = value !== undefined ? value : !state.isSearchBoxOpen;
    },

    // firebase auth
    RESET_STORE: (state) =>{
        Object.assign(state, state.authUser);
    },
    
    SET_AUTH_USER: (state, { authUser }) => {
        state.authUser = {
            uid: authUser.uid,
            email: authUser.email
        }
    }
};

export const actions = {
    async nuxtServerInit({ dispatch}, { res }) {
        if (res && res.locals && res.locals.user) {

            const { allClaims: claims, ...authUser } = res.locals.user
            await dispatch("onAuthStateChanged", { authUser, claims });
            console.info('Auth User verified on server-side. User: ', authUser, 'Claims:', claims)
        }
    },

    async onAuthStateChanged({ commit }, { authUser }) {
        if (!authUser) {
            commit('RESET_STORE')

            return
        }
        if (authUser && authUser.getIdToken) {
            try {
              const idToken = await authUser.getIdToken(true)
              console.info('idToken', idToken)
            } catch (e) {
              console.error(e)
            }
        }
        commit('SET_AUTH_USER', { authUser })
    },
};

export const getters = {
    isLoggedIn: (state) => {
        try {
            return state.authUser.uid !== null
        } catch {
            return false
        }
    }
};
