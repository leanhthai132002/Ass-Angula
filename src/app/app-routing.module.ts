import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { BookDetailAdminComponent } from './pages/admin/book-detail-admin/book-detail-admin.component';
import { BookFormAdminComponent } from './pages/admin/book-form-admin/book-form-admin.component';
import { BookListAdminComponent } from './pages/admin/book-list-admin/book-list-admin.component';
import { BookDetailClientComponent } from './pages/book-detail-client/book-detail-client.component';


const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children:[
      {
        path:'books',
        children:[
          {
            path: ':id',
            component: BookDetailClientComponent
          },
        ] 
      }
    ]
  },

{
  path: 'admin',
  component: AdminLayoutComponent,
  children: [
    {
      path: 'products',
      children: [
        {
          path: '',
          component: BookListAdminComponent
        },
        {
          path: 'create',
          component: BookFormAdminComponent
        },
        {
          path: 'edit/:id',
          component: BookFormAdminComponent
        },
        {
          path: ':id',
          component: BookDetailAdminComponent
        },
      ]
    }
  ]
},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
