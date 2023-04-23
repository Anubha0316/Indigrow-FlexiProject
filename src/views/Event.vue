<template>
    <div>
        <div class="nav">
            <v-app-bar color="deep-purple accent-4" dense dark class="d-none d-sm-flex" align-with-title>
                <v-toolbar-title class="navlinks"> <a href="#upcoming">Upcoming Events</a></v-toolbar-title>
                <v-toolbar-title class="navlinks"><a href="#favevents">Favourite Events </a></v-toolbar-title>

                <v-toolbar-title class="navlinks"> <a href="#registered">Registered Events</a></v-toolbar-title>
            </v-app-bar>
        </div>
        <v-row>
            <v-col cols="10" offset="1">
                <h1>
                    Upcoming Events
                </h1>
                <section id="upcoming">
                    <v-container fluid>
                        <v-row dense>
                            <v-col v-for="card in cards1" :key="card.title" :cols="card.flex">
                                <v-card outlined>
                                    <v-list-item three-line>
                                        <v-list-item-content>
                                            <v-list-item-title v-text="card.title" class="text-h5 mb-1">
                                            </v-list-item-title>
                                            <v-list-item-subtitle v-text="card.subtitle"></v-list-item-subtitle>
                                            <v-list-item-subtitle v-text="card.subtitle"></v-list-item-subtitle>
                                        </v-list-item-content>

                                        <v-list-item-avatar tile size="100" color="grey">
                                            <v-img :src="card.src">

                                            </v-img>
                                        </v-list-item-avatar>
                                    </v-list-item>

                                    <v-card-actions>
                                        <v-btn outlined rounded text>
                                            Register Now
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                                <br>
                            </v-col>
                        </v-row>
                    </v-container>
                </section>

                <section id="favevents">
                    <h1>
                        Favourite Events
                    </h1>
                    <v-container fluid>
                        <v-row dense>
                            <v-col v-for="card in cards2" :key="card.title" :cols="card.flex">
                                <v-card outlined>
                                    <v-list-item three-line>
                                        <v-list-item-content>
                                            <v-list-item-title v-text="card.title" class="text-h5 mb-1">
                                            </v-list-item-title>
                                            <v-list-item-subtitle v-text="card.subtitle"></v-list-item-subtitle>
                                            <v-list-item-subtitle v-text="card.subtitle"></v-list-item-subtitle>
                                        </v-list-item-content>

                                        <v-list-item-avatar tile size="100" color="grey">
                                            <v-img :src="card.src">
                                            </v-img>
                                        </v-list-item-avatar>
                                    </v-list-item>

                                    <v-card-actions>
                                        <v-btn outlined rounded text primary>
                                            Register Now
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                                <br>
                            </v-col>
                        </v-row>
                    </v-container>

                </section>
                <section id="registered">
                    <h1>
                        Registered Events
                    </h1>
                    <v-container fluid>
                        <v-row dense>
                            <v-col v-for="card in cards3" :key="card.title" :cols="card.flex">
                                <v-card outlined>
                                    <v-list-item three-line>
                                        <v-list-item-content>
                                            <v-list-item-title v-text="card.title" class="text-h5 mb-1">
                                            </v-list-item-title>
                                            <v-list-item-subtitle v-text="card.subtitle"></v-list-item-subtitle>
                                            <v-list-item-subtitle v-text="card.subtitle"></v-list-item-subtitle>
                                        </v-list-item-content>

                                        <v-list-item-avatar tile size="100" color="grey">
                                            <v-img :src="card.src">

                                            </v-img>
                                        </v-list-item-avatar>
                                    </v-list-item>

                                    <v-card-actions>
                                        <v-btn disabled outlined rounded text>
                                            Registered
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                                <br>
                            </v-col>
                        </v-row>
                    </v-container>
                </section>
            </v-col>
        </v-row>
    </div>
</template>
  
<script>
export default {
    data: () => ({
        cards1: [
            { title: 'New Event 1', subtitle: 'Greyhound divisely hello coldly fonwderfully', src: 'https://images.adsttc.com/media/images/53ac/8002/c07a/80eb/2500/0002/large_jpg/3032188-slide-rgcarlmods02-hawaii06-10xl.jpg?1403813884', flex: 12 },
            { title: 'New Event 2', subtitle: 'Greyhound divisely hello coldly fonwderfully', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 12 },
            { title: 'New Event 3', subtitle: 'Greyhound divisely hello coldly fonwderfully', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 12 },
        ],
        cards2: [
            { title: 'Event 1', subtitle: 'Greyhound divisely hello coldly fonwderfully', src: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?cs=srgb&dl=pexels-luis-quintero-2774556.jpg&fm=jpg', flex: 12 },
            { title: 'Event 2', subtitle: 'Greyhound divisely hello coldly fonwderfully', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 12 },
            { title: 'Event 3', subtitle: 'Greyhound divisely hello coldly fonwderfully', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 12 },
        ],
        cards3: [
            { title: 'REvent 1', subtitle: 'Greyhound divisely hello coldly fonwderfully', src: 'https://images.adsttc.com/media/images/53ac/8002/c07a/80eb/2500/0002/large_jpg/3032188-slide-rgcarlmods02-hawaii06-10xl.jpg?1403813884', flex: 12 },
            { title: 'REvent 2', subtitle: 'Greyhound divisely hello coldly fonwderfully', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 12 },
            { title: 'REvent 3', subtitle: 'Greyhound divisely hello coldly fonwderfully', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 12 },
        ],
    }),

}
</script>
  
<style lang="scss" scoped>
a:link {
    color: white;
    background-color: transparent;
    text-decoration: none;
}

a:visited {
    color: white;
    background-color: transparent;
    text-decoration: none;
}

a:hover {
    color: white;
    background-color: transparent;
    text-decoration: underline;
}

.navlinks {
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;

}

.nav {
    text-align: center;
}
</style>                