<template>
    <div class="page_header">
        <div class="page_header-container container">
            <div class="page_header-logo">
                  <a href="#" aria-label="home">
                      <img src="./assets/img/logo.png" alt="ZsőrMC">
                  </a>
            </div>
            <div class="page_header-address" @click="copyIP">
                <div class="page_header-address-count">{{ playerCount }}</div>
                <div class="page_header-address-ip">{{ serverIP }}</div>
            </div>
        </div>
    </div>
    <div v-if="showModal" class="server_copy-modal">
        <div class="server_copy-modal-inner">
            <div class="server_copy-modal-icon">
                <svg width="90" height="90" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="30" stroke="#ff9800" stroke-width="4" fill="#fff"/>
                    <polyline points="20,34 30,44 44,24" fill="none" stroke="#ff9800" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <h3 class="server_copy-modal-title">IP kimásolva</h3>
            <p class="server_copy-modal-subtitle">Ne habozz és gyere játszani!</p>
            <button class="server_copy-modal-button" @click="showModal = false">Ok</button>
        </div>
    </div>
    <NavbarComponent/>
    <div class="main-content">
        <div class="container page-content-container">
            <div class="content-container">
                <div class="content-menu-column">
                    <router-view />
                </div>
                <div class="content-menu-column">
                    <LoginComponent/>
                    <iframe src="https://discord.com/widget?id=828180680315633715&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </div>
            </div>
        </div>
    </div>
    <FooterComponent/>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import LoginComponent from './components/LoginComponent.vue';

export default {
    components: { FooterComponent, NavbarComponent, LoginComponent },
    data() {
        return {
            playerCount: '...',
            showModal: false,
            serverIP: 'play.harmatosbikafing.hu'
        }
    },
    mounted() {
        this.fetchPlayerCount();
    },
    methods: {
        async fetchPlayerCount() {
            try {
                const res = await fetch('https://api.mcsrvstat.us/2/play.harmatosbikafing.hu');
                const data = await res.json();
                this.playerCount = (data.players && typeof data.players.online === 'number')
                    ? data.players.online
                    : 'N/A';
            } catch(err) {
                this.playerCount = 'N/A';
            }
        },
        copyIP() {
            navigator.clipboard.writeText(this.serverIP);
            this.showModal = true;
        }
    }
}
</script>