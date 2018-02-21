<template>
  
		<header class="xs-header-height xs-menu-style-transparent xs-menu-style-border fundpress-header-main-version color-navy-blue">
			<div class="container">
				<nav class="xs-menus fundpress-menu">
					<div class="nav-header">
						<div class="nav-toggle"></div>
						<a class="nav-brand nav-logo" href="index-2.html">
							<img src="assets/images/logo.png" alt="">
						</a>
					</div><!-- . END -->
					<div class="nav-menus-wrapper">
						<div class="xs-logo-wraper">
							<a class="nav-brand xs-logo fundpress-logo-v1" href="index-2.html">
								<img src="assets/images/logo.png" alt="">
							</a>
						</div>
						<ul class="nav-menu">
							<li><a class="nav-link"><router-link to="/">Home</router-link></a></li>
							<li><a class="nav-link"><router-link to="/about">About</router-link></a></li>
							<li><a class="nav-link"><router-link to="/blog">Blog</router-link></a></li>
							<li><a class="nav-link"><router-link to="/contact">Contact</router-link></a></li>
						</ul>
						<div class="xs-navs-button">
							<ul class="xs-icon-with-text fundpress-icon-menu">
								<li><a href="#" data-toggle="modal" data-target=".bd-example-modal-lg"><i class="fa fa-unlock-alt color-green"></i>Log In</a></li>
								<li><a class="nav-link"><router-link to="/add">Start Campaign</router-link></a></li>
							</ul>
						</div>
					</div><!-- .nav-menus-wrapper END -->
				</nav><!-- .xs-menus .fundpress-menu END -->
			</div>
            <div class="modal xs-modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="fundpress-tab-nav-v5">
						<ul class="nav nav-tabs" role="tablist">
							<li class="nav-item">
								<a class="nav-link active" href="#login" role="tab" data-toggle="tab"><router-link to="/login">Login</router-link>
									
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#signup" role="tab" data-toggle="tab"><router-link to="/register">SignUp</router-link>
									
								</a>
							</li>
						</ul>
					</div><!-- fundpress-tab-nav-v3-->
					<!-- Tab panes -->
					<div class="tab-content">
						<div role="tabpanel" class="tab-pane fadeInRights show fade in active" id="login">
							<form action="#" method="POST" id="xs-login-form">
								<div class="xs-input-group-v2">
									<i class="icon icon-profile-male"></i>
									<input type="text" name="name" id="xs_user_login_name" class="xs-input-control" placeholder="Enter your username">
								</div>
								<div class="xs-input-group-v2">
									<i class="icon icon-key2"></i>
									<input type="password" name="name" id="xs_login_password" class="xs-input-control" placeholder="Enter your password">
								</div>
								<div class="xs-submit-wraper xs-mb-20">
									<input type="submit" name="submit" value="login now" id="xs_contact_get_action" class="btn btn-warning btn-block">
								</div>
								<p class="xs-mb-20">or</p>
								<div class="xs-submit-wraper xs-mb-20">
									<input type="submit" name="submit" value="Login with facebook account" id="xs_facebook" class="btn btn-info btn-block">
								</div>
								<div class="xs-submit-wraper">
									<input type="submit" name="submit" value="Login with twitter account" id="xs_twitter" class="btn btn-success btn-block">
								</div>
							</form>
						</div><!-- tab-pane -->
						<div role="tabpanel" class="tab-pane fadeInRights fade" id="signup">
							<form action="#" method="POST" id="xs-register-form">
								<div class="xs-input-group-v2">
									<i class="icon icon-profile-male"></i>
									<input type="text" name="name" id="xs_register_name" class="xs-input-control" placeholder="Enter your username">
								</div>
								<div class="xs-input-group-v2">
									<i class="icon icon-envelope2"></i>
									<input type="email" name="email" id="xs_register_email" class="xs-input-control" placeholder="Enter your email">
								</div>
								<div class="xs-input-group-v2">
									<i class="icon icon-key2"></i>
									<input type="password" name="name" id="xs_register_password" class="xs-input-control" placeholder="Enter your password">
								</div>
								<div class="xs-input-group-v2">
									<i class="icon icon-key2"></i>
									<input type="password" name="name" id="xs_register_repeat_pass" class="xs-input-control" placeholder="Enter your confirm password">
								</div>
								<div class="xs-submit-wraper xs-mb-20">
									<input type="submit" name="submit" value="login now" id="xs_register_get_action" class="btn btn-warning btn-block">
								</div>
								<p class="xs-mb-20">or</p>
								<div class="xs-submit-wraper xs-mb-20">
									<input type="submit" name="submit" value="Login with facebook account" id="xs_register_facebook" class="btn btn-info btn-block">
								</div>
								<div class="xs-submit-wraper">
									<input type="submit" name="submit" value="Login with twitter account" id="xs_register_twitter" class="btn btn-success btn-block">
								</div>
							</form>
						</div><!-- tab-pane -->
					</div><!-- tab-content -->
				</div>
			</div>
		</div>
		</header>
		<!-- header version inner menu closed -->
        
</template>
