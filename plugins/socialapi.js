import Vue from 'vue';
// import VueGAPI from 'vue-gapi';
// // import VueGAPI from 'vue-google-api';
import FacebookLogin from 'facebook-login-vuejs'; 

// const apiConfig = {
//   apiKey: process.env.GOOGLE_API_KEY,
//   clientId: process.env.GOOGLE_CLIENT_ID,
//   discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
//   scope: "openid profile email",
//   fetch_basic_profile: true,
//   cookiepolicy: 'single_host_origin',
// };

//  Vue.use(VueGAPI, apiConfig);
 Vue.component('facebook-login', FacebookLogin);
