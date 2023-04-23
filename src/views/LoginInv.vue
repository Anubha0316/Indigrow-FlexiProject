<template>
    <div class="home">
        <div>
            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            <div class="form">
                <h3>Login as Investor</h3>

                <label for="username">Username</label>
                <input type="text" v-model="username" placeholder="Email or Phone" id="username">

                <label for="password">Password</label>
                <input type="password" v-model="password" placeholder="Password" id="password">

                <button @click="onLogin()">Log In</button>
            </div>
        </div>
    </div>
</template>
  
<script>
// @ is an alias to /src
import router from '@/router';
import Login from '@/views/Login.vue'

export default {
    name: 'Login',
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        onLogin() {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "email": "upamanyuwable707@gmail.com",
                "password": "12345678"
            });

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("http://localhost:5000/api/auth/loginclient", requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result.authtoken) {
                        localStorage.setItem("token", result.authtoken);
                        localStorage.setItem("user", result.id);
                        router.push("/")
                        return alert("Login successful");
                    }
                    else {
                        return alert(result.error);
                    }
                })
                .catch(error => console.log('error', error));
        }
    },
    components: {
        Login
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

.background .shape {
    height: 200px;
    width: 200px;
    position: absolute;
    border-radius: 50%;
}

.shape:first-child {
    background: linear-gradient(#1845ad,
            #23a2f6);
    left: -80px;
    top: -80px;
}

.shape:last-child {
    background: linear-gradient(to right,
            #ff512f,
            #f09819);
    right: -30px;
    bottom: -80px;
}

.form {
    height: 520px;
    width: 400px;
    background-color: rgba(255, 255, 255, 0.13);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 50px 35px;
}

.form * {
    font-family: 'Poppins', sans-serif;
    color: black;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
}

.form h3 {
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

::placeholder {
    color: black;
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
  