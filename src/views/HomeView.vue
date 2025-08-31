<template>
    <div class="home">
        <LatestNewsCard/>
    </div>
</template>

<script>
import '../assets/css/home.css';
import LatestNewsCard from "@/components/home/LatestNewsCard.vue";

export default {
    name: "HomeView",
    components: { LatestNewsCard },
    created() {
        document.title = "ZsőrMC | Kezdőlap";
    },
};
</script>
