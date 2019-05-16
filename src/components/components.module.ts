import { NgModule } from '@angular/core';
import { FilterComponent } from './filter/filter';
import { TrainerItemComponent } from './trainer-item/trainer-item';
import { PopoverActionComponent } from './popover-action/popover-action';

@NgModule({
	declarations: [FilterComponent,
    TrainerItemComponent,PopoverActionComponent],
	imports: [],
	exports: [FilterComponent, TrainerItemComponent,PopoverActionComponent]
})
export class ComponentsModule {}
