<script>
export default {
  data() {
    return {
      links: [
        {
          routeName: 'home',
          label: 'Home',
        },
        {
          routeName: 'projects.index',
          label: 'Projects',
        },
        {
          routeName: 'contacts.index',
          label: 'Contacts',
        },
      ]
    }
  }
};
</script>

<template>

<header>
    <div class="container">
      <div class="row ">
        <div class="col ">
            <h1>Portfolio</h1>
            <h1 class="logo">Portfolio</h1>
        </div>
        <div class="col d-flex justify-content-end ">
          <router-link :to="{name: 'home'}" class="btn btn-info m-1">
            Home
          </router-link>
          <router-link :to="{name: 'projects.index'}" class="btn btn-info m-1">
            Projects
          </router-link>
          <div class="col d-flex justify-content-end">
            <router-link :to="{name: link.routeName}" class="btn page-btn m-1" v-for="link in links"> 
              {{ link.label }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>


</template>

<style scoped>
header {
  background-color: rgb(114, 222, 226);
}
</style>