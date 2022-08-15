import { core } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './components/core/core.component';
import { ReplaceTextComponent } from './components/replace-text/replace-text.component';

const routes: Routes = [
  {path:'',redirectTo:'core-info',pathMatch:'full'},
  {path:'core-info',component:CoreComponent},
  {path:'replace-text',component:ReplaceTextComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
