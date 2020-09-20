<template>
  <v-expansion-panels flat>
    <v-expansion-panel class="mt-1 mb-1">
      <v-expansion-panel-header>
        <span>
          <strong>{{ music[0].title }}</strong> by
          <strong>{{ music[0].artists[0].name }}</strong> ({{
            music | length
          }}
          records)</span
        >
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-card flat>
          <v-tabs v-model="tabs">
            <v-tab v-for="item in music" :key="item.acrid">
              {{ item.title }}
            </v-tab>
            <v-tabs-items v-model="tabs">
              <v-tab-item v-for="item in music" :key="item.acrid">
                <v-card flat>
                  <v-card-text>
                    <v-container>
                      <v-row no-gutters>
                        <v-col>
                          <Artists :artists="item.artists" />
                        </v-col>
                        <v-col>
                          <Data :item="item" />
                        </v-col>
                        <v-col>
                          <Links :item="item" />
                        </v-col>
                      </v-row>
                    </v-container>
                    <!--<pre>{{ item }} </pre>-->
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-tabs>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import Artists from "@/components/MusicCard/Artists";
import Data from "@/components/MusicCard/Data";
import Links from "@/components/MusicCard/Links";

export default {
  data() {
    return {
      tabs: null
    };
  },
  props: ["music"],
  components: {
    Artists,
    Data,
    Links
  },
  filters: {
    length: value => value.length
  }
};
</script>
