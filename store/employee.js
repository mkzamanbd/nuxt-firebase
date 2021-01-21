// store/employee.js

export const state = () => ({
    employees: []
})

export const mutations = {
    setEmployees(state, data) {
        state.employees = data
    }
}

export const actions = {
    setEmployees(ctx, data){
        ctx.commit('setEmployees', data)
    }
}

export const getters = {
    getEmployees(state){
        return state.employees;
    }
}
