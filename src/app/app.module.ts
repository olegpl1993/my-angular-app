import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './header/menu/menu.component';
import { LogoComponent } from './shared/logo/logo.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LogoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutComponent,
    ContactsComponent,
    MainComponent,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FooterComponent,
    MenuComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
