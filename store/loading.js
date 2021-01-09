// store/loading.js

export const state = () => ({
    isLoading: false
})

export const mutations = {
    setLoading(state, status) {
        state.isLoading = status
    }
}

export const actions = {
    setLoadingStatus(vuexContext, data){
        vuexContext.commit('setLoading', data)
    }
}

export const getters = {
    getLoadingStatus(state){
        return state.isLoading;
    }
}
