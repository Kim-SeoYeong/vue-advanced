<template>
  <div>
    <list-item></list-item>
    <!-- <div v-bind:key="user.id" v-for="user in users">{{ user.title }}</div> -->
    <!-- <div v-bind:key="user.id" v-for="user in this.$store.state.news">
      {{ user.title }}
    </div> -->

    <!-- <p v-bind:key="item.id" v-for="item in this.$store.state.news">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago }} by
        <router-link v-bind:to="`/user/${item.user}`">
          {{ item.user }}
        </router-link>
      </small>
    </p> -->
  </div>
</template>

<script>
//import { fetchNewsList } from "../api/index.js";
import ListItem from "../components/ListItem.vue";
//import bus from "../utils/bus.js";
import ListMixin from "../mixins/ListMixin.js";

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
  // data() {
  //   return {
  //     users: [],
  //   };
  // },
  // created() {
  //   //var vm = this;
  //   //console.log("호출전 : ", this);
  //   bus.$emit("start:spinner");

  //   this.$store
  //     .dispatch("FETCH_NEWS")
  //     .then(() => {
  //       console.log("fetched");
  //       bus.$emit("end:spinner");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   // setTimeout(() => {
  //   //   this.$store
  //   //     .dispatch("FETCH_NEWS")
  //   //     .then(() => {
  //   //       console.log("fetched");
  //   //       bus.$emit("end:spinner");
  //   //     })
  //   //     .catch((error) => {
  //   //       console.log(error);
  //   //     });
  //   // }, 3000);

  //   // 1
  //   // fetchNewsList()
  //   //   .then((response) => {
  //   //     console.log("호출 후 : ", this);
  //   //     // 2
  //   //     this.users = response.data;
  //   //   })
  //   //   .catch((err) => console.log(err));
  // },
};
</script>
