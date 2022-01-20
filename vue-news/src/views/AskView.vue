<template>
  <div>
    <!-- <div v-bind:key="item.id" v-for="item in fetchedAsk">
      {{ item.title }}
    </div> -->
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-bind:key="item.id" v-for="item in fetchedAsk" class="post"> -->
    <!-- 포인트 영역 -->
    <!-- <div class="points">
          {{ item.points }}
        </div> -->
    <!-- 기타 정보 영역 -->
    <!-- <div>
          <p class="news-title">
            <router-link v-bind:to="`item/${item.id}`">{{
              item.title
            }}</router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }}
            by
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">
              {{ item.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul> -->
    <!-- <p v-bind:key="item.id" v-for="item in fetchedAsk">
      <router-link v-bind:to="`item/${item.id}`">{{ item.title }}</router-link>
      <small> {{ item.time_ago }} by {{ item.user }} </small>
    </p> -->
  </div>
</template>

<script>
// import { fetchAskList } from "../api/index.js";
// import { mapState, mapGetters } from "vuex";
//import { mapGetters } from "vuex";
import ListItem from "../components/ListItem.vue";
//import bus from "../utils/bus.js";
import ListMixin from "../mixins/ListMixin.js";

export default {
  components: {
    ListItem,
  },
  // mounted() {
  //   bus.$emit("end:spinner");
  // },
  mixins: [ListMixin],
  // data() {
  //   return {
  //     ask: [],
  //   };
  // },
  // computed: {
  //   //만약 fetchedAsk를 askItems에 담지 않고 바로 사용하고 싶으면 객체가 아니라 배열로 담아주면 됨.
  //   ...mapGetters(["fetchedAsk"]),
  //   // ...mapGetters({
  //   //   askItems: "fetchedAsk",
  //   // }),
  //   //#2
  //   // ...mapState({
  //   //   fetchedAsk: (state) => state.ask,
  //   // }),
  //   // #1
  //   // ask() {
  //   //   return this.$store.state;
  //   // }
  // },
  // created() {
  //   bus.$emit("start:spinner");

  //   setTimeout(() => {
  //     this.$store
  //       .dispatch("FETCH_ASK")
  //       .then(() => {
  //         console.log("fetched");
  //         bus.$emit("end:spinner");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, 3000);

  //   // var vm = this;
  //   // fetchAskList()
  //   //   .then((response) => {
  //   //     console.log(response);
  //   //     vm.ask = response.data;
  //   //   })
  //   //   .catch((err) => console.log(err));
  // },
};
</script>
