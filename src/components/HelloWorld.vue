<template>
  <div class="hello container">
    <!-- <h1>{{ msg }}</h1> -->
    <p class="lead">
      <router-link to="/oxygen" class="btn btn-lg btn-success fw-bold border-white bg-dark">Oxygen on Rent</router-link>
      <router-link to="/vaccine" class="btn btn-lg btn-secondary fw-bold border-white bg-dark  ">Vaccine</router-link>
      <router-link to="/beds" class="btn btn-lg btn-secondary fw-bold border-white bg-dark">Beds + Ventilators</router-link>
    </p>
    <p>
      Note: Clicking on the above buttons will take you to the list of available services (for Kolkata for the time being). This list of resources is crowdsourced. The purpose of this is to ensure that all the information scattered across various social media platforms is organized methodically in one place, accessible to all, and easy to find at times of need. Those who submit leads directly through the <router-link to="/form">Google form</router-link> attached here will be credited by name, the rest of the information has primarily been gathered from WhatsApp and Facebook.
    </p>
    <p>
      While we are doing our best to verify and update these leads by calling them every day, we are a very small group of individuals with classes or full-time jobs. We request you to exercise caution when engaging with these resources and if there's anything amiss, please report to us, and let us know as well using the google form linked above so that we may update this portal accordingly. 
      Thank you!
    </p>
    <li>
        <a href="https://haidertanzeel003.medium.com/heres-how-we-are-trying-to-help-during-the-covid-19-pandemic-af8397ca42b5" target="_blank" rel="noopener">Know more ></a>
      </li>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://www.wbhealth.gov.in" target="_blank" rel="noopener"
          >WB Health & Family Welfare</a
        >
      </li>
      <li>
        <a href="https://excise.wb.gov.in" target="_blank" rel="noopener"
          >Excise Directorate</a
        >
      </li>
      <li>
        <a href="https://indiacovidresources.in/" target="_blank" rel="noopener"
          >India Covid Resources</a
        >
      </li>
      <li>
        <router-link to="/form">Become a Volunteer / Add a verified supplier</router-link>
      </li>
    </ul>
    <hr/>
      Visitor
    <h2>{{ count }} </h2>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  created: function () {
    this.updateVisitCount();
    console.log(this.$route.path)
  },
  methods: {
    updateVisitCount: function () {
      axios.get('https://api.countapi.xyz/hit/cov-aid/kolkata').then((res) => {
          console.log("hit", res.data);
          this.count = res.data.value;
      });
    },
    LocalVisitCount: function () {
      var n = localStorage.getItem('homepage_counter');
      if (n === null) {
          n = 0;
      }
      n++;
      localStorage.setItem("homepage_counter", n);
      this.count = n;
    }
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
