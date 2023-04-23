<template>
    <div class="vue-tempalte">
        <form @submit.prevent="submitForm">
            <h3>Sign Up As Entrepreneur</h3>
            <div class="form-group">
                <label>Full Name</label>
                <input type="text" v-model="name" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" v-model="email" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Create Password</label>
                <input type="password" v-model="password" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Contact Number</label>
                <input type="number" v-model="contact" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Company Name</label>
                <input type="text" v-model="company" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Funding History (if applicable)</label>
                <input type="text" v-model="history" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Product or Service Description</label>
                <input type="text" v-model="description" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Bussiness Stage (pre-seed, seed, early stage, growth stage)</label>
                <input type="text" v-model="stage" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Target Audience</label>
                <input type="text" v-model="target" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Future plans/Goals of the bussiness</label>
                <input type="text" v-model="plans" class="form-control form-control-lg" />
            </div>
            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>
            <input type="reset" value="Reset"  class="btn btn-dark btn-lg btn-block"/>
            <p class="forgot-password text-right">
                Already registered
                <router-link :to="{ name: 'login' }">sign in?</router-link>
            </p>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: "",
            email: "",
            password: "",
            contact: "",
            company: "",
            history: "",
            description: "",
            stage: "",
            target: "",
            plans: ""
        }
    },
    methods: {
        submitForm() {
            try {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                    "name": this.name,
                    "email": this.email,
                    "password": this.password,
                    "contact": this.contact,
                    "company": this.company,
                    "history": this.history,
                    "description": this.description,
                    "stage": this.stage,
                    "target": this.target,
                    "plan": this.plans
                });

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch("http://localhost:5000/api/auth/createuser", requestOptions)
                    .then(response => response.text())
                    .then(result => {
                        if (result.authtoken) {
                            // return alert("Account created");
                        }
                        else {
                            console.log(result);
                            if (result.errors) {
                                return alert(result.errors[0].msg)
                            }
                            else {
                                return alert(result.error);
                            }
                        }
                    })
                    .catch(error => console.log('error', error));
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style media="screen" scoped>
*,
*:before,
*:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: #080710;
}

.background {
    width: 430px;
    height: 520px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
}

form {
    height: 1500px;
    width: 400px;
    background-color: rgba(255, 255, 255, 0.13);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 150%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 50px 35px;
}

form * {
    font-family: 'Poppins', sans-serif;
    color: black;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
}

form h3 {
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
}

label {
    display: flex;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
}

input {
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(189, 15, 15, 0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
}

button {
    margin-top: 50px;
    width: 100%;
    background-color: whitesmoke;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
}
</style>