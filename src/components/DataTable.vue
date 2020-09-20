<!--
Display a table of records from the main /results API
-->
<template>
  <div v-if="from">
    <section v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>
    <section v-else class="pt-2">
      <v-data-table hide-default-header :loading="loading" :headers="headers" :items="results">
        <template v-slot:[`item.result.data.metadata.timestamp_utc`]="{ item }">
          <AcrTime :timestamp="item.result.data.metadata.timestamp_utc" />
        </template>
        <template v-slot:[`item.result.data.metadata.played_duration`]="{ item }">
            {{item.result.data.metadata.played_duration}} seconds
        </template>
        <template v-slot:[`item.result.data.metadata.music`]="{ item }">
          <MusicCard :music="item.result.data.metadata.music" />
        </template>
      </v-data-table>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getResults } from "@/api/client.js";
import { Duration } from "luxon";
import AcrTime from "@/components/AcrTime";
import MusicCard from "@/components/MusicCard";

export default {
  data() {
    return {
      headers: [
        { text: "Time", value: "result.data.metadata.timestamp_utc" },
        { text: "Duration", value: "result.data.metadata.played_duration" },
        { text: "Music", value: "result.data.metadata.music" }
      ],
      errored: false
    };
  },
  components: {
    AcrTime,
    MusicCard
  },
  computed: {
    ...mapState(["from", "to", "results", "duration", "loading"]),
    timeRange: o => {
      return new Date(o.to) - new Date(o.from);
    }
  },
  methods: {
    loadData: (self, from, to) => {
      self.$store.commit("setLoading", true);
      let opts = {
        limit: 50000,
        from: from
      };
      if (!from) {
        opts.from = new Date().toISOString();
      }
      if (to) {
        opts.to = to;
      }

      getResults(opts)
        .then(response => self.$store.commit("updateResults", response.data))
        .catch(() => {
          self.errored = true;
        })
        .finally(() => self.$store.commit("setLoading", false));
    }
  },
  filters: {
    readableDuration: value => {
      return Duration.fromMillis(value)
        .toFormat("d-h_m,s.")
        .replace("-", " days ")
        .replace("_", " hours ")
        .replace(",", " minutes ")
        .replace(".", " seconds");
    }
  },
  created() {
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === "updateRange") {
        this.loadData(this, state.from, state.to);
      }
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  },
  mounted() {
    this.loadData(this, this.$store.state.from, this.$store.state.to);
  }
};
</script>

<style scoped></style>
