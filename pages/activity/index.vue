<template>
  <div class="activity-feed">
    <div class="page-header">
      <p class="page-title">Activity feed</p>
      <p class="settings">Settings</p>
    </div>
    <hr />
    <card-activity-feed
      v-for="feed in feeds"
      :key="feed.id"
      :image="feed.image"
      :title="feed.title"
      :description="feed.description"
      :time="feed.time"
      :attached="feed.attached"
    />
  </div>
</template>

<script>
import CardActivityFeed from "../../components/Cards/CardActivityFeed.vue";
export default {
  components: {
    CardActivityFeed
  },
  data() {
    return {
      feeds: [
        {
          id: 1,
          image: "https://via.placeholder.com/60x60.jpg",
          title: "<span class='remark'>Frankenstein</span> commented on your design <span class='remark'>“Into the Forrest”</span>.",
          description: "“This is one of the best designs I’ve seen on this platform. You seem to be getting better with ...”",
          time: "3m ago",
          attached: []
        },
        {
          id: 2,
          image: "https://via.placeholder.com/60x60.jpg",
          title: "<span class='remark'>Gal Gadot</span> rated your design <span class='remark'>“Into the Forrest”</span> with a 5.",
          description: null,
          time: "46m ago",
          attached: []
        },
        {
          id: 3,
          image: "https://via.placeholder.com/60x60.jpg",
          title: "<span class='remark'>Sarah B.</span> started following you.",
          description: null,
          time: "1h ago",
          attached: []
        },
        {
          id: 4,
          image: "https://via.placeholder.com/60x60.jpg",
          title: "<span class='remark'>Orange</span> uploaded a new design <span class='remark'>“Why so sad”</span>.",
          description: null,
          time: "1h ago",
          attached: [
            "https://via.placeholder.com/65x85.jpg",
            "https://via.placeholder.com/65x85.jpg"
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.activity-feed {
  width: 100%;
  max-width: 844px;
  margin: 0 auto;
  padding-bottom: 100px;
}
.page-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.page-title {
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  color: #283441;
}
.settings {
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  text-align: right;
  letter-spacing: 0.02em;
  color: #2E9BFF;
}
hr {
  margin: 0;
  height: 1px;
  background-color: #F3F4F4;
}
</style>