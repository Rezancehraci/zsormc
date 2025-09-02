<template>
    <div class="content-menu__login" v-if="user">
        <span class="content-menu__login-welcome">
            <img v-if="user.displayName" :src="`https://minotar.net/avatar/${user.displayName}/64`" 
            :alt="user.displayName" class="content-menu__login-avatar"/>
            <div>Üdv, <b>{{ user.displayName || user.email }}</b>!</div>
            <a href="/zsormc/#/admin" class="content-menu__login-button">Admin</a>
            <button @click="logout" class="content-menu__login-button">Kijelentkezés</button>
        </span>
    </div>
    <div class="content-menu__login" v-else>
        <div v-if="error">{{ error }}</div>
        <input v-model="email" type="email" placeholder="Email"/>
        <input v-model="password" type="password" placeholder="Jelszó"/>
        <button @click="login" class="content-menu__login-button">Bejelentkezés</button>
    </div>
</template>

<script>
import router from '@/router';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
export default {
    data() {
        return { email: '', password: '', error: '', user: null };
    },
    mounted() {
        this.unsubscribe = onAuthStateChanged(auth, (user) => {
            this.user = user;
        });
    },
    beforeUnmount() {
        if (this.unsubscribe) this.unsubscribe();
    },
    methods: {
        async login() {
            try {
                await signInWithEmailAndPassword(auth, this.email, this.password);
                this.$router.push('/admin');
            } catch(err) {
                this.error = err.message;
            }
        },
        async logout() {
            await signOut(auth);
            this.user = null;
            this.email = '';
            this.password = '';
            router.push('/');
        }
    }
};
</script>