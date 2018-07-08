


export default {
    props: ['percent'],

    template: `
		<section class="progress-bar">
         <div class="myProgress">
             <div class="myBar" :style="{'width': this.percent + '%'}"
                role="progressbar" :aria-valuenow="percent"
                aria-valuemin="0" aria-valuemax="100">
                {{percent}}% Read
            </div>
        </div>
		</section>
    `,
    created() {
        console.log('percent:', this.percent);
        
    }
 
}