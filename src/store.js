import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import { jsonapiModule } from 'jsonapi-vuex'

Vue.use(Vuex);

const archiveAPI = axios.create({
  baseURL: 'https://archiv.rabe.ch/api/',
  headers: {
    'Content-Type': 'application/vnd.api+json',
  },
})

export default new Vuex.Store({
  strict: true,
  modules: {
    archive: jsonapiModule(archiveAPI),
  },
  state: {
    from: null,
    to: null,
    results: [],
    duration: null,
    loading: true,
  },
  mutations: {
    updateRange: (state, range) => {
      state.from = new Date(range[0]).toISOString();
      state.to = new Date(range[1]).toISOString();
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
