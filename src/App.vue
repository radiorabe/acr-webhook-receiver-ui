<template>
  <v-app>
    <v-app-bar flat dark :color="$vuetify.theme.themes.light.primary" app>
      <v-toolbar-title class="rabe-title-font"
        >ACRCloud Data Explorer</v-toolbar-title
      >
    </v-app-bar>
    <v-container fluid class="pa-0">
      <v-row no-gutters dense class="pt-0" cols="12">
        <v-col cols="2">
          <v-navigation-drawer permanent absolute class="pt-15 navigation-vogu">
            <p class="text-center caption pt-2 ml-2 mr-2">
              The data in this API represents the raw data we receive from
              ACRCloud.<br />
              In day to day use the data is filtered and interpreted to fit
              purposes like
              <a href="https://github.com/radiorabe/raar_acr_tracks_importer"
                >enriching</a
              >
              our <a href="https://archiv.rabe.ch">archival system</a> and
              <a href="https://github.com/radiorabe/suisa_sendemeldung/"
                >collection society reporting</a
              >.
            </p>
            <p class="text-center">
              Pick two dates to get started.
            </p>
            <DatePicker />
            <v-footer fixed>
              <v-spacer></v-spacer>
              <div class="text-center">
                <div class="text-center">
                  <a href="/docs">API</a> -
                  <a href="https://github.com/radiorabe/acr-webhook-receiver"
                    >code</a
                  >
                </div>
                <div class="text-center">
                  <small
                    >Made with ❤️ by
                    <a href="htps://rabe.ch">Radio Bern RaBe</a></small
                  >
                </div>
              </div>
              <v-spacer></v-spacer>
            </v-footer>
          </v-navigation-drawer>
        </v-col>
        <v-col>
          <v-main absolute>
            <DataCard />
            <DataTable />
          </v-main> </v-col></v-row
    ></v-container>
  </v-app>
</template>

<script>
import DatePicker from "@/components/DatePicker";
import DataCard from "@/components/DataCard";
import DataTable from "@/components/DataTable";

export default {
  name: "App",
  components: {
    DataCard,
    DatePicker,
    DataTable
  }
};
</script>
