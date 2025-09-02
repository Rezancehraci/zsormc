<template>
    <div class="section-news-wrapper" id="section_news_wrapper">
        <div id="news" class="section news-section container">
            <div class="section-head">
                <h2 class="section-head-title">Hírek</h2>
            </div>
            <div class="section-body">
                <table class="news-section__table">
                    <thead>
                        <tr>
                        <th>Kép</th>
                        <th>Cím</th>
                        <th>Dátum</th>
                        <th>Leírás</th>
                        <th>Művelet</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="news in newsList" :key="news.id">
                        <td><img :src="news.img" width="48" /></td>
                        <td>{{ news.title }}</td>
                        <td>{{ news.date }}</td>
                        <td>{{ news.short_desc }}</td>
                        <td>
                            <button @click="editNews(news)">Szerkeszt</button>
                            <button @click="deleteNews(news.id)">Töröl</button>
                        </td>
                        </tr>
                    </tbody>
                </table>
                <form @submit.prevent="saveNews">
                    <input v-model="form.title" placeholder="Cím" required />
                    <input v-model="form.img" placeholder="Kép URL" />
                    <input v-model="form.date" placeholder="Dátum" />
                    <textarea v-model="form.short_desc" placeholder="Leírás" required></textarea>
                    <button type="submit">{{ form.id ? "Mentés" : "Hozzáadás" }}</button>
                    <button v-if="form.id" @click="cancelEdit">Mégse</button>
                </form>
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
            form: { id: '', title: '', img: '', date: '', short_desc: '' }
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
            await this.fetchNews();
        },
        editNews(news) {
            this.form = { ...news }
        },
        async deleteNews(id) {
            await deleteDoc(doc(db, "news", id));
            await this.fetchNews();
        },
        cancelEdit() {
            this.form = { id: '', title: '', img: '', date: '', short_desc: '' }
        }
    }
}
</script>