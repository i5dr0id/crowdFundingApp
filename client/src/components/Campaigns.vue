<template>
  <div id="campaigns" class="container">
    <div class="main container">
      <h1 class="page-header text-center"> Manage Campaigns </h1>
      <div class="text-center">
        <a href="/add" class="btn btn-primary">Create New Campaign</a>
      </div>
      <div class="section" v-for="(item, key) in items">
        <div>
          <h3 class="al">
            <router-link class="al" :to="/campaigns/ + item._id">{{ item.alias }}</router-link>
          </h3>
          <a class="float-right" href="#">Delete Campaign</a>
        </div>
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Amount Raised</th>
                <th scope="col">Number of Contributions</th>
                <th scope="col">Number of Endorsements</th>
                <th scope="col">Office</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${{ item.fund }}</td>
                <td>0</td>
                <!-- <td>{{ items[0].aspirant_endorsements.length }}</td> -->
                <td>0</td>
                <td>{{ item.position }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr> </div>
      <!-- <div class="text-center">
				<a href="/add" class="btn btn-primary">Create New Campaign</a>
			</div> --></div>
  </div>
</template>
<script>
  // import axios from 'axios';
  export default {
    name: "Campaigns",
    data() {
      return {
        id: '',
        token: '',
        alias: '',
        fund: '',
        items: [],
        jokes: [],
        api: 'https://onepercent-crowdfund.herokuapp.com/aspirants/all/',
        // onCam: {},
        loading: false
      }
    },
    methods: {
    },
    created: function () {
      this.id = localStorage.getItem("id")
      this.token = localStorage.getItem("token");
      console.log("TOKEN RE")
      console.log({"TOKEN":this.token});
      this.api = 'https://onepercent-crowdfund.herokuapp.com/aspirants/all/'+this.id;
      let config = {
        "x-access-token": this.token ,
        "Content-Type": "application/json"
      }
      this.axios.get(this.api, config).then(response => {
        let onCam = response.data.aspirants
        this.items = response.data.aspirants
        console.log(response.data.aspirants);
        // console.log(onCam[1].aspirant_endorsements.length);
        // onCam.forEach(function(element){
        //   console.log(element);
        // });
        // this.alias = onCam[5].alias;
        // this.fund = onCam[5].fund;
      });
    }
  };

</script>
<style scoped>
  .main {
    padding-top: 3%;
  }

  a {
    color: #ff4814;
  }

  router-link {
    color: #ff4814;
  }

  #campaigns {
    padding-top: 15%;
    padding-bottom: 10%;
  }

  .al {
    color: #787878;
    /* border: ipx solid red; */
  }

</style>
