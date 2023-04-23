<template>
    <div>
    <section class="vue-carousel">
        <div>
            <v-carousel hide-delimiters show-arrows-on-hover height="auto">
                <v-carousel-item v-for="(itemee, i) in itemees" :key="i" :src="itemee.src"
                    reverse-transition="fade-transition" transition="fade-transition">
                    <v-row class="fill-height img-txt" justify="left">
                        <v-col cols="8" offset="2" md="10" offset-md="1">
                            <div class="text">
                                <h1> <b>Connecting Startups<br>and Investors</b></h1>
                                <p>Start and manage a professional fundraise<br>to attract quality accredited investors.
                                </p>
                            </div>
                        </v-col>
                    </v-row></v-carousel-item>
            </v-carousel>
        </div>
    </section>

    <section>
        <div>
            <h1 class="heading"><br>Recently Funded Companies on IndiGrow<br></h1>

            <v-container fluid>
                <v-row dense>
                    <v-col v-for="card in cards" :key="card.title" :cols="6" :sm="4">
                        <v-card :loading="loading" class="mx-auto my-12" max-width="300">
                            <template slot="progress">
                                <v-progress-linear color="deep-purple" height="3" indeterminate></v-progress-linear>
                            </template>
                            <v-img height="180" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

                            <v-card-title v-text="card.title"></v-card-title>

                            <v-card-text>
                                <v-row align="center" class="mx-0">
                                    <v-icon>mdi-map-marker</v-icon>
                                    <v-card-title v-text="card.location"></v-card-title>
                                </v-row>
                            </v-card-text>

                            <v-divider class="mx-4"></v-divider>

                            <v-card-title v-text="card.amount"></v-card-title>
                        </v-card>

                    </v-col>
                </v-row>
            </v-container>
        </div>
    </section>
    <section>
        <div>
            <v-img src="@/assets/investors.png"></v-img>
        </div>
    </section>

    <section>
        <div>
            <h2 class="heading">Testimonials</h2>

            <v-carousel hide-delimiters show-arrows-on-hover height="auto">
                <v-carousel-item v-for="(testimonial, index) in testimonials" :key="index">
                    <div id="app">
                        <v-app id="inspire">
                            <v-card class="mx-auto crds" color="#26c6da" dark max-width="80%" position="centre">


                                <v-card-text class="text-h5 font-weight-bold">
                                    {{ testimonial.text }}
                                </v-card-text>


                                <v-list-item class="grow">
                                    <v-list-item-avatar color="grey darken-3">
                                        <v-img class="elevation-6" alt=""
                                            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                        <v-list-item-title>{{ testimonial.author }}</v-list-item-title>
                                        <v-list-item-title>{{ testimonial.role }}</v-list-item-title>
                                    </v-list-item-content>


                                </v-list-item>

                            </v-card>
                        </v-app>
                    </div>
                </v-carousel-item>
            </v-carousel>
        </div>
    </section>
    <v-footer color="primary lighten-1" padless>
        <v-row justify="center" no-gutters>
            <v-btn v-for="item in items" :key="item" color="white" text rounded class="my-2">
                {{ item }}
            </v-btn>
            <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
                {{ new Date().getFullYear() }} — <strong>IndiGrow</strong>
            </v-col>
        </v-row>
    </v-footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                { title: 'Udaan', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', location: 'Mumbai, India', amount: 'Raised $10000' },
                { title: 'PharmEasy', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', location: 'Gurgaon, India', amount: 'Raised $30000' },
                { title: 'Cult.Fit', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', location: 'Bengaluru, India', amount: 'Raised $20000' },
                { title: 'Razorpay', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', location: 'Pune, India', amount: 'Raised $50000' },
                { title: 'Digit', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', location: 'Surat, India', amount: 'Raised $15000' },
                { title: 'Slice', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', location: 'Delhi, India', amount: 'Raised $25000' },
            ],

            itemees: [
                {
                    src: 'https://www.theshovel.com.au/wp-content/uploads/2019/10/man-giving-presentation-SS-620x388.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                },
            ],
            testimonials: [
                {
                    text:
                        "I was blown away by the ease of use and simplicity of this web app. As a busy entrepreneur, I don't have time to learn complicated software, and this app allowed me to easily create and manage my products. The user interface is intuitive and beautifully designed. I highly recommend it to anyone looking for a Shark Tank-like experience.",
                    author: "Jane Doe",
                    role: "Founder of XYZ Company",
                },
                {
                    text:
                        "I've been using this web app for several months now, and it has revolutionized the way I evaluate potential investments. The platform is robust and allows me to quickly evaluate companies and make informed decisions. The team behind the app is always responsive and open to feedback, which makes for a great user experience.",
                    author: "John Smith",
                    role: "Investor at ABC Ventures",
                },
                {
                    text:
                        "As someone who has pitched on Shark Tank, I appreciate how this app accurately simulates the experience and helps me prepare for future pitches. I highlytheir pitch skills and take their business to the next level.",
                    author: "Sarah Johnson",
                    role: "Entrepreneur",
                },
            ],

        }
    },
}
</script>

<style lang="scss" scoped>
.vue-carousel {

    z-index: -1;
}

.text {
    padding: 11% 0 15% 0;


    text-align: justify;
}

.heading {
    text-align: center;
    margin: 3% 3% 0 3%;

}

.card-bg {
    background-color: lightgrey;
}

.img-txt{
    color: White;
    font-weight: bolder;
}
.sec_three {
    background-color: #00308F;
}

.space {
    padding-top: 4%;
}

.rounded-image {
    border-radius: 50%;
}

.crds {
    padding: 5%;
    margin-top: 4%;
}
</style>