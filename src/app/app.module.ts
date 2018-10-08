import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule, CardModule, InputTextModule, PasswordModule, BlockUIModule, ProgressSpinnerModule, MessagesModule, MessageModule, MegaMenuModule, SidebarModule, OverlayPanelModule, MenuModule, MenubarModule, TieredMenuModule, PanelMenuModule, ToolbarModule, ScrollPanelModule } from 'primeng/primeng';
import { LoginService } from './_service/login.service';
import { PagesComponent } from './pages/pages.component';
import { AuthGuard } from './_guard/auth.guard';
import { PassToPagesGuard } from './_guard/pass-to-pages.guard';
import { PrivilegeGuard } from './_guard/privilege.guard';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    BlockUIModule,
    ProgressSpinnerModule,
    MessagesModule,
    MessageModule,
    MegaMenuModule,
    SidebarModule,
    OverlayPanelModule,
    MenuModule,
    MenubarModule,
    TieredMenuModule,
    PanelMenuModule,
    ToolbarModule,
    ScrollPanelModule
  ],
  providers: [
    AuthGuard,
    PassToPagesGuard,
    PrivilegeGuard,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
