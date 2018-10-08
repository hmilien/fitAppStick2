import { NgModule } from '@angular/core';
import { FilterComponent } from './filter/filter';
import { TrainerItemComponent } from './trainer-item/trainer-item';
@NgModule({
	declarations: [FilterComponent,
    TrainerItemComponent],
	imports: [],
	exports: [FilterComponent, TrainerItemComponent]
})
export class ComponentsModule {}
