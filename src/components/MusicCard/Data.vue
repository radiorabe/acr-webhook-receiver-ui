<template>
  <v-card flat>
    <v-card-title>Data</v-card-title>
    <v-card-text>
      <b>Album: </b> {{ item.album.name }}<br />
      <b>Label: </b> {{ item.label }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["item"]
};
</script>
