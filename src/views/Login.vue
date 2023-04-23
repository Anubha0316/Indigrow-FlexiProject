<template>
    <div class="card-container">
        <div class="card">
            <div class="card-content">
                <button class="btn"><router-link class="link" :to="{ name: 'logininv' }">Login as
                        Investor</router-link></button>
            </div>
        </div>
        <div class="card">
            <div class="card-content">
                <button class="btn"><router-link class="link" :to="{ name: 'loginent' }">Login as
                        Entrepreneur</router-link></button>
            </div>
        </div>
    </div>
</div></template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
.btn {
    border: solid black 2px;
    color: black;
    padding: 30px 50px;
    text-decoration: none;
    border-radius: 10px;
    font-size: x-large;
    background-color: #f2dab8;
}

.card-container {
    display: flex;
    justify-content: space-around;
    padding-top: 50px;
}


.card {
    flex-basis: 40%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.link {
    text-decoration: none;
    color: black;
}
</style>