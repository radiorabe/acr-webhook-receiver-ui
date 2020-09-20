<template>
  <div>
    <v-date-picker
      range
      full-width
      no-title
      v-model="range"
      :first-day-of-week="1"
      :color="$vuetify.theme.themes.light.primary"
      @change="updateRange"
    ></v-date-picker>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      range: []
    };
  },
  methods: {
    ...mapMutations(["updateRange"])
  }
};
</script>
