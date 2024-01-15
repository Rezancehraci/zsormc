<template>
  <div class="page_header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 px-0 module_header-col">
          <img class="img-fluid" src="./assets/img/logo.png" alt="ZsőrMC" width="365">
        </div>
      </div>
    </div>
  </div>
  <nav class="navbar navbar-expand-lg bg-body-tertiary shadow">
    <div class="container-fluid">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Kezdőlap</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/news">Hírek</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://store.zsormc.hu" target="_blank">Webshop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/vote">Szavazás</a>
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
        <div class="col-md-8 col-12 content-col">
          <router-view />
        </div>
        <div class="col-md-3 col-12 content-col">

        </div>
      </div>
    </div>
  </div>
</template>

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
