<template>
  <div>
    <fetch-data url="https://jsonplaceholder.typicode.com/users/1">
      <!-- ... response, loading 을 가져올수 있다-->
      <div slot-scope="{response, loading}">
        <div v-if="!loading">
          <p>{{response.name}}</p>
          <p>{{response.email}}</p>
        </div>
        <div v-if="loading">
          loading...
        </div>
      </div>
    </fetch-data>
  </div>
</template>

<script>
/* eslint-disable no-console */
import FetchData from './components/FetchData.vue'

export default {
  components: {
    FetchData
  },
}
</script>