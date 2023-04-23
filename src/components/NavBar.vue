<template>
    <div>
        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = true" class="d-flex d-sm-none" on small screen></v-app-bar-nav-icon>
            <router-link to="/">
                <v-img alt="Indigrow Logo" class="shrink mr-2" contain src="@/assets/logo.jpg" transition="scale-transition"
                    width="60" />
            </router-link>
            <v-tabs v-model="tab" align-with-title class="d-none nav d-sm-flex">
                <v-tabs-slider color="yellow"></v-tabs-slider>

                <v-tab @click="$router.push(`/${links[index]}`)" v-for="(item, index) in items" :key="item">
                    {{ item }}
                </v-tab>
            </v-tabs>
            <v-btn v-if="user" style="margin:5px;">
                <button @click="Logout()">Logout</button>
            </v-btn>
            <div v-else style="display: flex;">
                <v-btn style="margin:5px;">
                    <router-link :to="{ name: 'signup' }">SignUp</router-link>
                </v-btn>

                <v-btn style="margin:5px;">
                    <router-link :to="{ name: 'login' }">login</router-link>
                </v-btn>
            </div>
        </v-app-bar>

        <!-- Add a navigation bar -->
        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense>
                <v-list-item-group>
                    <v-list-item v-for="(item, index) in items">
                        <v-list-item-title @click="tab = index">{{ item }}</v-list-item-title>
                    </v-list-item>

                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

    </div>
</template>

<script>
import router from '@/router';
import Navbar from '../components/NavBar.vue';
import AboutUs from '@/views/AboutUs.vue';
export default {
    components: {
        Navbar,
    },
    methods: {
        Logout() {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            router.push("/login")
        }
    },
    data() {
        return {
            drawer: false,
            tab: null,
            user: "",

            items: [
                'Community',
                'About Us',
                'Events',
                'Profile',
            ],
            links: [
                'chat',
                'aboutus',
                'event',
                'profile',
            ]

        }
    },
    mounted() {
        this.user = localStorage.getItem("token")
    }
}
</script>

<style lang="scss" scoped>
.nav {
    margin-left: 0;
}
</style>
