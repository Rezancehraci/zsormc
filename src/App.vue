<template>
  <div class="page_header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 px-0 module_header-col">
          <a href="#" name="logo-home">
            <img class="img-fluid" src="./assets/img/logo.png" alt="ZsőrMC" width="365">
          </a>
        </div>
      </div>
    </div>
  </div>
  <nav class="navbar navbar-expand-lg bg-body-tertiary shadow">
    <div class="container-fluid">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link <%= path === '#' ? 'active' : '' %>" href="#">Kezdőlap</a>
        </li>
        <li class="nav-item">
          <a class="nav-link <%= path === '/zsormc/#/news' ? 'active' : '' %>" href="/zsormc/#/news/">Hírek</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://store.zsormc.hu" target="_blank">Webshop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link <%= path === '/zsormc/#/vote' ? 'active' : '' %>" href="/zsormc/#/vote/">Szavazás</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="content">
    <div class="container-fluid content-container">
      <div class="row">
        <div class="col-12 col-sm-10 col-md-10 col-lg-7 content-col content-news">
          <router-view />
        </div>
        <div class="col-12 col-sm-10 col-md-10 col-lg-4 content-col content-infos">

        </div>
      </div>
    </div>
  </div>
  <footer-component/>
</template>

<script>
  import FooterComponent from './components/FooterComponent.vue';

  export default {
    components: {
      FooterComponent
    }
  }
</script>
<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
