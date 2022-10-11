import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from '../user/user-list/user-list.component';
import { UserDetailComponent } from '../user/user-detail/user-detail.component';

const routes: Routes = [

  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path:'user-detail/:id',
    component:UserDetailComponent

  },

];

export const UserRoutingModule = RouterModule.forChild(routes);

