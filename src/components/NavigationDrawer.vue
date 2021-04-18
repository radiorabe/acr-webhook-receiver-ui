<template>
  <v-navigation-drawer permanent absolute class="pt-15 pb-15">
    <template v-slot:img>
      <v-img src="/assets/vogu.png" position="bottom center" contain height="100%" with="100%" />
    </template>
    <p class="text-center caption pt-2 ml-2 mr-2">
      The data in this API represents the raw data we receive from
      ACRCloud.
      <br />In day to day use the data is filtered and interpreted to fit
      purposes like
      <a
        href="https://github.com/radiorabe/raar_acr_tracks_importer"
      >enriching</a>
      our
      <a href="https://archiv.rabe.ch">archival system</a> and
      <a href="https://github.com/radiorabe/suisa_sendemeldung/">collection society reporting</a>.
    </p>
    <ShowPicker />
    <DatePicker style="margin-bottom: 300px;" />
    <v-footer fixed>
      <v-spacer></v-spacer>
      <div class="text-center">
        <div class="text-center">
          <a href="/docs">API</a> -
          <a href="https://github.com/radiorabe/acr-webhook-receiver">code</a>
        </div>
        <div class="text-center">
          <small>
            Made with ❤️ by
            <a href="htps://rabe.ch">Radio Bern RaBe</a>
          </small>
        </div>
      </div>
      <v-spacer></v-spacer>
    </v-footer>
  </v-navigation-drawer>
</template>

<script>
import DatePicker from "@/components/DatePicker";
import ShowPicker from "@/components/ShowPicker";

export default {
  components: {
    ShowPicker,
    DatePicker,
  },
};
</script>
