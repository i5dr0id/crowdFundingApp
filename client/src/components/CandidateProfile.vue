<template>
  <div id="campaigns" class="container">
    <div class="main container">
      <header class="container">
        <div class="til text-center">
          <h1 class="page-header text-center">{{vision}}</h1>
        </div>
      </header>
      <div class="container">
        <div class="row">
          <div class="col-8">
            <div class="canimg">
              <img ref="candidate_img" src="https://res.cloudinary.com/crowdpac/image/upload/c_fill,f_auto,g_face,h_370,q_auto,w_620/v1/assets/campaign-image-empty"
                class="img-fluid rounded img-thumbnail" alt="Responsive image"> </div>
          </div>
          <div class="col-4">
            <span class="mini-recipient">
              <span class="mini-recipient__image-container party-200">
                <img ref="candidate_img2" src="https://res.cloudinary.com/crowdpac/image/upload/c_crop,h_2941,w_4928,x_0,y_138/c_fill,f_auto,h_60,q_auto,w_60/v1502768036/candidates/cand59926ba364c2d869bd75fc55"
                  alt="" class="mini-recipient__image">
                <!-- <span data-color="bg" title="" class="affiliation-icon party-bg color-tooltip" data-original-title="Republican">R</span> --></span>
              <span>
                <span class="mini-recipient__title">{{ firstname + ' ' + lastname }}</span>
                <span class="mini-recipient__subtitle">Candidate for
                  <p>{{position + ", " + party + ", "+ city+ ", "+ state}}</p>
                </span>
              </span>
            </span>
            <hr>
            <div class="contribution-stats__main">
              <h3 class="contribution-stats__total m-tiny">&#8358; {{ fund }}</h3>
              <div class="m-tiny contribution-stats__text">
                <span class="hidden-tablet">From </span>{{ donation }} donations on CrowdFundApp </div>
              <div class="progress progress-rounded m-tiny"
                title="10%">
                <div class="bar" style="width: 1.3%;"></div>
              </div>
              <div class="m-tiny contribution-stats__text"> 2% of &#8358;25,000 goal
                <span></span>
              </div>
              <div class="crowdpac-page__support-buttons">
                <p class="hidden-phone">
                  <a href="#" class="btn btn-primary btn-extralarge btn-block btn-donate-now btn-standard-size-on-tablet js-open-default-donate-modal"
                    data-mixpanel-event="candidate.fund-campaign.donate" data-toggle="modal" data-target="#exampleModalLong"> Donate &#8358;100 </a>
                </p>
                <div class=" d-flex flex-row justify-content-between row-fluid hidden-phone">
                  <div class="span3">
                    <a href="#" class="btn btn-secondary btn-large btn-medium-font btn-block btn-donate-now btn-standard-size-on-tablet u-tt-none"
                      data-mixpanel-event="crowdpac.landing-donate.donate" data-toggle="modal" data-target="#exampleModalLong"> &#8358;250 </a>
                  </div>
                  <div class="span3">
                    <a href="#" class="btn btn-secondary btn-large btn-medium-font btn-block btn-donate-now btn-standard-size-on-tablet u-tt-none"
                      data-mixpanel-event="crowdpac.landing-donate.donate" data-toggle="modal" data-target="#exampleModalLong"> &#8358;500 </a>
                  </div>
                  <div class="span3">
                    <a href="#" class="btn btn-secondary btn-large btn-medium-font btn-block btn-donate-now btn-standard-size-on-tablet u-tt-none"
                      data-mixpanel-event="crowdpac.landing-donate.donate" data-toggle="modal" data-target="#exampleModalLong"> &#8358;1500 </a>
                  </div>
                  <div class="span3">
                    <a href="#" class="btn btn-secondary btn-large btn-medium-font btn-block btn-donate-now btn-standard-size-on-tablet u-tt-none"
                      data-mixpanel-event="crowdpac.landing-donate.donate" data-toggle="modal" data-target="#exampleModalLong"> Other </a>
                  </div>
                </div>
              </div>
              <!-- //  -->
              <div class="span4 hidden-phone m-top-tiny">
                <div id="share-links" class="flex-grid flex-grid--halves hidden-phone">
                  <a href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.crowdpac.com%2Fcampaigns%2F380403%2Floren-taylor target=&quot;_new&quot;"
                    class="btn btn-medium btn-fb btn-fb-light campaign-page-social-media-btn" onclick="var sLeft = screen.width/2-275; var sTop = screen.height/2-225; open(this.href, this.dataset.popupTarget || 'share-popup', 'toolbar=0, status=0, width=550, height=450, left=' + sLeft + ', top=' + sTop); return false;">
                    <i class="icon-facebook"></i> Share </a>
                  <a href="http://twitter.com/share?url=https%3A%2F%2Fwww.crowdpac.com%2Fcampaigns%2F380403%2Floren-taylor&amp;text=Oakland+Deserves+More%21+-+Loren+Taylor+for+Oakland+2018&amp;related=crowdpac target=&quot;_new&quot;&amp;related=crowdpac"
                    class="btn btn-medium btn-twitter btn-twitter-light campaign-page-social-media-btn" onclick="var sLeft = screen.width/2-275; var sTop = screen.height/2-225; open(this.href, this.dataset.popupTarget || 'share-popup', 'toolbar=0, status=0, width=550, height=450, left=' + sLeft + ', top=' + sTop); return false;">
                    <i class="icon-twitter"></i> Tweet </a>
                </div>
              </div>
              <!-- //  -->
            </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="container">
        <div class="row">
          <div class="col-8">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs nav-justified">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#panel1" role="tab">MY STORY</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#panel2" role="tab">MISSION STATEMENT</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#panel3" role="tab">ENDOSMENTS
                  <span>{{items.length}}</span>
                </a>
              </li>
            </ul>
            <!-- Tab panels -->
            <div class="tab-content container">
              <!--Panel 1-->
              <div class="tab-pane fade in show active" id="panel1" role="tabpanel">
                <br>
                <div class="container story">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis
                  molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate
                  odit minima.</p>
                  </div>
              </div>
              <!--/.Panel 1-->
              <!--Panel 2-->
              <div class="tab-pane fade" id="panel2" role="tabpanel">
                <br>
                <div class="container mission">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis
                  molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate
                  odit minima.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis
                  molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate
                  odit minima.</p>
                  </div>
              </div>
              <!--/.Panel 2-->
              <!--Panel 3-->
              <div class="tab-pane fade" id="panel3" role="tabpanel">
                <br>
                <div class="edose">
                  <h3 class="h3" style="padding: 3%;">Endorse this campaigns and tell us why</h3>
                  <div class=".endose-div">
                    <form v-on:submit="addEndorsment">
                      <div class="form-row">
                        <div class="col-md-6 mb-6">
                          <label for="">Full name: </label>
                          <input type="text" v-model="fname" class="form-control" id="fn" placeholder="Full name"
                            required> </div>
                        <div class="col-md-6 mb-6">
                          <label for="">Email: </label>
                          <input type="text" v-model="email" class="form-control" id="emailEnd" placeholder="email"
                            required> </div>
                      </div>
                      <br>
                      <div class="form-row">
                        <div class="col-md-12">
                      <textarea class="form-control" v-model="endorsmentMsg" placeholder="Tell us why" style="margin-top: 0px; margin-bottom: 0px; height: 145px; width:100%;"></textarea>
                      </div>
                      </div>
                      <!-- <button></button> -->
                      <br>
                      <button type="submit" v-on:click="addEndorsment" class="btn btn-success btn-endose" style="float:right;">
                       ENDORSE</button>
                    </form>
                  </div>
                </div>
                <br>
                <hr>
                <div>
                  <ul>
                    <li v-for="(item, key) in items">
                      <div><h3><strong>{{item.name}}</strong></h3></div>
                      <div>
                        <h6>
                          {{ item.message}}
                        </h6>
                      </div>
                      <hr>
                    </li>
                  </ul>
                </div>
                 </div>
              <!--/.Panel 3-->
            </div>
          </div>
          <div class="col-4">
            <div class="container">
              <h2>CONTRIBUTORS</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <hr>
<hr> -->

<!--========================== MODAL ========================== -->

<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" style="max-width: 800px;">
				<div class="modal-content">
					<div class="modal-header" style="margin: 0 auto">
						<h3 class="text-center" style="font-size: 24px;margin-top: 20px;margin-bottom: 10px;font-family: inherit;font-weight: 500;line-height: 1.1;color: inherit;">Donate to
							<span style="display: inline-block;">
								<a href="index"> candidate {{ candidate }} </a>
							</span>
						</h3>
					</div>
					<div class="modal-body">
						<form method="POST" action="/login" style="padding: 30px">
							<div class="form-group">
							          <div class="card card-body bg-light">
            <h4>Basic Info</h4>
            <div class="form-row">
              <div class="col-md-6 mb-6">
                <label for="">First name</label>
                <input type="text" v-model="fname" class="form-control" id="fullname" placeholder="First name"
                  required> </div>
              <div class="col-md-6 mb-6">
                <label for="">Last name</label>
                <input type="text" v-model="lname" class="form-control" id="ln" placeholder="Last name"
                  required> </div>
            </div>
            <!-- Alias Email row -->
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Alias</label>
                <input type="text" v-model="alias" class="form-control" id="inputAlias" placeholder="Alias"> </div>
              <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" v-model="email" class="form-control" id="inputEmail4" placeholder="Email"> </div>
            </div>
            <!-- Gender Political row -->
            <!-- <div class="card card-body"> -->
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputGender">Gender</label>
                <select id="inputGender" v-model="gender" class="form-control">
                  <option selected>Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Apartment, studio, or floor"> </div>
            </div>
            <!-- </div> -->
            <br>
            <br>
          </div>
          <div class="form-row btn-donate">
            <div class="form-group col-md-12">
								<button type="submit" value="register" name="register" class="btn btn-block btn-lg" style="color:#fff;background-color:#05296b;">Donate</button>
            </div>
            </div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>

<!--========================== MODAL ========================== -->
  </div>
  <!-- <hr> -->
</template>
<script>
export default {
  name: "candidateProfile",
  candidate_ID: "",
  api: "https://onepercent-crowdfund.herokuapp.com/aspirants/",
  item: [],
  data() {
    return {
      updated: "",
      created: "",
      position: "",
      user_id: "",
      story: "",
      vision: "",
      video: "",
      image: "",
      email: "",
      firstname: "",
      lastname: "",
      lname: "",
      gender: "",
      alias: "",
      party: "",
      state: "",
      city: "",
      fund: "",
      facebook: "",
      twitter: "",
      items: [
        {name: "israel", message: "I endorse you"},
        {name: "Tomi", message: "I Comfirm you"},
        {name: "Ibrahim", message: "I Vote you"},
      ],
      fname: "",
      email: "",
      endorsmentMsg: "",
      candidate: "",
      donation: ""
    };
  },

  computed: {

  },

  methods: {
    addEndorsment: function(e) {
        // this.items = {name: this.fname, message: this.endorsmentMsg}
        this.items.name = this.fname;
        this.items.message = this.endorsmentMsg;
        // this.item.endorsmentMsg = this.endorsmentMsg;
        e.preventDefault();
      }
  },
  mounted() {
    this.api =
      "https://onepercent-crowdfund.herokuapp.com/aspirants/" +
      this.candidate_ID;
    this.axios.get(this.api).then(response => {
      this.item = response.data.aspirant;
      //  console.log(this.item.image);
      this.updated = this.item.updated;
      this.created = this.item.created;
      this.position = this.item.position;
      this.user_id = this.item.user_id;
      this.story = this.item.story;
      this.vision = this.item.vision;
      this.video = this.item.video;
      this.image = this.item.image;
      this.email = this.item.email;
      this.firstname = this.item.firstname;
      this.lastname = this.item.lastname;
      this.gender = this.item.gender;
      this.alias = this.item.alias;
      this.party = this.item.party;
      this.state = this.item.state;
      this.city = this.item.city;
      this.fund = this.item.fund;
      this.donation = this.item.donation;
      //  this.facebook = this.item.social[0];
      //  this.twitter = this.item.socail[0];
      this.$refs.candidate_img.src = this.image;
      this.$refs.candidate_img2.src = this.image;
      console.log(this.$refs);
    });
  },
  created() {
    console.log("Before Created");
    this.candidate_ID = window.location.pathname.split("/")[2];
  }
};
</script>
<style scoped>
.main {
  /* padding-top: 10%; */
}

#campaigns {
  padding-top: 10%;
  padding-bottom: 10%;
  /* background-color: #787878; */
}

.til {
  width: 100%;
  padding: 8%;
}

.page-heading,
h1 {
  font-family: acta-display, georgia, serif;
  font-weight: 700;
  color: #121212;
  font-size: 50px;
  line-height: 1.2;
}

.mini-recipient {
  font-family: proxima-nova, Gotham, Helvetica, sans-serif;
  font-weight: 400;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  color: #787878;
  font-size: 14px;
  line-height: 1.3;
  margin: -5px;
  text-align: left;
}

.mini-recipient__image-container {
  -ms-flex-item-align: start;
  align-self: flex-start;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  position: relative;
}

.mini-recipient > * {
  margin: 5px;
}

.mini-recipient__image {
  border-radius: 50%;
  height: 52px;
  width: 52px;
}

img {
  width: auto\9;
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  border: 0;
  -ms-interpolation-mode: bicubic;
}

.mini-recipient > * {
  margin: 5px;
}

.mini-recipient__title {
  color: #121212;
  display: block;
  font-weight: 700;
}

.mini-recipient__subtitle a {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid #ccc;
}

a,
a:active,
a:focus,
a:hover,
a:link,
a:visited {
  color: #121212;
  text-decoration: none;
}

a {
  color: #08c;
  text-decoration: none;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.contribution-stats__main {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  margin-bottom: 10px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.contribution-stats__total {
  font-family: acta-display, georgia, serif;
  font-weight: 400;
  color: #121212;
  font-size: 50px;
  line-height: 0.9;
  margin-top: 0;
}

.m-tiny,
.p-half {
  margin-bottom: 5px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  font-weight: 300;
  line-height: 1.2;
}

a,
b,
div,
ul,
li {
  -webkit-tap-highlight-color: transparent;
  -webkit-tap-highlight-color: transparent;
  -moz-outline-: none;
}

h3 {
  font-size: 24.5px;
}

.progress-rounded {
  height: 13px;
  border-radius: 20px;
  overflow: hidden;
}

.progress {
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  background: #e6e6e6;
}

.bar {
  width: 1.3%;
}

.progress-rounded > .bar {
  border-radius: 20px;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.progress .bar {
  background: #ff4814;
}

.progress .bar {
  float: left;
  width: 0;
  height: 100%;
  font-size: 12px;
  color: #fff;
  text-align: center;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  background-color: #0e90d2;
  background-image: -moz-linear-gradient(top, #149bdf, #0480be);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#149bdf),
    to(#0480be)
  );
  background-image: -webkit-linear-gradient(top, #149bdf, #0480be);
  background-image: -o-linear-gradient(top, #149bdf, #0480be);
  background-image: linear-gradient(to bottom, #041d57, #041d57);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr="#ff149bdf",
      endColorstr="#ff0480be",
      GradientType=0
    );
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  -moz-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: width 0.6s ease;
  -moz-transition: width 0.6s ease;
  -o-transition: width 0.6s ease;
  transition: width 0.6s ease;
}

.crowdpac-page__support-buttons {
  margin-top: 15px;
}

p {
  font-family: rooney-web, georgia, serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  color: #787878;
}

.btn.btn-primary:active,
.btn.btn-primary:focus,
.btn.btn-primary:hover,
.btn.btn-primary:link,
.btn.btn-primary:visited {
  color: #fff;
}

.btn.btn-party,
.btn.btn-party:active,
.btn.btn-party:focus,
.btn.btn-party:hover,
.btn.btn-party:link,
.btn.btn-party:visited,
.btn.btn-primary,
.btn.btn-primary:active,
.btn.btn-primary:focus,
.btn.btn-primary:hover,
.btn.btn-primary:link,
.btn.btn-primary:visited {
  color: #fff;
}

.btn.btn-extralarge {
  font-size: 20px;
  padding: 15px 10px;
}

.btn.btn-primary {
  background: #ff4814;
  border-color: transparent;
  color: #fff;
}

.btn:focus,
.btn:link,
.btn:visited {
  /* color: #ff4814; */
}

p a:link,
p a:visited {
  /* color: #ff4814; */
  text-decoration: none;
}

a,
a:active,
a:focus,
a:hover,
a:link,
a:visited {
  color: #121212;
  text-decoration: none;
}

.btn {
  border: 1px solid #ff4814;
  text-shadow: none;
  text-decoration: none !important;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-family: proxima-nova, Gotham, Helvetica, sans-serif;
  font-weight: 400;
  background: #fff;
  border-radius: 5px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #ff4814;
  display: inline-block;
  font-size: 16px;
  line-height: 1.3;
  padding: 0.4em 1em 0.38em;
  text-align: center;
}

.btn-block {
  display: block;
  width: 100%;
  padding-right: 0;
  padding-left: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.btn.btn-large {
  padding: 0.9em 1em 0.88em;
}

.btn.btn-medium-font {
  font-size: 15px;
}

.nav-tabs {
  border: 0;
  padding: 0.7rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: -20px;
  background-color: #041d57;
  z-index: 2;
  position: relative;
  border-radius: 2px;
}

.nav-tabs .nav-link {
  margin-right: 10%;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #041d57;
  background-color: #fff;
  border-color: #ddd #ddd #fff;
}

a.nav-link {
  color: #ffffff;
}

.edose {
  padding: 3%;
}

.btn-endose {
  border: 1px solid green;
  color: green;
}

img {
  width: 620px;
  height: 370px;
}

.canimg {
  width: 620px;
  height: 370px;
}
.mission {
  padding: 5%;
}

.story {
  padding: 5%;
}
.span4 {
  padding-top: 20px;
}

.btn-donate {
  padding-top: 3%;
}
</style>
