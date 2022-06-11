import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletedTasksPageRoutingModule } from './deleted-tasks-routing.module';

import { DeletedTasksPage } from './deleted-tasks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletedTasksPageRoutingModule
  ],
  declarations: [DeletedTasksPage]
})
export class DeletedTasksPageModule {}
