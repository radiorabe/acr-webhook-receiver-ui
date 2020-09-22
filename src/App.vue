<template>
  <v-app>
    <v-app-bar flat dark :color="$vuetify.theme.themes.light.primary" app>
      <v-toolbar-title class="rabe-title-font">ACRCloud Data Explorer</v-toolbar-title>
    </v-app-bar>
    <v-container fluid class="pa-0">
      <v-row no-gutters dense class="pt-0" cols="12">
        <v-col cols="2">
          <NavigationDrawer />
        </v-col>
        <v-col cols="10">
          <v-main absolute>
            <DataCard />
            <DataTable />
          </v-main>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import DataCard from "@/components/DataCard";
import DataTable from "@/components/DataTable";
import NavigationDrawer from "@/components/NavigationDrawer.vue";

export default {
  name: "App",
  components: {
    DataCard,
    DataTable,
    NavigationDrawer,
  },
};
</script>
