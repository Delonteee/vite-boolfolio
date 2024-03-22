<script>
import axios from 'axios';
export default {
  data() {
    return {
      projects: [],
      currentPage: 1,
      lastPage: 1,
    }
  },
  created() {
    this.getProjects(this.currentPage);
  },
  methods: {
    getProjects(page) {
      axios
          .get('http://127.0.0.1:8000/api/projects', {
            params: {
              page: page
            }
          })
          .then(response => {
              console.log(response.data.results.data);
              this.projects = response.data.results.data;
              this.currentPage = response.data.results.current_page;
              this.lastPage = response.data.results.last_page;
          })
    },
    prewPage() {
      if (this.currentPage > 1) {
        this.getProjects(this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.lastPage) {
        this.getProjects(this.currentPage + 1);
      }
    },
  }
};
</script>

<template>

  <main>
    <router-view></router-view>
  </main>

</template>

<style scoped>

</style>