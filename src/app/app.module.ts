import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscolasFrmComponent } from './escolas/escolas-frm/escolas-frm.component';
import { EscolasComponent } from './escolas/escolas.component';
import { PerguntasFrmComponent } from './perguntas/perguntas-frm/perguntas-frm.component';
import { PerguntasComponent } from './perguntas/perguntas.component';
import { TurmasFrmComponent } from './turmas/turmas-frm/turmas-frm.component';
import { TurmasComponent } from './turmas/turmas.component';
import { UsuariosFrmComponent } from './usuarios/usuarios-frm/usuarios-frm.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    EscolasComponent,
    PerguntasComponent,
    TurmasComponent,
    UsuariosComponent,
    UsuariosFrmComponent,
    TurmasFrmComponent,
    PerguntasFrmComponent,
    EscolasFrmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
