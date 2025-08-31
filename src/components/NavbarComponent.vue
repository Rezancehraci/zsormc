<template>
    <nav class="hb-navbar">
        <div class="navbar-container">
            <ul :class="['navbar-links', { open: menuOpen }]">
                <li><a class="nav-link" :class="{ active: $route.name === 'home' }" href="/zsormc/">Kezdőlap</a></li>
                <li><a class="nav-link" :class="{ active: $route.name === 'news' }" href="/zsormc/#/news/">Hírek</a></li>
                <li><a class="nav-link nav-link_webshop" href="https://store.zsormc.hu" target="_blank">Webshop</a></li>
                <li><a class="nav-link" :class="{ active: $route.name === 'vote' }" href="/zsormc/#/vote/">Szavazás</a></li>
                <li><a class="nav-link" href="#">Link</a></li>
            </ul>
        </div>
    </nav>
</template>
  
<script>
export default {
    name: "NavbarComponent",
    data() {
        return {
            menuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        }
    }
};
</script>