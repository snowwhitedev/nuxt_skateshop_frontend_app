<template>
  <div class="notification-panel" v-click-outside="closeEvent">
    <toggle-notification @onClick="showPanel=!showPanel"/>
    <div v-if="showPanel" class="content-panel">
      <ul>
        <li v-for="notification in notifications" :key="notification.id">
          <checkbox-fill :label="notification.text" :value="`nofification${notification.id}`" :itemChecked="true" />
          <p class="notification-time">{{notification.notifcationTime}}</p>
        </li>
      </ul>
      <nuxt-link to="/activity">
        <button class="goto-panel">See all activity</button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';
export default {
  directives:{
    ClickOutside
  },
  data() {
    return {
      showPanel: false,
      notifications: [
        {id: 1, text: `<div class="notification-panel"><a class="notification-link" href="#">Gal Gadot</a> send you a message</div>`, notifcationTime: '1 hours ago'},
        {id: 2, text: `<div class="notification-panel"><a class="notification-link" href="#">Gal Gadot</a> send you a message</div>`, notifcationTime: '1 hours ago'},
        {id: 3, text: `<div class="notification-panel"><a class="notification-link" href="#">Gal Gadot</a> send you a message</div>`, notifcationTime: '1 hours ago'},
        {id: 4, text: `<div class="notification-panel"><a class="notification-link" href="#">Gal Gadot</a> send you a message</div>`, notifcationTime: '1 hours ago'}
      ]
    }
  },
  methods: {
    closeEvent: function (event) {
      if(this.showPanel) this.showPanel = false;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variable.scss";
.notification-panel{
    position: relative;
}
.content-panel{
  position: absolute;
  width: 280px;
  background: #FFFFFF;
  border: 1px solid rgba(35, 48, 73, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 10px 50px rgba(35, 48, 73, 0.05);
  border-radius: 5px;
  right: -20px;
  margin-top: 20px;
  padding: 0;
  position: absolute;
  top: 100%;
  z-index: 9999;
}
.content-panel:before{
  content: '';
  width: 16px;
  height: 16px;
  background: #C4C4C4;
  -webkit-transform: matrix(0.71, -0.67, 0.74, 0.71, 0, 0);
  -ms-transform: matrix(0.71, -0.67, 0.74, 0.71, 0, 0);
  transform: matrix(0.71, -0.67, 0.74, 0.71, 0, 0);
  display: block;
  position: absolute;
  top: -8px;
  right: 30px;
  background-color: #fff;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-top-color: rgba(35, 48, 73, 0.1);
  border-right-color: rgba(35, 48, 73, 0.1);
}
.content-panel ul li {
  padding: 20px;
  border-bottom: 1px solid #E7E8EA;
}
p.notification-time {
  font-family: $font-family-primary;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.03em;
  margin-left: 30px;
  color: #707780;
}
.goto-panel {
  width:100%;
  background: #E7E8EA;
  padding: 13px;
  font-family: $font-family-primary;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #283441;
  border: none;
  cursor: pointer;
}
</style>