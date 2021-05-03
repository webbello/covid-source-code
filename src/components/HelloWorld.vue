<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Note: This list of resources is crowdsourced. The purpose of this is to
      ensure that all the information scattered across various social media
      platforms is organised methodically in one place, accessible to all, and
      easy to find at times of need. Those who submit leads directly through the
      google form attached here will be credited by name, the rest of the
      information has primarily been gathered from Facebook, Instagram and
      Twitter.
    </p>
    <p>
      While we are doing our best to verify and update these leads, we are a
      very small group of individuals with classes or full-time jobs. Unless
      specified otherwise, the leads are unverified, but we will try our best to
      get them verified at the earliest. We request you to exercise caution when
      engaging with these resources and if there's anything amiss, please report
      to the authorities, and let us know as well using the google form linked
      above so that we may update this portal accordingly. Thank you.
    </p>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://www.wbhealth.gov.in" target="_blank" rel="noopener"
          >Health & Family Welfare</a
        >
      </li>
      <li>
        <a href="https://excise.wb.gov.in" target="_blank" rel="noopener"
          >Forum</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
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
