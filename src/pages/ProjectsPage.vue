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

    prevPage() {
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
    <h2 class="page-title">
      Progetti
    </h2>
    <div class="container">
      <div class="row row-cols-3">
        <div v-for="project in projects" :key="project.id" class="col">
          <div class="card m-3 p-2">
            <h4 class="fw-bold project-title">
              {{ project.id}}- {{ project.title}}
            </h4>
            <div v-if="project.full_cover_img != null">
                <img :src="project.full_cover_img" :alt="project.title"> <!-- Grazie ad appends sul Model Project nel backend accediamo al percorso dell'immagine -->
            </div>
            <p class="my-2 detail" v-if="project.type.title">
              <strong>Categorie: </strong>
              <span class="badge bg-secondary mx-1">{{ project.type.title}}</span>
            </p>
            <p class="my-2 detail" v-if="project.technologies.length > 0">
              <strong>
                Tecnologie:
              </strong>
              <span v-for="technology in project.technologies" class="badge bg-secondary mx-1">
                  {{ technology.title}}
              </span>
            </p>
						<router-link :to="{name:'projects.show', params: {slug:  project.slug}}" class="btn show-btn"> <!-- Per ogni post generato avrò la rotta che mi indirizza al suo specifico slug (parametro della rotta) -->
							<p class="m-0 fw-bold text-light ">Vai al progetto</p>
						</router-link>
          </div>
      </div>
      </div>
    </div>
    <div class="pages-nav row w-50 m-auto justify-content-center text-center ">
      <button class="col-auto btn page-btn  mx-2" @click="prevPage()">Prev</button>
      <button class="col-auto btn page-btn mx-2" @click="nextPage()">Next</button>
        <div>Pagina {{ currentPage }} di {{ lastPage }}</div>
    </div>
  </main>

</template>

<style scoped>



</style>