<template>
  <div id="beds" class="container-fluid">
    <div class="alert alert-success" v-if="!bedList.length" role="alert">
      Verification under process
    </div>
    <div v-else class="table-responsive">
      <table class="table table-hover align-middle table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Address</th>
            <th scope="col">Contact</th>
            <th scope="col">Quantity Available</th>
            <th scope="col">Price</th>
            <th scope="col">Last Updated At</th>
            <th scope="col">Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(quote, index) in bedList" :key="quote.id" class="organisation-name">
            <th scope="row">{{index+1}}</th>
            <td>{{ quote.address }}</td>
            <td><a :href="'tel:'+ quote.contactinformation">{{ quote.contactinformation }}</a> <br/> {{ quote.name }}</td>
            <td>{{ quote.quantityavailable }}</td>
            <td>{{ quote.price }}</td>
            <td>{{ quote.lastupdatedat }}</td>
            <td>{{ quote.details }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    Last updated at: {{sheetUpdated.$t}}
    <hr/>
      Visitor
    <h2>{{ count }} </h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Beds",
  props: {
    msg: String,
  },
  data() {
    return {
      gsheet_url:
        "https://spreadsheets.google.com/feeds/list/1FOu1EFIudho88Iz5sHNgrr8XWSzJkdi9Grxty2U0Rz4/4/public/values?alt=json",
      bedList: [],
      sheetUpdated: '',
      count: 0,
      authorList: [],
      tagList: []
    };
  },
  created: function () {
    axios.get(this.gsheet_url).then((res) => {
        // this.bedList = res.data;
        // console.log("gsheet", res.data.feed.entry);
        this.sheetUpdated = res.data.feed.updated;
        this.parseData(res.data.feed.entry);
    });
    this.updateVisitCount();
  },
  methods: {
    parseData: function (entries) {
      // console.log("entries", entries);

      entries.forEach( (value) => {
          var entry = {
              "name": value.gsx$name.$t,
              "address": value.gsx$address.$t,
              "contactinformation": value.gsx$contactinformation.$t,
              "quantityavailable": value.gsx$quantityavailable.$t,
              "price": value.gsx$price.$t,
              "lastupdatedat": value.gsx$lastupdatedat.$t,
              "lastupdatedby": value.gsx$lastupdatedby.$t,
              "details": value.gsx$details.$t,
              "status": value.gsx$status.$t
          };
          if(value.gsx$status.$t === 'Available'){
            // Push entry into the list of quotes
            this.bedList.push(entry);
          }
      });
      // this.authorList = Array.from(authorSet);
      // this.authorList.sort();
      // this.tagList = Array.from(tagSet);
      // this.tagList.sort();
    },
    updateVisitCount: function () {
      axios.get('https://api.countapi.xyz/hit/cov-aid/kolkata-beds').then((res) => {
          console.log("hit", res.data);
          this.count = res.data.value;
      });
    },
    LocalVisitCount: function () {
      var n = localStorage.getItem('beds_visit_counter');
      if (n === null) {
          n = 0;
      }
      n++;
      localStorage.setItem("beds_visit_counter", n);
      this.count = n;
    }
  },
};
</script>
<style>
table thead {white-space:nowrap}
.table-hover tbody tr:hover td, .table-hover tbody tr:hover th {
  background-color: #9bc8b4;
}
</style>
