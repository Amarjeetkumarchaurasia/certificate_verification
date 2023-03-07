import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditCertificateComponent } from './add-edit-certificate/add-edit-certificate.component';
import { CertificateTableComponent } from './certificate-table/certificate-table.component';

const routes: Routes = [
  {path:'', component:AddEditCertificateComponent},
  {path:'veryfication', component:CertificateTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
