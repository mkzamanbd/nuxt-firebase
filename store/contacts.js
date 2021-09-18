// store/contacts.js

export const state = () => ({
    contacts: []
})

export const mutations = {
    setContacts(state, data) {
        state.contacts = data
    }
}

export const actions = {
    setContacts(ctx, data){
        ctx.commit('setContacts', data)
    }
}

export const getters = {
    getContacts(state){
        return state.contacts;
    }
}
