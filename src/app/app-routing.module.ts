import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {QuestListComponent} from './quest-list/quest-list.component';
import {AdminInterfaceComponent} from './admin-interface/admin-interface.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';

const routes: Routes = [
  { path: '', component: QuestListComponent },
  { path: 'admin', component: AdminInterfaceComponent },
  { path: 'login', component: AdminLoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
