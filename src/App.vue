<template>
    <div class="page_header">
        <div class="page_header-container container">
            <div class="page_header-logo">
                  <a href="#" aria-label="home">
                      <img src="./assets/img/logo.png" alt="ZsőrMC">
                  </a>
            </div>
            <div class="page_header-address">
                
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
    <div class="container page-content-container">
        <div class="page-container">
            <div class="content-menu-column">
                <router-view />
            </div>
            <div class="content-menu-column"></div>
            <div class="row">
                <div class="col-12 col-sm-10 col-md-10 col-lg-7 content-col content-news">
                    <router-view />
                </div>
                <div class="col-12 col-sm-10 col-md-10 col-lg-4 content-col content-infos">

                </div>
            </div>
        </div>
    </div>
    <FooterComponent/>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';

export default {
    components: {
        FooterComponent
    }
}
</script>