import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { List } from './heroes/list/list';
import { HeroesFilterPipe } from './heroes/heroes-filter-pipe';
import { OperasBas } from './formulario/operas-bas/operas-bas';
import { Distancia } from './formulario/distancia/distancia';
import { Figuras } from './formulario/figuras/figuras';
import { Palindromo } from './formulario/palindromo/palindromo';
import { UsuarioContrasena } from './formulario/usuario-contrasena/usuario-contrasena';
import { TrianguloPuntos } from './formulario/triangulo-puntos/triangulo-puntos';

@NgModule({
  declarations: [
    App,
    List,
    HeroesFilterPipe,
    OperasBas,
    Distancia,
    Figuras,
    Palindromo,
    UsuarioContrasena,
    TrianguloPuntos,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
