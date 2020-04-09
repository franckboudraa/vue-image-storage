import api from "../../api/imgur";
import { router } from "../../main";

const state = {
  images: []
};

const getters = {
  allImages: state => {
    return state.images;
  }
};

const actions = {
  fetchImages: async ({ rootState, commit }) => {
    const response = await api.fetchImages(rootState.auth.token);

    commit("setImages", response.data.data);
  },

  // eslint-disable-next-line no-unused-vars
  uploadImages: async ({ rootState }, images) => {
    const { token } = rootState.auth;

    await api.uploadImages(images, token);

    router.push("/");
  }
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
