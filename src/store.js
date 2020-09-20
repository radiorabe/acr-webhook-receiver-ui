import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    from: null,
    to: null,
    results: [],
    duration: null,
    loading: true,
  },
  mutations: {
    updateRange: (state, range) => {
      state.from = range[0]+ "T00:00:00";
      state.to = range[1]+ "T23:59:59";
    },
    updateResults: (state, results) => {
      var sum = 0
      for (var k in results) {
        var result = results[k].result
        if (result.data && result.data.metadata) {
          sum += result.data.metadata.played_duration || 0
        }
      }
      state.duration = sum;
      state.results = results;
    },
    setLoading: (state, loading) => state.loading = loading
  },
});
