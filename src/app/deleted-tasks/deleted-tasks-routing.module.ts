import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletedTasksPage } from './deleted-tasks.page';

const routes: Routes = [
  {
    path: '',
    component: DeletedTasksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletedTasksPageRoutingModule {}
