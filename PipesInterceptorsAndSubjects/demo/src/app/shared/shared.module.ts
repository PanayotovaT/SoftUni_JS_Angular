import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader.component';
import { GetPropPipe } from './get-prop.pipe';



@NgModule({
  declarations: [
    LoaderComponent,
    GetPropPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    GetPropPipe

  ]
})
export class SharedModule {

}
