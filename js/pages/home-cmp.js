export default {
	template: `
		<section class="home">

			<div class="email">
				<h2><router-link to="/email"> Meet your new Email inbox </router-link></h2>
				<p> New customizable tabs put you back in control so that you can see what’s new at a glance and decide which emails you want to read and when. </p>
				<router-link to="/email"><img src="img/emails.jpg"></router-link>
			</div>

			<div class="notes">
				<h2><router-link to="/notes"> New place to save your thoughts </router-link></h2>
				<p> Capture what’s on your mind. Add notes, lists, photos, and audio to Keep. Everything you add to Keep syncs across your devices so your important stuff is always with you. </p>
				<router-link to="/notes"><img src="img/notes.png"></router-link>
			</div>

			<div class="more">
				<h2> More Apps coming soon </h2>
				<p> Stay tuned to discovered new apps... </p>
				<img src="img/more.png">
			</div>

		</section>
	`,
}
