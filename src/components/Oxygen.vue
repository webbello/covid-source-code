<template>
  <div id="oxygen" class="container-fluid">
    <div class="table-responsive">
      <table class="table table-hover align-middle">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Contact</th>
            <th scope="col">Quantity Available</th>
            <th scope="col">Price</th>
            <th scope="col">Last Updated At</th>
            <th scope="col">Last Updated By</th>
            <th scope="col">Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(quote, index) in oxygenList" :key="quote.id" class="organisation-name">
            <th scope="row">{{index+1}}</th>
            <td>{{ quote.name }}</td>
            <td>{{ quote.address }}</td>
            <td><a :href="'tel:'+ quote.contactinformation">{{ quote.contactinformation }}</a></td>
            <td>{{ quote.quantityavailable }}</td>
            <td>{{ quote.price }}</td>
            <td>{{ quote.lastupdatedat }}</td>
            <td>{{ quote.lastupdatedby }}</td>
            <td>{{ quote.remarks }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    Last updated at: {{sheetUpdated.$t}}
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Oxygen",
  props: {
    msg: String,
  },
  data() {
    return {
      gsheet_url:
        "https://spreadsheets.google.com/feeds/list/1FOu1EFIudho88Iz5sHNgrr8XWSzJkdi9Grxty2U0Rz4/1/public/values?alt=json",
      oxygenList: [],
      sheetUpdated: '',
      authorList: [],
      tagList: []
    };
  },
  created: function () {
    axios.get(this.gsheet_url).then((res) => {
        // this.oxygenList = res.data;
        // console.log("gsheet", res.data.feed.entry);
        this.sheetUpdated = res.data.feed.updated;
        this.parseData(res.data.feed.entry);
    });
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
              "remarks": value.gsx$remarks.$t
          };

          // Push entry into the list of quotes
          this.oxygenList.push(entry);
      });
      // this.authorList = Array.from(authorSet);
      // this.authorList.sort();
      // this.tagList = Array.from(tagSet);
      // this.tagList.sort();
    },
  },
};
</script>
<style>
table thead {white-space:nowrap}

</style>
