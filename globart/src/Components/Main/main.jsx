import React from 'react'
import ReactDOM from 'react-dom'


class Main extends React.Component {
	render() {
		return (
			<div id="page-wrapper">

		<div id="header-wrapper">
			<div id="header" class="container">


				<h1 id="logo"><a href="#">Globart</a></h1>


				<nav id="nav">
					<ul>
						<li>
							<a href="#">Vendas</a>
						</li>
						{/* < <li><a href="left-sidebar.html">Left Sidebar</a></li> */}
						<li class="break">
							<a href="#">Compras</a>
						</li>
						 {/* <li><a href="no-sidebar.html">Compras</a></li> */}
					</ul>
				</nav>
			</div>

			<section id="hero" class="container">
				<p>Designed and built on <strong>skel</strong> by AJ. Released for free under
					<br /> the Creative Commons Attribution 3.0 license.</p>
				<ul class="actions">
					<li><a href="#" class="button">Get this party started</a></li>
				</ul>
			</section>

		</div>

		<div class="wrapper">
			<div class="container">
				<div id="root"></div>
				<div class="row">
					<section class="6u 12u(narrower) feature">
						<div class="image-wrapper first">
							<a href="#" class="image featured first"><img src="images/pic01.jpg" alt="" /></a>
						</div>
						<header>
							<h2>Semper magna neque vel<br /> adipiscing curabitur</h2>
						</header>
						<p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel sem sit dolor neque semper magna. Lorem
							ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel sem sit.</p>
						<ul class="actions">
							<li><a href="#" class="button">Elevate my awareness</a></li>
						</ul>
					</section>
					<section class="6u 12u(narrower) feature">
						<div class="image-wrapper">
							<a href="#" class="image featured"><img src="images/pic02.jpg" alt="" /></a>
						</div>
						<header>
							<h2>Amet lorem ipsum dolor<br /> sit consequat magna</h2>
						</header>
						<p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel sem sit dolor neque semper magna. Lorem
							ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel sem sit.</p>
						<ul class="actions">
							<li><a href="#" class="button">Elevate my awareness</a></li>
						</ul>
					</section>
				</div>
			</div>
		</div>

		<div class="wrapper">
			<section class="container">
				<header class="major">
					<h2>Sed magna consequat lorem curabitur tempus</h2>
					<p>Elit aliquam vulputate egestas euismod nunc semper vehicula lorem blandit</p>
				</header>
				<div class="row features">
					<section class="4u 12u(narrower) feature">
						<div class="image-wrapper first">
							<a href="#" class="image featured"><img src="images/pic03.jpg" alt="" /></a>
						</div>
						<p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel sem sit dolor neque semper magna lorem
							ipsum.
						</p>
					</section>
					<section class="4u 12u(narrower) feature">
						<div class="image-wrapper">
							<a href="#" class="image featured"><img src="images/pic04.jpg" alt="" /></a>
						</div>
						<p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel sem sit dolor neque semper magna lorem
							ipsum.
						</p>
					</section>
					<section class="4u 12u(narrower) feature">
						<div class="image-wrapper">
							<a href="#" class="image featured"><img src="images/pic05.jpg" alt="" /></a>
						</div>
						<p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel sem sit dolor neque semper magna lorem
							ipsum.
						</p>
					</section>
				</div>
				<ul class="actions major">
					<li><a href="#" class="button">Elevate my awareness</a></li>
				</ul>
			</section>
		</div>

		<div id="footer-wrapper">
			<div id="footer" class="container">
				<header class="major">
					<h2>Euismod aliquam vehicula lorem</h2>
					<p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel sem sit<br /> dolor neque semper magna
						lorem ipsum feugiat veroeros lorem ipsum dolore.</p>
				</header>
				<div class="row">
					<section class="12u">
						<form method="post" action="#">
							<div class="row 50%">
								<div class="6u 12u(mobile)">
									<input name="name" placeholder="Name" type="text" />
								</div>
								<div class="6u 12u(mobile)">
									<input name="email" placeholder="Email" type="text" />
								</div>
							</div>
							<div class="row 50%">
								<div class="12u">
									<textarea name="message" placeholder="Message"></textarea>
								</div>
							</div>
							<div class="row 50%">
								<div class="12u">
									<ul class="actions text-center">
										<li><input type="submit" value="Send Message" /></li>
										<li><input type="reset" value="Clear form" /></li>
									</ul>
								</div>
							</div>
						</form>
					</section>
					<section class="12u hide">
						<div class="row 0%">
							<ul class="divided icons 6u 12u(mobile)">
								<li class="icon fa-twitter"></li>
								<li class="icon fa-facebook"></li>
								<li class="icon fa-dribbble"></li>
							</ul>
							<ul class="divided icons 6u 12u(mobile)">
								<li class="icon fa-instagram"></li>
								<li class="icon fa-youtube"></li>
								<li class="icon fa-pinterest"></li>
							</ul>
						</div>
					</section>
				</div>
			</div>
			<div id="copyright" class="container">
				<ul class="menu">
					<li>&copy; Globart. All rights reserved.</li>
				</ul>
			</div>
		</div>

	</div>
			);
	}
}

export default Main;