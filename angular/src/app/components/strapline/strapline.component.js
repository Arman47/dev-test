'use strict';

class Strapline {
	constructor($interval){
		this.$interval = $interval
		this.line = 'Our average time from pickup to drop-off'
		this.lines = [
			"Our average time from pickup to drop-off",
			"Quicker than your commute",
			"So fast it'll blow your socks off",
			'"Slow and steady wins the race" - not someone from Repairly',
			'Recently compared to the Hadron Collider',
			'Repairly representative spotted in Bugatti Veyron, Feb 2016',
			'Usain Bolt, team leader at Repairly'
		]
	}

	$onInit() {
		this.$interval(() => {
			this.updateLine();
		}, 1000)
	}

	updateLine(){
		let lines_length = this.lines.length
		let custom_index = parseInt(Math.random() * lines_length)

		this.line = this.lines[custom_index]
	}

}

Strapline.$inject = ['$interval'];

export const strapline = {
	controller: Strapline,
	templateUrl: require('ngtemplate!./strapline.html')
}
