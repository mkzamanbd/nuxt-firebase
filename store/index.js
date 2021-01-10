// store/index.js

export const state = () => ({
    authUser: null
});

export const mutations = {
    ON_AUTH_STATE_CHANGED_MUTATION(state, { authUser, claims }) {
        if (!authUser) {
            // claims = null
            // perform logout operations
            state = {
                authUser: null
            }
        }
        else{
            // Do something with the authUser and the claims object...
            // you can request additional fields if they are optional (e.g. photoURL)
            const {
                uid,
                email,
                emailVerified,
                displayName,
                photoURL
            } = authUser;

            state.authUser = {
                uid,
                displayName,
                email,
                emailVerified,
                photoURL: photoURL || null, // results in photoURL being null for server auth
                // use custom claims to control access (see https://firebase.google.com/docs/auth/admin/custom-claims)
                isAdmin: claims.custom_claim || null
            };
        }
    }
};

export const actions = {
    async nuxtServerInit({ dispatch, commit }, { res }) {
        if (res && res.locals && res.locals.user) {

            const { allClaims: claims,idToken: token, ...authUser } = res.locals.user;

            await dispatch("onAuthStateChangedAction", { authUser, claims, token });
            // or
            commit("ON_AUTH_STATE_CHANGED_MUTATION", { authUser, claims, token });
        }
    },

    async onAuthStateChangedAction({ commit, dispatch }, { authUser, claims }) {
        if (!authUser) {
            await dispatch("cleanupAction");
            return;
        }

        // you can request additional fields if they are optional (e.g. photoURL)
        const { uid, email, emailVerified, displayName, photoURL } = authUser;

        commit("ON_AUTH_STATE_CHANGED_MUTATION", {
            uid,
            email,
            emailVerified,
            displayName,
            photoURL, // results in photoURL being undefined for server auth
            // use custom claims to control access (see https://firebase.google.com/docs/auth/admin/custom-claims)
            isAdmin: claims.custom_claim || null
        });
    },
    async cleanupAction({commit}) {
        commit("ON_AUTH_STATE_CHANGED_MUTATION", {});
    }
};

export const getters = {};
