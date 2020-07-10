<template>
  <div>
    <v-row class="justify-center">
      <v-col class="text-center" xs="7" sm="9" md="7" lg="7" xl="5">
        <div class="mb-12">
          <v-card class="mx-auto mt-5 mb-8" max-height="20%" outlined>
            <v-card-title class="justify-center display-1 font-weight-bold">
              <p class="ma-0 pa-0">
                All available tests
              </p>
            </v-card-title>
            <v-list rounded>
              <v-list-item-group :color="$vuetify.theme.dark ? 'white' : 'accent'">
                <v-row>
                  <v-list-item v-for="id in allTestId" :key="id">
                    <v-col xs="4" sm="4" md="5" lg="6" xl="10">
                      <v-list-item-content @click="startTest(id)">
                        {{ allTests[id].name }}
                      </v-list-item-content>
                    </v-col>
                  </v-list-item>
                </v-row>
              </v-list-item-group>
            </v-list>
          </v-card>
        </div>
        <Footer>
        </Footer>
      </v-col>
    </v-row>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  data() {
    return {
      allTests : {},
      allTestId : []
    };
  },
  created() {
    axios.get(this.$APIURL + "test/list", { withCredentials : true })
      .then( (res) => {
        this.allTests = res.data.test;
        this.allTestId = Object.keys(this.allTests);
      })
  },
  methods : {
    startTest(testId){
      axios.post( this.$APIURL + "auth/start_test/" + String(testId), {},{ withCredentials : true })
        .then( (res) => {
          this.$router.push('/test/' + testId);
        } )
    }
  },
}
</script>

<style scoped>
</style>

