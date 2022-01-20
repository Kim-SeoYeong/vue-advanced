<template>
  <div>
    <section>
      <!-- 사용자 상세 정보 영역 -->
      <user-profile :info="fetchedItem">
        <!-- <div slot="username">
          {{ fetchedItem.user }}
        </div> -->
        <router-link slot="username" v-bind:to="`/user/${fetchedItem.user}`">
          {{ fetchedItem.user }}
        </router-link>
        <template slot="time">{{ "Posted " + fetchedItem.time_ago }}</template>
      </user-profile>
      <!-- <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-discription">
          <router-link v-bind:to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div class="time">
            {{ fetchedItem.time_ago }}
          </div>
        </div>
      </div> -->
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content">
        <!-- {{ fetchedItem.content }} -->
      </div>
    </section>
    <!-- {{ this.$store.state.item }} -->
    <!-- <p>{{ fetchedItem.title }}</p>
    <div>
      {{ fetchedItem.content }}
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";

export default {
  components: { UserProfile },
  computed: {
    ...mapGetters(["fetchedItem"]),
  },
  created() {
    const itemId = this.$route.params.id;
    console.log(itemId);

    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-discription {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>