<template>
<div>
	<!-- <div id="xs-preloader">
			<div class="preloader"></div>
	</div> -->

	
	<header class="xs-header-height xs-menu-style-transparent xs-menu-style-border fundpress-header-main-version color-navy-blue">
			<div class="container">
				<nav class="xs-menus fundpress-menu">
					
					<div class="nav-menus-wrapper">
						<div class="xs-logo-wraper">
							<a class="nav-brand xs-logo fundpress-logo-v1" href="/"><router-link to="/"></router-link>
								<img src="static/images/logo.png" alt="">
							</a>
						</div>
						<ul class="nav-menu">
							<li><a class=""><router-link to="/">Home</router-link></a></li>
							<li><a class=""><router-link to="/about">About</router-link></a></li>
							<li><a class=""><router-link to="/blog">Blog</router-link></a></li>
							<li><a class=""><router-link to="/contact">Contact</router-link></a></li>
						</ul>
						<!-- If User is Login  -->
						<div class="xs-navs-button" v-if='user' >
							<ul class="xs-icon-with-text fundpress-icon-menu">
								<li><a class=" xs-btn round-btn green-btn" href="/campaigns"><router-link to="/add">Start Campaign</router-link></a></li>
								<button class="btn btn-outline-success btn-lg header-btn dropdown-toggle userText" data-toggle="dropdown" id="btn-tran-login">{{user}}
									<span class="caret"></span></button>
									<ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
										<li role="presentation"><a role="menuitem" tabindex="-1" href="#"><router-link to="/add">Create</router-link></a></li>
										<li role="presentation"><a role="menuitem" tabindex="-1" href="#"><router-link to ="/campaigns">Manage</router-link></a></li>
										<li role="presentation"><a role="menuitem" tabindex="-1" href="#"><router-link to ="/settings">Settings</router-link></a></li>
										<li role="presentation" class="divider"></li>
										 <li role="presentation"><a role="menuitem" tabindex="-1" href="#" @click.prevent="logOutButton">Log out</a></li>
   									 </ul>
							</ul>
						</div>
						<!-- if No one is Logged In -->
						<div class="xs-navs-button" v-else>
							<ul class="xs-icon-with-text fundpress-icon-menu">
								<li><a class=" xs-btn round-btn green-btn" href="/campaigns"><router-link to="/campaigns">Start Campaign</router-link></a></li>
								<li><a href="#" data-toggle="modal" data-target=".bd-example-modal-lg"><i class="fa fa-unlock-alt color-green"></i>Log In</a></li>
								
								<!-- <li><a href="/campaigns" class=" xs-btn round-btn green-btn">Start Campaign</a></li> -->
							</ul>
						</div>
					</div><!-- .nav-menus-wrapper END -->
				</nav><!-- .xs-menus .fundpress-menu END -->
			</div>
	</header>	

	<div class="modal xs-modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="fundpress-tab-nav-v5">
					<ul class="nav nav-tabs" role="tablist">
						<li class="nav-item">
						<a class="nav-link active" href="#login" role="tab" data-toggle="tab">
							Login
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#signup" role="tab" data-toggle="tab">
							Signup
						</a>
					</li>
					</ul>
				</div><!-- fundpress-tab-nav-v3-->
				<!-- Tab panes -->
				<div class="tab-content">
					<div role="tabpanel" class="tab-pane fadeInRights show fade in active" id="login">
							<div class="text-center text-danger">
								{{ msg }}
								<i  v-show="loading" class="fa fa-spinner fa-spin"></i>
					</div>
						<form>
							<div class="xs-input-group-v2" :class="{'has-error': errors.has('username') }">
								<i class="icon icon-profile-male"></i>
								<input v-model="login.username" type="text" name="username" v-validate="'required|alpha_num|min:4'" id="xs_user_login_name" class="xs-input-control" placeholder="Enter your username">
							</div>
							<div class="xs-input-group-v2" :class="{'has-error': errors.has('password') }">
								<i class="icon icon-key2"></i>
								<input v-model="login.password" type="password" name="password" id="xs_login_password" v-validate="'required'" class="xs-input-control" placeholder="Enter your password">
							</div>
							<div class="xs-submit-wraper xs-mb-20">
								<button type="submit" name="submit" value="login now" id="xs_contact_get_action" class="btn btn-warning btn-block" @click.prevent="loginButton">Log in</button>
							</div>
							<!-- <p class="xs-mb-20">or</p>
							<div class="xs-submit-wraper xs-mb-20">
								<input type="submit" name="submit" value="Login with facebook account" id="xs_facebook" class="btn btn-info btn-block">
							</div>
							<div class="xs-submit-wraper">
								<input type="submit" name="submit" value="Login with twitter account" id="xs_twitter" class="btn btn-success btn-block">
							</div> -->
						</form>
					</div><!-- tab-pane -->
					<div role="tabpanel" class="tab-pane fadeInRights fade" id="signup">
						<form action="#" method="POST" id="xs-register-form"  name="registerForm">
							<div class="xs-input-group-v2" :class="{'has-error': errors.has('fullname') }">
								<i class="icon icon-profile-male"></i>
								<input  v-model="register.fullname" type="text" name="fullname"  v-validate="'required|alpha_spaces'" id="xs_register_name" class="xs-input-control" placeholder="Enter your fullname">
									<p class="text-danger" v-show="errors.has('fullname')">{{ errors.first('fullname') }}</p>
							</div>
							<div class="xs-input-group-v2" :class="{'has-error': errors.has('username') }">
								<i class="icon icon-profile-male"></i>
								<input  v-model="register.username" type="text" name="username"  v-validate="'required|alpha_spaces'" id="xs_register_username" class="xs-input-control" placeholder="Enter your username">
									<p class="text-danger" v-show="errors.has('username')">{{ errors.first('username') }}</p>
							</div>
							<div class="xs-input-group-v2" :class="{'has-error': errors.has('email') }">
								<i class="icon icon-envelope2"></i>
								<input v-model="register.email" v-validate="'required|email'" type="email" name="email" id="xs_register_email" class="xs-input-control" placeholder="Enter your email">
									<p class="text-danger" v-show="errors.has('email')">{{ errors.first('email') }}</p>
							</div>
							<div class="xs-input-group-v2"  :class="{'has-error': errors.has('password') }" >
								<i class="icon icon-key2"></i>
								<input v-model="register.password" name="password" v-validate="'required|alpha_num|min:6'" type="password" id="xs_register_password" class="xs-input-control" placeholder="Enter your password">
									<p class="text-danger" v-show="errors.has('password')">{{ errors.first('password') }}</p>
							</div>
							<!-- <div class="xs-input-group-v2">
								<i class="icon icon-key2"></i>
								<input type="password" name="name" id="xs_register_repeat_pass" class="xs-input-control" placeholder="Enter your confirm password">
							</div> -->
							<div class="xs-submit-wraper xs-mb-20">
								<button type="submit" name="submit" value="sign up" id="xs_register_get_action" class="btn btn-warning btn-block" v-on:click="signUpButton()">Sign Up</button>
							</div>
							<!-- <p class="xs-mb-20">or</p>
							<div class="xs-submit-wraper xs-mb-20">
								<input type="submit" name="submit" value="Login with facebook account" id="xs_register_facebook" class="btn btn-info btn-block">
							</div>
							<div class="xs-submit-wraper">
								<input type="submit" name="submit" value="Login with twitter account" id="xs_register_twitter" class="btn btn-success btn-block">
							</div> -->
						</form>
					</div><!-- tab-pane -->
				</div><!-- tab-content -->
			</div>
		</div>
	</div>

	<!-- header version inner menu closed -->
</div>	
</template>

<script>

	export default{
		props: ["username"],
		name: 'Hello',
		data(){
			return{
				user : "",
				active : {
					id:null
				},
				msg: '',
			
				loading:false,
				api: 'https://onepercent-crowdfund.herokuapp.com/users/authenticate',
				login:{
					username:'',
					password:''
				},
				register:{
					fullname: '',
					username: '',
					email: '',
					password: '',
					// cpassword: '',
				
				}
			}
		},
		methods:{
	
			loginButton() {
				console.log('AFTER: ' + JSON.stringify(this.login));
				this.loading = true;
				this.axios.post(this.api, {
				username: this.login.username,
				password: this.login.password,
				}).then((response) => {
					let token = response.data.token;
					console.log(token);
					console.log(response.data);
					if (token) {
						localStorage.setItem('token',token);
						localStorage.setItem('username',response.data.user.username);
						localStorage.setItem('id', response.data.user._id);

						// Event.$emit('login', response.data.user);
						// Event.$emit('id', response.data.user._id);
						localStorage.setItem('loginuser', JSON.stringify(response.data.user));
					
						//  var data = JSON.parse(localStorage.getItem('loginuser'));
						//  data.username
						 

						// this.$store.state.profile.username = response.data.user.username;
						// this.$store.state.profile.email = response.data.user.email;
						// this.$store.state.profile.name = response.data.user.fullname;
						// this.$store.state.profile.id = response.data.user._id;



						this.login.username = '';
						this.login.password = '';
						console.log("username : " + response.data.user.username);
						this.loading = false;
						this.msg = "login successfully";
						setTimeout(function(){
							window.location.reload(true);
						}, 3000);				
					}
					else {

						this.msg = "wrong username or password";
						this.login.username = '';
						this.login.password = '';
					}
				})
				.catch(function (error) {
					console.log(error);
				});
			},

			signUpButton(){
				console.log('AFTER: ' + JSON.stringify(this.register));
				this.axios.post('https://onepercent-crowdfund.herokuapp.com/users/', {
				username: this.register.username,
				fullname: this.register.fullname,
				email:	this.register.email,
				password: this.register.password,
				}).then((response) => {
					let token = response.data.token;
					let code = response.data.responseCode;
					console.log(token);
					  console.log('code code', response.data.responseCode);
					  if(code === '00') {
						  console.log(token);
						  localStorage.setItem('token', token);
						  this.register.fullname = '';
						  this.register.username = '';
						  this.register.email    = '';
						  this.register.password = '';

						this.$router.push('/');
					
					  }
					  else if (code === '02') {
						  this.msg = 'User already Exist';
					  }
					  else {
						  console.log(response.data);
						 	this.register.username = '';
							this.register.fullname = '';
							this.register.email = '';
							this.register.password = '';

							this.msg = '';
					  }
				}).catch(function (error) {
					console.log(error);
				});	
			},
			logOutButton(){
				alert("It worked ooo!!!!");
				localStorage.clear();
				this.msg="you are loggedOut";
				setTimeout(function(){
					window.location.reload(true);
				}, 3000);
				 
			}
			
		},
		mounted() {
			console.log('BEFORE: ' + JSON.stringify(this.login));
			// console.log('BEFORE: ' + JSON.stringify(this.register));
			if (!this.user) {
		console.log('no user', this.user);
	}
    this.active.id = localStorage.getItem("id");
    Event.$on("login", $event => {
      // login event
      this.loggedIn = true;
      // this.user = $event.username;
      this.active.id = $event._id;
        // console.log('id', $event._id);
      //   console.log($event.phone)
      this.user = localStorage.getItem("username");
      // this.active.id = localStorage.getItem('id');
    });

    Event.$on("loggedout", () => {
      // logout event
      this.user = '';
	});

	Event.$on("id", () => {
      // logout event
      this.active.id = $event._id;
    });

    this.loading = false;
  },

  created() {
    let token = localStorage.getItem("token");
    this.user = localStorage.getItem("username");

    if (typeof token !== "undefined") {
      this.axios
        .get(this.api, {
          headers: {
            "x-access-token": token
          }
        })
        .then(response => {
          console.log(response.data);
          this.user = localStorage.getItem("username");
          console.log("user is", this.user);
          // console.log('local username', localStorage.getItem(username));
        });
    }
  },

  beforeCreate() {
    this.user = localStorage.getItem("username");
  }
			
};

</script>	
