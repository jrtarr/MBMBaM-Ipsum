<template>
  <div id="app">
    <!-- <h1>MBMBAM Ipsum</h1> -->
    <img src="./assets/logo.png" alt="MBMBAM Ipsum Logo">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <TextOptions/>
    <button @click.once="sendTestPost">TEST POST AWAY</button>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import axios from "axios";
  import TextOptions from "./components/TextOptions.vue";

  function sendTestPost(){
    console.log('HERE WE GO')
    const quote = {
      text: "What's up you cool baby?",
      nsfw: false,
      show: 'mbmbam'
    }

    // const quoteJSON = JSON.stringify(quote);
    const url = "http://localhost:3000/quote/createQuote"
    axios.post(url, quote).then((res) => {
      console.log("I GOT A RESPONSE")
      console.log(res);
    });
    // axios.post(url, quote, {withCredentials: false}).then((res) => {console.log(res)}, err => {console.log(err)});
  }

  export default Vue.extend({
    name: "App",
    components: {
      // HelloWorld,
      TextOptions
    },
    methods: {sendTestPost}
  });

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #0a164a;
  color: #FFFFFF;
  margin-top: 60px;
}
</style>
