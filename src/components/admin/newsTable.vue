<template>
    <div class="section-news-wrapper" id="section_news_wrapper">
        <div id="news" class="section news-section container">
            <div class="section-head">
                <h2 class="section-head-title">Hírek</h2>
            </div>
            <div class="section-body">
                <div class="news-section__button">
                    <button class="btn news-section_create" @click="openFormForNew">Új</button>
                    <button class="btn news-section_delete">Törlés</button>
                </div>
                <table class="news-section__table">
                    <thead>
                        <tr>
                            <th>Cím</th>
                            <th>Dátum</th>
                            <th>Rövid leírás</th>
                            <th>Leírás</th>
                            <th>Művelet</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="news in newsList" :key="news.id">
                            <td>{{ news.title }}</td>
                            <td>{{ news.date }}</td>
                            <td>{{ news.short_desc }}</td>
                            <td>{{ news.desc }}</td>
                            <td>
                                <div @click="editNews(news)" aria-label="Szerkesztés">
                                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                                        <path d="M3 14.25V17h2.75l8.13-8.13-2.75-2.75L3 14.25zM17.71 6.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="#ff9800"/>
                                    </svg>
                                </div>
                                <div @click="deleteNews(news.id)" aria-label="Törlés">
                                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                                        <path d="M6 7v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7M4 7h12M9 3h2a1 1 0 0 1 1 1v1H8V4a1 1 0 0 1 1-1z" stroke="#ff9800" stroke-width="2" stroke-linecap="round"/>
                                    </svg>
                                </div>
                                <a :href="`/#/news/${news.id}`" target="_blank" aria-label="Megtekintés">
                                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                                        <path d="M10 4.167c-5.833 0-8.333 5.833-8.333 5.833s2.5 5.833 8.333 5.833c5.833 0 8.333-5.833 8.333-5.833s-2.5-5.833-8.333-5.833zm0 9.166a3.334 3.334 0 1 1 0-6.667 3.334 3.334 0 0 1 0 6.667zm0-5a1.667 1.667 0 1 0 0 3.334 1.667 1.667 0 0 0 0-3.334z" fill="#ff9800"/>
                                    </svg>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div v-if="showForm" class="news-section__form-wrapper">
                    <form @submit.prevent="saveNews" class="user-section__form">
                        <input v-model="form.title" placeholder="Cím" required />
                        <input v-model="form.img" placeholder="Kép URL" />
                        <input v-model="form.date" placeholder="Dátum" />
                        <textarea v-model="form.short_desc" placeholder="Leírás" required></textarea>
                        <button type="submit">{{ form.id ? "Mentés" : "Hozzáadás" }}</button>
                        <button type="button" @click="cancelEdit">Mégse</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '@/firebase'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'

export default {
    data() {
        return {
            newsList: [],
            form: { id: '', title: '', img: '', date: '', short_desc: '' },
            showForm: false
        }
    },
    async mounted() {
        await this.fetchNews();
    },
    methods: {
        async fetchNews() {
            const querySnapshot = await getDocs(collection(db, "news"));
            this.newsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        },
        async saveNews() {
            if (this.form.id) {
                await updateDoc(doc(db, "news", this.form.id), this.form);
            } else {
                await addDoc(collection(db, "news"), this.form);
            }
            this.form = { id: '', title: '', img: '', date: '', short_desc: '' };
            this.showForm = false;
            await this.fetchNews();
        },
        editNews(news) {
            this.form = { ...news };
            this.showForm = true;
        },
        openFormForNew() {
            this.form = { id: '', title: '', img: '', date: '', short_desc: '' };
            this.showForm = true;
        },
        async deleteNews(id) {
            await deleteDoc(doc(db, "news", id));
            await this.fetchNews();
        },
        cancelEdit() {
            this.form = { id: '', title: '', img: '', date: '', short_desc: '' };
            this.showForm = false;
        }
    }
}
</script>