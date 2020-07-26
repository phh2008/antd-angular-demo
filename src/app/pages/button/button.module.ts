import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button.component';
import {ButtonRoutingModule} from './button-routing.module';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';

@NgModule({
  imports: [CommonModule, ButtonRoutingModule, NzButtonModule, NzDropDownModule],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class ButtonModule {
}
