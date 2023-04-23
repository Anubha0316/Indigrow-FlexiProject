<template>
    <div>
        <section>
            <v-parallax dark src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
                <v-row align="center" justify="center">
                    <v-col class="text-center" cols="12">
                        <h1>
                            Where Investors meet Visionaries.
                        </h1>
                        <p>Our goal is to foster innovation and support the growth of new businesses by providing a space
                            where investors can discover exciting investment opportunities and startups can access the
                            capital they need to thrive.</p>
                    </v-col>
                </v-row>
            </v-parallax>
        </section>
        <section>
            <h1>Let's Build The future together</h1>
            <v-container fluid>
                <v-row dense align="center" justify="center">
                    <v-col v-for="card in cards" :key="card.title" :cols="6" :sm="4">
                        <v-card class="divs" elevation="10">

                            <h2>{{ card.title }}</h2>
                            <h2>{{ card.subtitle }}</h2>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>
        <section>
            <h1>Meet the team</h1>
        </section>
        <div>

            <v-row align="center" justify="center">
                <v-card max-width="210" class="me-md-10">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200"></v-img>

                    <v-card-title>
                        Ankit Pandey
                    </v-card-title>
                    <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis neque congue
                        eros aliquet pretium. Ut tincidunt in odio non sagittis. Aliquam blandit erat ante, in elementum sem
                        tristique sit amet.</v-card-text>

                </v-card>
                <v-card max-width="210" class="me-md-5">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

                    <v-card-title>
                        Sahil Gupta
                    </v-card-title>
                    <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis neque congue
                        eros aliquet pretium. Ut tincidunt in odio non sagittis. Aliquam blandit erat ante, in elementum sem
                        tristique sit amet.</v-card-text>

                </v-card>

                
                <v-card max-width="210" class="me-md-5 ms-md-5">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

                    <v-card-title>
                        Tanya Agrawal
                    </v-card-title>
                    <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis neque congue
                        eros aliquet pretium. Ut tincidunt in odio non sagittis. Aliquam blandit erat ante, in elementum sem
                        tristique sit amet.</v-card-text>

                </v-card>

            </v-row>
            <br>
            <br>
            <br>

            <v-row align="center" justify="center">
                <v-card max-width="210" class="me-md-5">

                    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
                    <v-card-title>
                        Utkarsh Singh
                    </v-card-title>
                    <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis neque congue
                        eros aliquet pretium. Ut tincidunt in odio non sagittis. Aliquam blandit erat ante, in elementum sem
                        tristique sit amet.</v-card-text>

                </v-card>
                <v-card max-width="210" class="ms-md-5">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

                    <v-card-title>
                        Anubha Gupta
                    </v-card-title>
                    <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis neque congue
                        eros aliquet pretium. Ut tincidunt in odio non sagittis. Aliquam blandit erat ante, in elementum sem
                        tristique sit amet.</v-card-text>

                </v-card>


                


            </v-row>
        </div>


    </div>
</template>

<script>
export default {
    data: () => ({
        cards: [
            { title: '34k+', subtitle: 'Startups Registered', flex: 4 },
            { title: '18k+', subtitle: 'Investors on platform', flex: 4 },
            { title: '$50 million+', subtitle: 'Raised in funding', flex: 4 },
        ],
    }),

}
</script>

<style lang="scss" scoped>
.second {
    text-align: center;
    padding: 7%;
}

h1 {
    font-size: 3em;
    text-align: center;
}

h2 {
    font-size: 1.5em;
    text-align: center;


}

p {
    font-size: 1.25em;
}

section {
    padding-bottom: 7%;
}

.divs {
    padding-top: 7%;
    padding-bottom: 7%;
}</style>