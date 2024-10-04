<template>
    <div id="app">
      <h1>Book Counter</h1>
      <p v-if="jsondata !== null">
        <pre>{{ jsondata }}</pre>  
      </p>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        jsondata: null,  
        error: null,     
      };
    },
    methods: {
      async getBookCountAPI() {
        try {

          const response = await axios.get('https://countbooks-kju4xchsxa-uc.a.run.app');
          this.jsondata = response.data;  
          this.error = null;  
        } catch (error) {
          console.error('Error fetching book count:', error);
          this.error = 'Error fetching book count';  
          this.jsondata = null;  
        }
      },
    },
    mounted() {

      this.getBookCountAPI();
    },
  };
  </script>
  
  <style scoped>
  #app {
    text-align: center;
    margin-top: 40px;
  }
  
  pre {
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 5px;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
  </style>