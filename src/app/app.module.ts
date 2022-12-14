import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
//import { GoogleMapsModule } from '@angular/google-maps'
import { YouTubePlayerModule } from "@angular/youtube-player";


//Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AsideComponent } from './components/aside/aside.component';

const rutas: Routes = [
  { path: 'inicio', component: InicioComponent,  pathMatch: 'full'},
  { path: 'acerca', component: AcercaComponent,  pathMatch: 'full'},
  { path: 'servicios', component: ServiciosComponent,  pathMatch: 'full'},
  { path: 'testimonios', component: TestimoniosComponent,  pathMatch: 'full'},
  { path: 'contacto', component: ContactoComponent,  pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    AcercaComponent,
    ServiciosComponent,
    TestimoniosComponent,
    ContactoComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    YouTubePlayerModule,
    //GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
