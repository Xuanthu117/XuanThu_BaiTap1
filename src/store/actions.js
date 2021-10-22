import axios from "axios";
export default {
  getList({ commit }) {
    const link = "https://jsonplaceholder.typicode.com/posts";
    axios
      .get(link)
      .then(function(response) {
        commit("addList", response.data);
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {});
  },
  deleteElement({ commit }) {
    commit("deleteElement");
  },
  nextStep({ commit }) {
    commit("nextStep");
  },
  previousStep({ commit }) {
    commit("previousStep");
  },
  resetForm({ commit }) {
    commit("resetForm");
  },
};
