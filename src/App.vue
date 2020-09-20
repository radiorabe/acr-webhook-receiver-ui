<template>
  <v-app>
    <v-navigation-drawer permanent app>
      <DatePicker />
      <p class="text-center">
        Pick two dates to get started.
      </p>
      <v-footer fixed>
        <v-spacer></v-spacer>
        <div class="text-center">
          <div class="text-center">
            <a href="/docs">API</a> -
            <a href="https://github.com/radiorabe/acr-webhook-receiver">code</a>
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

    <v-main absolute>
      <DataCard />
      <DataTable />
    </v-main>
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
