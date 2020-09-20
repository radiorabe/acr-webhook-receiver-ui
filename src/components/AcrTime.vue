<template>
  <v-badge
    :value="hover"
    :color="$vuetify.theme.themes.light.primary"
    :content="timestamp"
    transition="slide-x-transition"
  >
    <v-hover v-model="hover">
      <div>
        {{ timestamp | luxon({ serverFormat: "sql", clientFormat: "dfh" }) }}
      </div>
    </v-hover>
  </v-badge>
</template>

<script>
export default {
  data: () => ({
    hover: false
  }),
  props: ["timestamp"]
};
</script>
