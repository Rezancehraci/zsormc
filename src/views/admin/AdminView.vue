<template>
    <UserProfile :user="user" @profile-updated="fetchUser"/>
    <NewsTable/>
</template>

<script>
import UserProfile from '@/components/admin/userProfile.vue';
import NewsTable from '@/components/admin/newsTable.vue';
import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import '../../assets/css/page-admin.css';
export default {
    components: { UserProfile, NewsTable },
    data() {
        return { user: null };
    },
    mounted() {
        onAuthStateChanged(auth, user => {
            this.user = user;
        });
    },
    methods: {
        fetchUser() {
            this.user = auth.currentUser;
        }
    }
}
</script>