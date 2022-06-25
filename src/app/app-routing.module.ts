import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscolasFrmComponent } from './escolas/escolas-frm/escolas-frm.component';
import { EscolasComponent } from './escolas/escolas.component';
import { PerguntasFrmComponent } from './perguntas/perguntas-frm/perguntas-frm.component';
import { PerguntasComponent } from './perguntas/perguntas.component';
import { TurmasFrmComponent } from './turmas/turmas-frm/turmas-frm.component';
import { TurmasComponent } from './turmas/turmas.component';
import { UsuariosFrmComponent } from './usuarios/usuarios-frm/usuarios-frm.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const routes: Routes = [
    {path: 'escolas', component: EscolasComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'perguntas', component: PerguntasComponent}, 
    {path: 'turmas', component: TurmasComponent},
    {path: 'escolas-formulario', component: EscolasFrmComponent},
    {path: 'usuarios-formulario', component: UsuariosFrmComponent},
    {path: 'perguntas-formulario', component: PerguntasFrmComponent}, 
    {path: 'turmas-formulario', component: TurmasFrmComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }