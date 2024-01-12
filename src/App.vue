<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Kezdőlap</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Hírek</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Webshop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Szavazás</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div>
  </nav>
  <router-view />
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
