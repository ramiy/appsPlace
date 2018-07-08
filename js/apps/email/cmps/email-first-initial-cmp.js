


export default {
    props: ['email'],

    template: `
		<section class="first-initial" :style="styleObj">
            {{initial}}
		</section>
    `,
    created() {
        
    },
    data() {
        return {
            styleObj: {
				'background-color': this.email.color,
			}
          
        }
    },
    computed: {
        initial() {

			return this.email.from.name.slice(0, 1).toUpperCase()
		}

       
    }
 
}