import { eventBus, EVENT_EMAIL_DELETED } from '../../../services/eventbus-service.js'
import firstInitial from '../../email/cmps/email-first-initial-cmp.js'

export default {
	props: ['email'],

	template: `
		<section class="email-preview" :class="[isRead? 'read' : '']">
			<span class="from">{{email.from.name}}</span>  

			<span class="content">
				{{email.subject}} 
				<span class="body">
					{{body}}
				</span>
			</span>
			
			<span class="sent-at">
				{{sentAt}}
			</span>
			<ul class="action">
				<li @click.stop="deleteEmail(email.id)" title="Delete Email"><i class="fas fa-trash fa-lg"></i></li>
				<li @click.stop="toggleRead(email.id, !isRead)"><i :class="isRead? 'fa-envelope' :  'fa-envelope-open'" class="fas fa-lg" :title="title"></i></li>
			</ul>
			<first-initial :email="email"></first-initial>
		</section>
    
    `,
	data() {
		return {
			
		}
	},

	methods: {
		deleteEmail(id) {
			eventBus.$emit(EVENT_EMAIL_DELETED, id)
		},
		toggleRead(id, isRead) {
			this.$emit('toggle-read', id, isRead)
		}
	},
	computed: {
		isRead() {
			return this.email.isRead
		},
		body() {
			if (this.email.body.length > 400) {

				return ' - ' + this.email.body.substr(0, 400)
			}
			else return ' - ' + this.email.body
		},
		sentAt() {
			let currDate = moment(Date.now())
			let emailDate = moment(this.email.sentAt)

			if (currDate.diff(emailDate, 'days') === 0) {
				return moment(emailDate).format('LT')
			} else if (currDate.diff(emailDate, 'years') === 0) {
				return moment(emailDate).format('MMM, D')
			} else {
				return moment(emailDate).format('l')
			}
		},
		title() {
			if( this.isRead ) return 'Mark as unread'
			else return 'Mark as read'
		},
		
	},
	components: {
		firstInitial
	}
}