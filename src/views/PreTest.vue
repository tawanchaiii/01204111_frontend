<template>
  <div id="PreTest">
    <v-container>
      <!-- content -->
      <v-row class="justify-center">
        <v-col xs="8" sm="10" md="12" lg="14" xl="16">
          <v-card>
            <v-tabs
              vertical
              :color="$vuetify.theme.dark ? 'white' : 'secondary'"
            >
              <!-- sidebar -->
              <v-tab
                class="ma-2 pa-1 subtitle-1"
                v-for="section in sections"
                :key="section.id"
              >
                <p class="ma-0 pa-0">
                  <b>
                    {{ section.name }}
                  </b>
                </p>
              </v-tab>
              <v-btn 
                v-if="!isConfirm"
                color="accent" 
                @click="isSubmit = true"
                >
                Finish
              </v-btn>
              <v-spacer></v-spacer>
              <v-divider></v-divider>
              <v-tab class="ma-2 pa-1 text--primary" disabled grow>
                {{ hours }} : {{ minutes }} : {{ seconds }}
              </v-tab>

              <!-- unknow section -->
              <v-tab-item>
                <Form 
                  :section="sections[0]" 
                > 
                </Form>
              </v-tab-item>
              <!-- section 1 -->
              <v-tab-item>
                <Form 
                  :section="sections[0]" 
                > 
                </Form>
              </v-tab-item>

              <!-- section 2 -->
              <v-tab-item>
                <Subjective 
                :section="sections[1]" 
                >
                </Subjective>
              </v-tab-item>

              <!-- section 3 -->
              <v-tab-item>
                <Programming 
                :section="sections[2]" 
                >
                </Programming>
              </v-tab-item>

            </v-tabs>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mb-12">
        <v-col xs="8" sm="10" md="12" lg="14" xl="16" class="text-center mb-8">
        </v-col>
      </v-row>

      <mydialog
        :confirmation="isSubmit"
        :timer="timer"
        v-on:cancle="isSubmit = false"
        v-on:confirm="finishTest()"
      ></mydialog>

      <Footer>
      </Footer>
    </v-container>
  </div>
</template>

<script>
import { bus } from '@/main';
import Form from "../components/Form/Form";
import Subjective from "../components/Subjective/subjective";
import Programming from "../components/Programming/programming";
import mydialog from "../components/dialog/mydialog";
import Footer from "../components/Footer/Footer";
const axios = require("axios");

export default {
  name: "PreTest",
  data() {
    return {
      sections: [],
      isSubmit: false,
      isConfirm: false,
      isTimeOut: false,
      timer: 10800,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  },
  components: {
    Form,
    Subjective,
    Programming,
    mydialog,
    Footer,
  },
  methods : {
    finishTest : function(){
      this.isConfirm = true;
      bus.$emit('submit-answer')
      setTimeout( ()=>{
        axios.put( this.$APIURL + 'finish', {}, {withCredentials : true} )
          .then( (res) => {
            this.$router.replace("/").catch( (err) => {} );
          })
          .catch( (err) =>{} )
      }, 1500);
    },
  },
  mounted() {
    axios.get(this.$APIURL + "time", { withCredentials: true }).then((res) => {
      this.timer = res.data.timeLeft;
    });
    axios
      .get(this.$APIURL + "problems/list", {
        withCredentials: true,
      })
      .then((res) => {
        this.sections = res.data.sections;
      });
    var interval = setInterval(() => {
      if (!this.confirmation & (this.timer > 0)) {
        this.hours = Math.floor(this.timer / 3600);
        this.minutes = Math.floor((this.timer % 3600) / 60);
        this.seconds = Math.floor(this.timer % 60);
        this.timer--;
      } else if (!this.isTimeOut) {
        this.isConfirm = true;
        this.isSubmit = true;
        this.isTimeOut = true;
      }
      if (this.isSubmit) {
        clearInterval(interval);
      }
    }, 1000);
  },
};
</script>

<style></style>
