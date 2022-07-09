<template>
  <TreeVue :data="data"></TreeVue>
</template>

<script lang="ts">
import Vue from 'vue'
import TreeVue from '~/components/Tree.vue'
import { API_ENDPOINTS, BASE_URL } from '~/utils/constants'
import { Data } from '~/types'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    TreeVue,
  },
  data() {
    return {
      data: [] as Data[],
    }
  },
  async asyncData({ $axios }) {
    const url = BASE_URL + API_ENDPOINTS.TREE
    const response = await $axios.$get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer MjU.u0p9qLLo8tvjGD6L3NDH5-sub8vKyz7GtcaPcymDJ7BCrLfNuf6JQJs11Qkn',
        'x-business-id': '1',
      },
    })
    return {
      data: response.data,
    }
  },
})
</script>
