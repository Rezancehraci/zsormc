<template>
    <div class="home">
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
    <LatestNewsCard/>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import LatestNewsCard from "@/components/home/LatestNewsCard.vue";

export default {
    name: "HomeView",
    components: { HelloWorld, LatestNewsCard },
    created() {
        document.title = "ZsőrMC | Kezdőlap";
    },
};
</script>
