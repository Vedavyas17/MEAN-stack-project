import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { Com1Component } from './vendor/mmboard/com1/com1.component';
import { Com2Component } from './vendor/mmboard/com2/com2.component';
import { Com3Component } from './vendor/mmboard/com3/com3.component';
import { Fi1Component } from './vendor/fiboard/fi1/fi1.component';
import { Fi2Component } from './vendor/fiboard/fi2/fi2.component';
import { Fi3Component } from './vendor/fiboard/fi3/fi3.component';
import { LoginModule } from './website/login/login.module';
import { Com4Component } from './vendor/mmboard/com4/com4.component';
import { EditvendorComponent } from './vendor/vendorboard/editvendor/editvendor.component';
import { Emp2Component } from './employee/empboard/emp2/emp2.component';
import { Emp3Component } from './employee/empboard/emp3/emp3.component';
import { Emp4Component } from './employee/empboard/emp4/emp4.component';
import { Emp5Component } from './employee/empboard/emp5/emp5.component';
import { VdetailsComponent } from './vendor/vendor/vdetails/vdetails.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full',
  },
  {
    path:'home',
    loadChildren:()=>
    import('./website/home/home.module').then((m)=>m.HomeModule),
  },
  {
    path:'irpa',
    loadChildren:()=>
    import('./website/irpa/irpa.module').then((m)=>m.IrpaModule),
    canActivate:[AuthGuard],
  },
  {
    path:'dataupload',
    loadChildren:()=>
    import('./website/dataupload/dataupload.module').then((m)=>m.DatauploadModule),
    canActivate:[AuthGuard],
  },
  {
    path:'login',
    loadChildren:()=>
    import('./website/login/login.module').then((m)=>LoginModule),
    canActivate:[AuthGuard],
  },
  {
    path:'products',
    loadChildren:()=>
    import('./website/products/products.module').then((m)=>m.ProductsModule),
  },
  {
    path:'signin',
    loadChildren:()=>
    import('./website/signin/signin.module').then((m)=>m.SigninModule),
    // canActivate:[AuthGuard],
  },
  {
    path:'start',
    loadChildren:()=>
    import('./website/start/start.module').then((m)=>m.StartModule),
    canActivate:[AuthGuard],
  },
  {
    path:'dashboard',
    loadChildren:()=>
    import('./website/dashboard/dashboard.module').then((m)=>m.DashboardModule),
    canActivate:[AuthGuard],
  },
  {
    path:'finance',
    loadChildren:()=>
    import('./website/finance/finance.module').then((m)=>m.FinanceModule),
    canActivate:[AuthGuard],
  },
  {
    path:'visual',
    loadChildren:()=>
    import('./website/visual/visual.module').then((m)=>m.VisualModule),
    canActivate:[AuthGuard],
  },
  {
    path:'file',
    loadChildren:()=>
    import('./website/file/file.module').then((m)=>m.FileModule),
    canActivate:[AuthGuard],
  },
  {
    path:'my',
    loadChildren:()=>
    import('./website/my/my.module').then((m)=>m.MyModule),
  },
  {
    path:'debit',
    loadChildren:()=>
    import('./website/debit/debit.module').then((m)=>m.DebitModule),
    canActivate:[AuthGuard],
  },
  {
    path:'credit',
    loadChildren:()=>
    import('./website/credit/credit.module').then((m)=>m.CreditModule),
    canActivate:[AuthGuard],
  },
  {
    path:'invoice',
    loadChildren:()=>
    import('./website/invoice/invoice.module').then((m)=>m.InvoiceModule),
    canActivate:[AuthGuard],
  },
  {
    path:'payage',
    loadChildren:()=>
    import('./website/payage/payage.module').then((m)=>m.PayageModule),
    canActivate:[AuthGuard],
  },
  {
    path:'vendor',
    loadChildren:()=>
    import('./vendor/vendor/vendor.module').then((m)=>m.VendorModule),
    // canActivate:[AuthGuard],
  },
  {
    path:'mmboard',
    loadChildren:()=>
    import('./vendor/mmboard/mmboard.module').then((m)=>m.MmboardModule),
    canActivate:[AuthGuard],
  },
  {
    path:'fiboard',
    loadChildren:()=>
    import('./vendor/fiboard/fiboard.module').then((m)=>m.FiboardModule),
    canActivate:[AuthGuard],
  },
  {
    path:'vendorboard',
    loadChildren:()=>
    import('./vendor/vendorboard/vendorboard.module').then((m)=>m.VendorboardModule),
    canActivate:[AuthGuard],
  },
  {
    path:'mmboard/com1',
    component:Com1Component,
    canActivate:[AuthGuard],
  },
  {
    path:'mmboard/com2',
    component:Com2Component,
    canActivate:[AuthGuard],
  },
  {
    path:'mmboard/com3',
    component:Com3Component,
    canActivate:[AuthGuard],
  },
  {
    path:'fiboard/fi1',
    component:Fi1Component,
    canActivate:[AuthGuard],
  },
  {
    path:'fiboard/fi2',
    component:Fi2Component,
    canActivate:[AuthGuard],
  },
  {
    path:'fiboard/fi3',
    component:Fi3Component,
    canActivate:[AuthGuard],
  },
  {
    path:'mmboard/com4',
    component:Com4Component,
    canActivate:[AuthGuard],
  },
  {
    path:'vendorboard/editvendor',
    component:EditvendorComponent
  },
  {
    path:'vendor/vdetails',
    component:VdetailsComponent
  },
  {
    path:'employee',
    loadChildren:()=>
    import('./employee/employee/employee.module').then((m)=>m.EmployeeModule),
  },
  {
    path:'empboard',
    loadChildren:()=>
    import('./employee/empboard/empboard.module').then((m)=>m.EmpboardModule),
    canActivate:[AuthGuard],
  },
  {
    path:'empboard/emp2',
    component:Emp2Component,
    canActivate:[AuthGuard],
  },
  {
    path:'empboard/emp3',
    component:Emp3Component,
    canActivate:[AuthGuard],
  },
  {
    path:'empboard/emp4',
    component:Emp4Component,
    canActivate:[AuthGuard],
  },
  {
    path:'empboard/emp5',
    component:Emp5Component,
    canActivate:[AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
