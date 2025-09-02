<template>
    <div class="section-user-wrapper" id="section_user_wrapper">
        <div id="user" class="section user-section container">
            <div class="section-body">
                <div class="user-section__details">
                    <img v-if="user && user.displayName" :src="avatarUrl" :alt="user && user.displayName" class="user-details_avatar"/>
                    <div class="user-details_name" @click="showEdit = true" style="cursor:pointer">
                        {{ user && user.displayName ? user.displayName : 'Nincs név beállítva!' }}
                    </div>
                    <div class="user-details_email">{{ user && user.email ? user.email : '' }}</div>
                </div>
                <form v-if="showEdit || !user?.displayName" @submit.prevent="updateProfile" class="user-section__form">
                    <input v-model="newName" placeholder="Új felhasználónév"/>
                    <button type="submit">Mentés</button>
                    <button type="button" v-if="user?.displayName" @click="showEdit = false">Mégse</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { updateProfile } from 'firebase/auth';

export default {
    props: ['user'],
    data() {
        return {
            showEdit: false,
            newName: this.user && this.user.displayName ? this.user.displayName : ''
        };
    },
    computed: {
        avatarUrl() {
            return this.user && this.user.displayName
                ? `https://minotar.net/avatar/${this.user.displayName}/64`
                : `https://minotar.net/avatar/Steve/64`;
        }
    },
    watch: {
        user(newUser) {
            this.newName = newUser && newUser.displayName ? newUser.displayName : '';
            // this.newName = newUser?.displayName || '';
            if (!newUser?.displayName) this.showEdit = true;
        }
    },
    methods: {
        async updateProfile() {
            if (this.user) {
                await updateProfile(this.user, { displayName: this.newName });
                this.showEdit = false;
                this.$emit('profile-updated');
            }
        }
    }
};
</script>