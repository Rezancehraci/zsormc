<template>
    <div class="section-news-wrapper" id="section_news_wrapper">
        <div id="news" class="section news-container container">
            <div class="section-body">
                <div class="news-card">
                    <div class="card-body">
                        <div class="news-card_list">
                            <div class="news-card_list-card card" v-for="news in newsList" :key="news.id">
                                <img :src="news.img" :alt="news.title" class="news-card_list-image">
                                <div class="news-card_list-content">
                                    <h3 class="news-card_list-title">{{ news.title }}</h3>
                                    <div class="news-card_list-date">{{ news.date }}</div>
                                    <div class="news-card_list-description">{{ news.short_desc }}</div>
                                    <a :href="`/#/news/${news.id}`" class="news-card_list-button">Tovább</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { db } from "../../firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

export default {
    name: "LatestNewsCard",
    data() {
        return {
            newsList: [],
            newNews: { title: '', desc: '', img: '', short_desc: '' }
        };
    },
    mounted() {
        onSnapshot(collection(db, "news"), (snapshot) => {
            const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            this.newsList = docs.sort((a, b) => b.date.localeCompare(a.date));
        });
    },
    methods: {
        async addNews() {
            const newsData = {
                ...this.newNews,
                date: new Date().toISOString().split('T')[0]
            };
            await addDoc(collection(db, "news"), newsData);
            this.newNews = { title: '', desc: '', img: '', short_desc: '' };
        }
    }
}
</script>