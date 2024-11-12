<template>
    <div>
      <button @click="handleLoginAndFetchIPs">Login and Get Client IPs</button>
      <div v-if="clientIPs">
        <h3>Client IPs:</h3>
        <pre>{{ clientIPs }}</pre>
      </div>
    </div>
  </template>
  
  <script>
  import { login, getClientIPs, addInbound } from '../authService';
  
  export default {
    data() {
      return {
        clientIPs: null,
      };
    },
    methods: {
      async handleLoginAndFetchIPs() {
        try {
          // Step 1: Login
          await login();
  
          // Step 2: Retrieve IPs for a specific email
          const email = 'mehdikhody'; // Use the email for which IPs are needed
          this.clientIPs = await getClientIPs(email);
        } catch (error) {
          console.error('Error during login and data fetch:', error);
        }
      },
  
      async handleAddInbound() {
        const inboundData = {
          enable: true,
          remark: "New inbound",
          listen: "",
          port: 48965,
          protocol: "vmess",
          expiryTime: 0,
          settings: "{\"clients\":[],\"decryption\":\"none\",\"fallbacks\":[]}",
          streamSettings: "{\"network\":\"ws\",\"security\":\"none\",\"wsSettings\":{\"acceptProxyProtocol\":false,\"path\":\"/\",\"headers\":{}}}",
          sniffing: "{\"enabled\":true,\"destOverride\":[\"http\",\"tls\"]}"
        };
  
        try {
          // Send the inbound data to add a new configuration
          const result = await addInbound(inboundData);
          console.log('Inbound added:', result);
        } catch (error) {
          console.error('Failed to add inbound:', error);
        }
      }
    },
  };
  </script>
  