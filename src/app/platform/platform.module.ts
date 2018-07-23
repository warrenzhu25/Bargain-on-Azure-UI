import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
  ],
  imports: [
    MatTabsModule,
    FlexLayoutModule,
  ],
  exports: [
    MatTabsModule,
    FlexLayoutModule,
  ]
})
export class PlatformModule { }
