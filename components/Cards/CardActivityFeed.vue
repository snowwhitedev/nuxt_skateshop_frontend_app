<template>
  <div class="card-activity-feed" :class="{'has-attached': isAttached(), 'no-attached': !isAttached()}">
    <img class="feed-image" :src="image" alt="user" />
    <div class="feed-content" >
      <div class="content-upper">
        <p class="feed-title" v-html="title" />
        <p class="time">{{ time }}</p>
      </div>
      <p class="feed-description">{{ description }}</p>
      <div v-if="isAttached" class="attached">
        <img v-for="(atc,idx) in attached" :key="idx" :src="atc" alt="Attached" class="attached-img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: null
    },
    time: {
      type: String,
      default: null
    },
    attached: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    isAttached() {
      return this.attached.length !== 0;
    }
  }
}
</script>

<style lang="scss" scoped>
.card-activity-feed {
  padding: 20px 30px;
  border-bottom: 1px solid #F3F4F4;
  display: flex;
}
.no-attached {
 align-items: center; 
}
.has-attached .feed-content {
  margin-top: 6px;
}
.feed-image {
  width: 60px;
  height: 60px;
  border-radius: 15px;
}
.feed-content {
  margin-left: 20px;
  width: 100%;
}
.content-upper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.feed-title {
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #283441;
}
.time {
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  letter-spacing: 0.03em;
  color: #707780;
}
.attached {
  margin-top: 10px;
  display: flex;
}
.attached-img {
  width: 65px;
  height: 85px;
  border-radius: 5px;
  margin-right: 10px;
}
.attached-img:last-child {
  margin-right: 0px;
}
</style>
<style>
.feed-title .remark {
  color: #2E9BFF !important;
}
</style>