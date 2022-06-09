import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailClientComponent } from './pages/book-detail-client/book-detail-client.component';
import { BookDetailAdminComponent } from './pages/admin/book-detail-admin/book-detail-admin.component';
import { BookFormAdminComponent } from './pages/admin/book-form-admin/book-form-admin.component';
import { BookListAdminComponent } from './pages/admin/book-list-admin/book-list-admin.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    BookDetailClientComponent,
    BookDetailAdminComponent,
    BookFormAdminComponent,
    BookListAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
