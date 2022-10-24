import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from '../user/user-list/user-list.component';
import { UserDetailComponent } from '../user/user-detail/user-detail.component';
import { ParamsActivate } from '../core/guards/params.activate';

const routes: Routes = [

  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path:'user-detail/:id',
    component:UserDetailComponent,
    canActivate: [ParamsActivate],
    data: {
      paramsActivate: ['id'],
      paramsActivateRedirectUrl:'/user-list'
    }

  },

];

export const UserRoutingModule = RouterModule.forChild(routes);

