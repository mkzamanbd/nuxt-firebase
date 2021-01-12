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
    setEmployeesData(vuexContext, data){
        vuexContext.commit('setEmployees', data)
    }
}

export const getters = {
    getEmployees(state){
        return state.employees;
    }
}
