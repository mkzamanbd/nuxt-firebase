// store/loading.js

export const state = () => ({
    
})

export const mutations = {
    ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
      if(!authUser) return;

      console.log("invoked");
  
      // Do this:
      const { uid, email, emailVerified } = authUser
      state.user = { uid, email, emailVerified }
    }
  }


export const actions = {
  onAuthStateChangedAction: (ctx, { authUser, claims }) => {
    console.log("action");
        if (!authUser) {
          // claims = null
          // Perform logout operations
        } else {
          // Do something with the authUser and the claims object...
        }
      }
}

export const getters = {
    
}