<script>
import axios from 'axios';

export default {
  data() {
    return {
      project: null
    }
  },

  created() {
    this.getProject();
  },
  methods: {
    getProject() {
      axios
          .get('http://127.0.0.1:8000/api/projects/' + this.$route.params.slug) 
          .then(response => {
            console.log(response.data);

            if (response.data.success) {
              this.project = response.data.results;
            }
            else {
              this.$router.push({name:'not-found'});
            }
          })
    },
  }
};
</script>

<template>

  <main v-if="project != null">
    <h3 class="page-title">
      {{project.title}}
    </h3>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card m-3 p-2 w-50 mx-auto">
            <div v-if="project.full_cover_img != null">
                <img :src="project.full_cover_img" :alt="project.title"> 
            </div>
            <p v-if="project.description">
              {{ project.description}}
            </p>
            <p>
            </p>
          </div>
      </div>
      </div>
    </div>
    <div class="d-flex justify-content-center ">
      <router-link :to="{name: 'projects.index'}" class="btn page-btn">
        <p class="m-0 fw-bold text-light ">Torna ai progetti</p>
      </router-link>
    </div>
  </main>

</template>

<style scoped>

</style>