import axios from 'axios';

export default {
  namespaced: true,
  state() {
    return {
      postFollowing: [],
      page: 0,
    };
  },
  getters: {
    postFollowing(state) {
      return state.postFollowing;
    },
  },
  mutations: {
    addPostFollowing(state, posts) {
      state.postFollowing = [...state.postFollowing, ...posts];
    },
  },
  actions: {
    async loadPostFollowing({ commit, state }) {
      try {
        const { data: posts } = await axios
          .get('https://www.breakingbadapi.com/api/characters', {
            params: {
              limit: 5,
              offset: state.page,
            },
          });
        state.page += 5;
        commit('addPostFollowing', posts);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
