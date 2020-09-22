<template>
  <v-card flat :loading="loading">
    <v-card-title>
      <v-text-field
        clearable
        label="Show Search"
        v-model="q"
        @input="getShowsForQuery()"
        @click:clear="show = null; loading = true;"
      ></v-text-field>
    </v-card-title>
    <v-card-text>
      <v-list flat dense v-if="!show" transition="slide-x-reverse-transition">
        <v-list-item
          v-for="item in shows"
          v-bind:key="item.name"
          @click="getBroadcastsForShow(item)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list flat dense v-else>
        <v-list-item
          v-for="item in broadcasts"
          v-bind:key="item.name"
          @click="selectRangeForBroadcast(item)"
        >
          <v-list-item-content>
            <v-list-item-title>{{item.started_at | luxon}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      show: null,
      shows: [],
      broadcasts: [],
      q: null,
    };
  },
  created() {
    this.$store
      .dispatch("archive/get", "shows")
      .then((data) => {
        this.shows = data;
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    getShowsForQuery() {
      this.loading = true;
      this.$store
        .dispatch("archive/get", ["shows", { params: { q: this.q } }])
        .then((data) => {
          this.shows = data;
        })
        .finally(() => (this.loading = false));
    },
    getBroadcastsForShow(item) {
      this.loading = true;
      this.show = item;
      this.q = this.show.name;
      const params = {
        sort: "-started_at",
        show_id: item._jv.id,
      };
      this.$store
        .dispatch("archive/get", [`broadcasts`, { params: params }])
        .then((data) => {
          // this indicates the earliest date we have ACRCloud data available
          const startOfAcrTime = new Date(2019, 1, 1);

          this.broadcasts = Object.fromEntries(
            Object.entries(data).filter(
              ([, item]) => Date.parse(item.started_at) >= startOfAcrTime
            )
          );
        })
        .finally(() => (this.loading = false));
    },
    selectRangeForBroadcast(item) {
      this.$store.commit("updateRange", [item.started_at, item.finished_at]);
    },
  },
};
</script>
