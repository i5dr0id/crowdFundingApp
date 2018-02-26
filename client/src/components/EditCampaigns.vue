<template>
  <div id="campaigns" class="container">
    <div class="main container">
      <h1 class="page-header"> Create New Campaign </h1>
      <!-- <h4 class="text-center"> Create a campaign for yourself or your candidate</h4> -->
      <div>
        <form v-on:submit="addCampaign">
          <!-- First name Last Name -->
          <div class="card card-body bg-light">
            <h4>Basic Info</h4>
            <div class="form-row">
              <div class="col-md-6 mb-6">
                <label for="">First name</label>
                <input type="text" v-model="fname" class="form-control" id="fn" placeholder="First name"
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
          </div>
          <!-- SOCIAL -->
          <div class="card card-body bg-light">
            <h4>Social Info</h4>
            <div class="form-row">
              <div class="col-md-6 mb-6">
                <label for="">Facebook</label>
                <input type="text" v-model="facebook" class="form-control" id="fbL" placeholder="http://www.facebook.com/candidate"
                  required> </div>
              <div class="col-md-6 mb-6">
                <label for="">Twitter</label>
                <input type="text" v-model="twitter" class="form-control" id="twL" placeholder="http://www.twitter.com/candidate"
                  required> </div>
            </div>
            <div class="form-row">
              <div class="col-md-6 mb-6">
                <label for="">Website</label>
                <input type="text" v-model="website" class="form-control" id="web" placeholder="http://www.example.com"
                  required> </div>
              <!-- <div class="col-md-6 mb-6">
							<label for="">Twitter</label>
							<input type="text" v-model="twitter" class="form-control" id="twL" placeholder="http://www.twitter.com/candidate" required>
						</div> --></div>
          </div>
          <!-- SOCIAL -->
          <!-- Campaign	 -->
          <div class="card card-body bg-light">
            <h4> Campaign Info </h4>
            <div class="form-row">
              <div class="col-md-6 mb-6">
                <label for="">State</label>
                <input type="text" v-model="state" class="form-control" id="st" placeholder="State" required> </div>
              <div class="col-md-6 mb-6">
                <label for="">City</label>
                <input type="text" v-model="city" class="form-control" id="ct" placeholder="City" required> </div>
            </div>
            <div class="form-row">
              <div class="col-md-6 mb-6">
                <label for="">Political Party</label>
                <input type="text" v-model="polparty" class="form-control" id="pp" placeholder="Political party"
                  required> </div>
              <div class="col-md-6 mb-6">
                <label for="">Position/Office</label>
                <input type="text" v-model="office" class="form-control" id="rf" placeholder="Running for"
                  required> </div>
            </div>
            <label for="amount">Fundraising Goal</label>
            <div class="form-row">
              <div class="input-group col-md-6">
                <span class="input-group-addon">$</span>
                <input type="text" v-model="goal" id="amount" class="form-control" aria-label="Amount (to the nearest dollar)">
                <span class="input-group-addon">.00</span>
              </div>
              <div class="col-md-6 mb-6">
                <label for="">Video</label>
                <input type="text" v-model="video" class="form-control" id="yt" placeholder="https://www.youtube.com/watch?"
                  required> </div>
            </div>
          </div>
          <!-- TEXTAREA  -->
          <div class="card card-body bg-light">
            <div class="form-row">
              <div class="col-md-6 mb-6">
                <label for="">Vision</label>
                <textarea class="form-control" v-model="vision" id="vision" rows="3"></textarea>
                <!-- <input type="text" v-model="vision" class="form-control" id="pp" placeholder=""  required> -->
              </div>
              <div class="col-md-6 mb-6">
                <label for="">Mission</label>
                <textarea class="form-control" v-model="mission" id="mission" rows="3"></textarea>
                <!-- <input type="text" v-model="mission" class="form-control" id="rf" placeholder="" required> -->
              </div>
            </div>
            <div class="form-group">
              <label for="exampleTextarea">Story</label>
              <textarea class="form-control" v-model="story" id="exampleTextarea" rows="3"></textarea>
            </div>
          </div>
          <!--  -->
          <div class="card card-body bg-light">
            <h4>Upload Photo</h4>
            <div class="card-picture card-body bg-light">
              <div class="form-row">
                <div class="card-picture thumbnail">
                  <img ref="camimg" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                    id="img-preview" class="img-thumbnail" />
                  <label class="file-upload-container" for="file-upload">
                    <input v-on:change="uploadFile" id="file-upload" type="file" style="display:none;"> Select an Image </label>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" v-on:click="addCampaign" class="btn btn-success ">CREATE</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "createCam",
    data() {
      return {
        fname: '',
        lname: '',
        alias: '',
        email: '',
        gender: '',
        address: '',
        twitter: '',
        facebook: '',
        website: '',
        state: '',
        city: '',
        polparty: '',
        office: '',
        goal: '',
        video: '',
        story: '',
        image: '',
        vision: '',
        mission: '',
        camData: {},
        imgFile: "",
        customer: {},
        cloudinary_url: "https://api.cloudinary.com/v1_1/dmdvs9djh/upload/",
        cloudinary_upload_preset: "kn1frgui"
        // fD: {}
      };
    },
    methods: {
      addCampaign(e) {
        console.log('CREATE CLICKED');
        this.data = {
          'story': this.story,
          'firstname': this.fname,
          'lastname': this.lname,
          'email': this.email,
          'gender': this.gender,
          'state': this.state,
          'city': this.city,
          'social': [this.facbook, this.twitter],
          'vision': this.vision, //add
          'video': this.video,
          'alias': this.alias,
          'party': this.polparty,
          'fund': this.fund,
          'image': this.image
        }
        this.axios.post('https://onepercent-crowdfund.herokuapp.com/aspirants/', this.data).then(response => {
          if (response.data.responseCode === "00") {
            alert(response.data.responseMessage);
          }
        }).catch(error => {
          alert(error);
        });
        e.preventDefault();
      },
      uploadFile(file) {
        this.imgFile = file.target.files[0];
        let fD = new FormData();
        fD.append("file", this.imgFile);
        fD.append("upload_preset", this.cloudinary_upload_preset);
        const config = {
          headers: {
            "X-Requested-With": "XMLHttpRequest"
          }
        };
        this.axios.post(this.cloudinary_url, fD, config).then(response => {
          this.image = response.data.secure_url;
          this.$refs.camimg.src = response.data.secure_url;
        }, error => {
          console.log("ERRORRORORORORO");
          console.log(error);
        });
      }
    }
  };

</script>
<style scoped>
  .main {
    padding-top: 4%;
  }

  #campaigns {
    padding-top: 10%;
    padding-bottom: 10%;
    /* background-color: #787878; */
  }

  .card {
    margin-bottom: 20px;
  }

  .page-header {
    border-bottom: 1px solid #eee;
    padding-bottom: 9px;
    margin: 40px 0 20px;
  }

  .btn-success {
    background-color: #28a745;
  }

  .card-picture {
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  }

  .file-upload-container {
    width: 100%;
    height: 50px;
    overflow: hidden;
    background: #3f51b5;
    user-select: none;
    transition: all 150ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    text-align: center;
    color: white;
    line-height: 50px;
    font-weight: 300;
    font-size: 20px;
  }

  .file-upload-container:hover {
    cursor: pointer;
    background: #3949ab;
  }

  .thumbnail img {
    height: 370px;
    width: 370px;
  }

  #amount {
    font-size: 50px;
  }

</style>
