import * as authAPI from './api/authentication';

export const state = () => ({
    loggedIn: false,
    authLoggedIn: false,
    authUserId: null,
    authUserName: null,
    authUserEmail: null,
    authUserImg: null,
    authUserToken: null
});

export const actions = {
    googleLogIn : (context, user) => {
        return new Promise((resolve, reject) => {
            authAPI.default.googleLogIn(user)
                .then(res => {
                    context.commit('updateAuthData', res);
                    resolve (res);
                })
                .catch(error => {
                    reject (error);
                });

        })
    },
    logout : (context) => {
        // console.log("logoutfunction");
        // 
        return true;
    },
}

export const mutations ={
    updateAuthData: (state, payload) => {
        state = {...payload};
        state.authLoggedIn = payload.token !== null;
        state.loggedIn = payload.token !== null;
    }
}

export const getters =  {
    authUserData: (state) => {
        return state;
    } 
}