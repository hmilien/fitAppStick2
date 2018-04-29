import { Component, Input, Output} from '@angular/core';

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {

  	@Input() progress:number;
  	@Output() progressini:number;

  constructor() {

  }
  ngOnInit() {
		// Crear intervalo para el cuarto progressbar
		this.progressini = 0;
		let timer = setInterval (() => {
			this.progressini = this.progressini + 1;
			if (this.progressini >= this.progress){
				//console.log(this.progressini);
				// detener el intervalo
				clearInterval(timer);
			};
			return this.progressini;
		}, 15);
	}
}
