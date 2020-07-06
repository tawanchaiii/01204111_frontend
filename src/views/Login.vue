<template>
  <div id="Login">
    <v-row class="justify-center">
      <v-col class="text-center" xs="7" sm="9" md="7" lg="7" xl="5">
        <div class="mb-12">
          <v-card class="mx-auto mt-5 mb-8" max-height="20%" outlined>
            <!-- login title -->
            <v-card-title class="justify-center display-1 font-weight-bold">
              <p class="ma-0 pa-0">
                Login !
              </p>
            </v-card-title>

            <v-form>
              <v-col>
                <!-- firstname -->
                <v-text-field
                  v-model="login.firstname"
                  required
                  label="ชื่อจริง"
                  placeholder="บูรพา"
                  outlined
                  @keyup.enter="focusLastname"
                  :color="$vuetify.theme.dark ? 'white' : 'accent'"
                ></v-text-field>

                <!-- lastname -->
                <v-text-field
                  v-model="login.lastname"
                  ref="นามสกุล"
                  required
                  label="นามสกุล"
                  placeholder="เจริญวัฒน์"
                  outlined
                  @keyup.enter="LoginHandler"
                  :color="$vuetify.theme.dark ? 'white' : 'accent'"
                ></v-text-field>

                <!-- error alert -->
                <v-alert
                  prominent
                  type="error"
                  :value="hasError"
                  outlined
                  transition="scale-transition"
                >
                  {{ message.en }}
                  <br />
                  {{ message.th }}
                </v-alert>

                <!-- button -->
                <router-link to="/pre_test">
                  <v-btn
                    depressed
                    x-large
                    color="primary"
                    @click="LoginHandler"
                  >
                    <p class="ma-0 pa-0">
                      Login
                    </p>
                  </v-btn>
                </router-link>
              </v-col>
            </v-form>
          </v-card>
        </div>

        <Footer></Footer>
      </v-col>
    </v-row>
  </div>
</template>

<script>
const axios = require("axios");
import Footer from "../components/Footer/Footer";
export default {
  name: "Login",
  components: {
    Footer,
  },
  data() {
    return {
      login: {
        firstname: "",
        lastname: "",
      },
      hasError: false,
      message: { en: "", th: "" },
    };
  },
  methods: {
    LoginHandler() {
      this.login.firstname = this.login.firstname.trim();
      this.login.lastname = this.login.lastname.trim();
      axios
        .post(this.$APIURL + "auth/login", this.login, {
          withCredentials: true,
        })
        .then((response) => {
          this.$router.push("/pre_test/explanation");
        })
        .catch((err) => {
          if (err.response.status == 401) {
            this.hasError = true;
            if (
              (err.response.data.err == "test finish") |
              (err.response.data.err == "timeout")
            ) {
              this.message.en = "You're already tested.";
              this.message.th = "คุณได้ทำการทดสอบไปแล้ว";
            } else if (
              err.response.data.err ==
              "firstname and lastname don't match in database"
            ) {
              this.message.en =
                "Firstname or Lastname doesn't match in the database. Please contact the admin.";
              this.message.th =
                "ชื่อหรือนามสกุลของคุณไม่มีในฐานข้อมูล โปรดติดต่อผู้ดูแลระบบ";
            } else {
              this.message.en = err.response.data.err;
              this.message.th = err.response.status;
            }
          }
        });
    },
    focusLastname(event) {
      this.$refs.lastname.focus();
    },
  },
};
</script>

<style></style>
