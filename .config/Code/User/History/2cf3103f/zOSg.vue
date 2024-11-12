<template>
    <div>
      <button @click="fetchData">Login and Get Data</button>
      <div v-if="data">
        <h3>Client Data:</h3>
        <pre>{{ data }}</pre>
      </div>
    </div>
  </template>
  
  <script>
  import { login, getClientData } from '../authService';
  
  export default {
    data() {
      return {
        data: null,
      };
    },
    methods: {
      async fetchData() {
        try {
          // Login first
          await login();
          // After login, fetch client data
          const clientName = 'Prasanga';
          this.data = await getClientData(clientName);
        } catch (error) {
          console.error('Error during data fetch:', error);
        }
      }
    }
  };
  </script>
  