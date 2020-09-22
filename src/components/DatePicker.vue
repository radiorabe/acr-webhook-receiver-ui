<template>
  <v-card flat>
    <v-card-title>
      <v-text-field clearable readonly disabled label="Date Range" v-model="displayRange"></v-text-field>
    </v-card-title>
    <v-card-text>
      <div>
        <v-date-picker
          range
          full-width
          no-title
          v-model="range"
          :first-day-of-week="1"
          :color="$vuetify.theme.themes.light.primary"
          @change="updateTweakedRange"
        ></v-date-picker>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";
import DateTime from "luxon/src/datetime.js";

export default {
  data() {
    return {
      range: [],
    };
  },
  computed: {
    displayRange() {
      return this.range[0] + " - " + this.range[1];
    },
    toAsTomorrow() {
      return DateTime.fromISO(this.range[1]).plus({ days: 1 }).toISODate();
    },
  },
  methods: {
    ...mapMutations(["updateRange"]),
    updateTweakedRange() {
      this.$store.commit("updateRange", [this.range[0], this.toAsTomorrow]);
    },
  },
};
</script>
