<template>
  <div class="vue-tempalte">
    <form @submit.prevent="submitForm">
      <h3>Sign Up As Investor</h3>
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
        <label>Investment Experience:</label>
        <input type="text" class="form-control form-control-lg" v-model="experience" />
      </div>
      <div class="form-group">
        <label>Investment Goals:</label>
        <input type="text" class="form-control form-control-lg" v-model="goals" />
      </div>
      <div class="form-group">
        <label>Risk Appetite:</label>
        <input type="text" class="form-control form-control-lg" v-model="appetite" />
      </div>
      <div class="form-group">
        <label>Available Capital:</label>
        <input type="number" class="form-control form-control-lg" v-model="capital" />
      </div>
      <div class="form-group">
        <label>Geographic Focus:</label>
        <input type="text" class="form-control form-control-lg" v-model="focus" />
      </div>
      <div class="form-group">
        <label>Investment Criteria:</label>
        <input type="text" class="form-control form-control-lg" v-model="criteria" />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">Submit</button>
      
      <input type="reset" value="Reset"  class="btn btn-dark btn-lg btn-block"/>
      <p class="forgot-password text-right">
        Already registered
        <router-link :to="{ name: 'login' }"> sign in?</router-link>
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
      experience: '',
      goals: '',
      appetite: '',
      capital: null,
      focus: '',
      criteria: '',
    };
  },
  computed: {
    filteredInvestments() {
      // Perform calculations based on the data properties
      // For example, filter a list of potential investments based on the investor's criteria
      return this.investments.filter((investment) => {
        return investment.criteria.includes(this.criteria);
      });
    },
  },
  methods: {

    submitForm() {
      // Handle form submission to create a new investor account
      // You can use this.$http or another library to send a POST request to your server
      try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          "name": this.name,
          "email": this.email,
          "password": this.password,
          "contact": this.contact,
          "experience": this.experience,
          "goal": this.goals,
          "risk": this.appetite,
          "capital": this.capital,
          "focus": this.focus,
          "investment": this.criteria
        });

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("http://localhost:5000/api/auth/createclient", requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.authtoken){
              return alert("Account created");
            }
            else{
              console.log(result);
              if(result.errors){
                return alert(result.errors[0].msg)
              }
              else{
                return alert(result.error);
              }
            }
          })
          .catch(error => console.log('error', error));
      } catch (error) {
        console.log(error);
      }
    },

    resetForm() {
      // Handle form reset to clear any entered data
      this.experience = '';
      this.expertise = '';
      this.goals = '';
      this.appetite = '';
      this.capital = null;
      this.focus = '';
      this.criteria = '';
    },
  },
};
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
