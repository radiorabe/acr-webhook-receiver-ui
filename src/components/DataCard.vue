<template>
  <v-card flat :loading="loading" v-if="from">
    <v-card-title
      class="rabe-datacard-title"
    >{{ from | luxon:format("yyyy-MM-dd HH:mm:ss") }} - {{ to | luxon:format("yyyy-MM-dd HH:mm:ss") }}</v-card-title>
    <v-card-text>
      <b>Total:</b>
      {{ timeRange | readableDuration }} (100%)
      <br />
      <b>Playout:</b>
      {{ (duration * 1000) | readableDuration }} ({{
      (((duration * 1000) / timeRange) * 100) | toPercentage
      }})
      <br />
      <b>Unknown:</b>
      {{ (timeRange - duration * 1000) | readableDuration }} ({{
      (((timeRange - duration * 1000) / timeRange) * 100) | toPercentage
      }})
    </v-card-text>
  </v-card>
</template>
<script>
import { mapState } from "vuex";
import { Duration } from "luxon";

export default {
  computed: {
    ...mapState(["from", "to", "loading", "duration"]),
    timeRange: (self) => {
      return new Date(self.to) - new Date(self.from);
    },
  },
  filters: {
    readableDuration: (value) => {
      return Duration.fromMillis(value)
        .toFormat("d-h_m,s.")
        .replace("-", " days ")
        .replace("_", " hours ")
        .replace(",", " minutes ")
        .replace(".", " seconds");
    },
    toPercentage: (value) => {
      return value.toFixed(0) + "%";
    },
  },
};
</script>
