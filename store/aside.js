// store/aside.js

export const state = () => ({
    isActiveTab: ''
})

export const mutations = {
    setActiveTab(state, status) {
        state.isActiveTab = status
    }
}

export const actions = {
    setActiveTab(ctx, data){
        ctx.commit('setActiveTab', data)
    }
}

export const getters = {
    getActiveTab(state){
        return state.isActiveTab;
    }
}
