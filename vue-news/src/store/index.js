import Vue from 'vue';
import Vuex from 'vuex';
//import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index.js";
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        // news: [],
        // jobs: [],
        // ask: [],
        user: {},
        item: {},
        list: [],
    },
    getters: {
        //computed와 같은 속성인데 store에만 있는 것
        fetchedAsk(state) {
            return state.ask;
        },
        fetchedItem(state) {
            return state.item;
        }
    },
    mutations,
    // mutations: {
    //     SET_NEWS(state, news) {
    //         state.news = news;
    //     },
    //     SET_JOBS(state, jobs) {
    //         state.jobs = jobs;
    //     },
    //     SET_ASK(state, ask) {
    //         state.ask = ask;
    //     }
    // },
    actions
    // actions: {
    //     FETCH_NEWS(context) {
    //         fetchNewsList()
    //             .then(response => {
    //                 console.log(response.data);
    //                 context.commit('SET_NEWS', response.data);   //context.commit을 이용하여 mutation에 데이터를 넘길 수 있음
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //             })
    //     },
    //     FETCH_JOBS({ commit }) {
    //         fetchJobsList()
    //             .then(({ data }) => {
    //                 console.log(data);
    //                 commit('SET_JOBS', data);
    //             })
    //             .catch((err) => {
    //                 console.log(err)
    //             });
    //     },
    //     FETCH_ASK({ commit }) {
    //         fetchAskList()
    //             .then(({ data }) => {
    //                 console.log(data);
    //                 commit('SET_ASK', data);
    //             })
    //             .catch((err) => console.log(err));
    //     }
    // }
})