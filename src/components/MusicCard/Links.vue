<template>
  <v-card flat>
    <v-card-title>Links</v-card-title>
    <v-card-text>
      <b>ISRC: </b> <a :href="ifpiURL">{{ item.external_ids.isrc }}</a
      ><br />
      <span v-if="item.external_metadata.spotify">
        <a :href="tatsumoURL">Tatsumo Tool</a>
      </span>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["item"],
  computed: {
    ifpiURL: self => {
      return `https://isrcsearch.ifpi.org/#!/search?isrcCode=${self.item.external_ids.isrc}&tab=lookup&showReleases=0&start=0&number=10`;
    },
    tatsumoURL: self => {
      return `https://tatsumo.pythonanywhere.com/album/${self.item.external_metadata.spotify.album.id}`;
    }
  }
};
</script>
