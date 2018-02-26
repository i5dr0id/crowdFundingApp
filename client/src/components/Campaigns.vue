<template>
	<div id="campaigns" class="container">
		<div class="main container">
			<h1 class="page-header text-center"> Manage Campaigns </h1>
			<div class="section" v-for="(item, key) in items">
				<div>
					<h3>{{ item.alias }}</h3>
					<a class="float-right" href="#">Delete Campaign</a>
				</div>
				<div>
					<table class="table">
						<thead>
							<tr>
								<th scope="col">Amount Raised</th>
								<th scope="col">Number of Contributions</th>
								<th scope="col">Number of Endorsements</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>${{ item.fund }}</td>
								<td>0</td>
								<td>{{ items[0].aspirant_endorsements.length }}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<hr>
			</div>
			<div class="text-center">
				<a href="/add" class="btn btn-primary">Create New Campaign</a>
			</div>
		</div>
	</div>
</template>

<script>
	// import axios from 'axios';
	export default {
		name: "Campaigns",
		data() {
			return {
        alias: '',
        fund: '',
        items: [],
        jokes: [],
        api: 'https://161c4278.ngrok.io/aspirants/',
        // onCam: {},
				loading: false
			}
		},
		methods: {
			getJokes: function() {
				this.loading = true;
				axios.get("http://api.icndb.com/jokes/random/10")
					.then((response) => {
						this.loading = false;
						this.jokes = response.data.value;
					}, (error) => {
						this.loading = false;
					})
			}
    },

    created: function () {
      console.log('CREATEDED');

      this.axios
			.get(this.api)
			.then(response => {
        let onCam = response.data.aspirants
        this.items = response.data.aspirants
        console.log(onCam[1].aspirant_endorsements.length);
        // onCam.forEach(function(element){
        //   console.log(element);
        // });
        this.alias = onCam[5].alias;
        this.fund = onCam[5].fund;
			})
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

#campaigns{
	padding-top: 15%;
	padding-bottom: 10%;
}
</style>
