import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchCommentItem, fetchList } from "../api/index.js";
//import { fetchUserInfo, fetchCommentItem, fetchList } from "../api/index.js";

export default {
    //promise
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //         .then(response => {
    //             //console.log(response.data);
    //             context.commit('SET_NEWS', response.data);   //context.commit을 이용하여 mutation에 데이터를 넘길 수 있음
    //             return response;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },

    //async
    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },

    //promise
    // FETCH_JOBS({ commit }) {
    //     return fetchJobsList()
    //         .then(({ data }) => {
    //             console.log(data);
    //             commit('SET_JOBS', data);
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         });
    // },

    //async
    async FETCH_JOBS({ commit }) {
        try {
            const response = await fetchJobsList();
            commit('SET_JOBS', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    //promise
    // FETCH_ASK({ commit }) {
    //     return fetchAskList()
    //         .then(({ data }) => {
    //             console.log(data);
    //             commit('SET_ASK', data);
    //         })
    //         .catch((err) => console.log(err));
    // },

    //async
    async FETCH_ASK({ commit }) {
        const response = await fetchAskList();
        commit('SET_ASK', response.data);
        return response;
    },

    //promise
    // FETCH_USER({ commit }, name) {
    //     return fetchUserInfo(name)
    //         .then(({ data }) => {
    //             commit('SET_USER', data);
    //         })
    //         .catch((err) => console.log(err));
    // },

    //async
    async FETCH_USER({ commit }, name) {
        const response = await fetchUserInfo(name);
        commit('SET_USER', response.data);
        return response;
    },

    //promise
    // FETCH_ITEM({ commit }, id) {
    //     return fetchCommentItem(id)
    //         .then(({ data }) => {
    //             commit('SET_ITEM', data);
    //         })
    //         .catch((err) => console.log(err));
    // },

    //async
    async FETCH_ITEM({ commit }, id) {
        const response = await fetchCommentItem(id);
        commit('SET_ITEM', response.data);
        return response;
    },

    //promise
    // #2
    // FETCH_LIST({ commit }, pageName) {
    //     // #3
    //     return fetchList(pageName)
    //         .then((response) => {
    //             // #4
    //             console.log("4");
    //             commit('SET_LIST', response.data);
    //             return response;
    //         })
    //         .catch((err) => console.log(err))
    // }

    //async
    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList(pageName);
        commit('SET_LIST', response.data);
        return response;
    }
}