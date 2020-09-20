<template>
  <v-card flat>
    <v-card-title>Artists</v-card-title>
    <v-card-text>
      <v-list-item dense two-line v-for="item in artists" :key="item">
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <v-list-item-subtitle v-if="item.role">{{
            item.role
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["artists"]
};
</script>
