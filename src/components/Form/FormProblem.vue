<template>
  <div id="FormProblem">
    <label for="FormProblem" class="title">
      <p class="ma-0 pa-0">
        {{ problem.problemContent }}
      </p>
    </label>
    <v-textarea
      v-model="userText"
      :color="$vuetify.theme.dark ? 'white' : 'accent'"
      placeholder="เขียนเหมือนคุยเล่นได้เลย ข้อความที่น้องเขียนจะไม่มีการเปิดเผย"
      outlined
      no-resize
    ></v-textarea>
  </div>
</template>

<script>
import { bus } from '@/main';
const axios = require("axios");

export default {
  name: "FormProblem",
  props: {
    problem: Object,
  },
  data: () => ({
    userText: "",
  }),
  created(){
    bus.$on('submit-answer', ()=>{
      const payload = { userText: this.userText };
      const targetApi =
        this.$APIURL + "answer/submit/text/" +
        String(this.problem.id);
      axios
        .post(targetApi, payload, { withCredentials: true })
        .then((res) => {
          this.$emit('form-submit-success');
        })
        .catch((err) => {
        });
    })
  },
};
</script>

<style scoped>
</style>
