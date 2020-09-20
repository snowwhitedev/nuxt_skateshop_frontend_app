export const state = () => ({
    isMobile: false,
    accountMenuItem: null,
    showMobileFooter: true
});

export const actions = {
    checkMobile: (context, res) => {
        context.commit("checkMobile", res);
    },
    setAccountMenuItem: (context, item) => {
        context.commit("updateMenuIten", item)
    },
    setShowMobileFooter: (context, show) => {
        context.commit("updateShowMobileFooter", show)
    }
}

export const mutations = {
    checkMobile: (state, payload) => {
        state.isMobile = payload
    },
    updateMenuIten: (state, payload) => {
        state.accountMenuItem = payload;
    },
    updateShowMobileFooter: (state, payload) => {
        state.showMobileFooter = payload;
    }
}

export const getters = {
    isMobile: (state) => {
        return state.isMobile;
    },
    accountMenuItem: state => state.accountMenuItem,
    showMobileFooter: state => state.showMobileFooter
}