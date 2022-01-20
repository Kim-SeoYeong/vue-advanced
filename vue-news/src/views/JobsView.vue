<template>
  <div>
    <list-item></list-item>
    <!-- <div v-bind:key="job.id" v-for="job in this.$store.state.jobs">
      {{ job.title }}
    </div> -->
    <!-- <ul class="news-list">
      <li
        v-bind:key="job.id"
        v-for="job in this.$store.state.jobs"
        class="post"
      > -->
    <!-- 포인트 영역 -->
    <!-- <div class="points">
          {{ job.points || 0 }}
        </div> -->
    <!-- 기타 정보 영역 -->
    <!-- <div>
          <p class="news-title">
            <a :href="job.url">{{ job.title }}</a>
          </p>
          <small class="link-text">
            {{ job.time_ago }}
            by
            <a :href="job.url">{{ job.domain }}</a>
          </small>
        </div>
      </li>
    </ul> -->

    <!-- <p v-bind:key="job.id" v-for="job in this.$store.state.jobs">
      <a :href="job.url">{{ job.title }}</a>
      <small>{{ job.time_ago }}, {{ job.domain }}</small>
    </p> -->
  </div>
</template>

<script>
//import { fetchJobsList } from "../api/index.js";
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
  //     jobs: [],
  //   };
  // },
  // created() {
  //   bus.$emit("start:spinner");

  //   setTimeout(() => {
  //     this.$store
  //       .dispatch("FETCH_JOBS")
  //       .then(() => {
  //         console.log("fetched");
  //         bus.$emit("end:spinner");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, 3000);
  // fetchJobsList()
  //   .then((response) => (this.jobs = response.data))
  //   .catch((err) => console.log(err));
  //},
};
</script>