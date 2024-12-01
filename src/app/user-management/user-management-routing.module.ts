import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: 'student', 
    loadChildren: () => import('./student//student.module').then(m => m.StudentModule),
  },
  { 
    path: 'teacher', 
    loadChildren: () => import('./teacher//teacher.module').then(m => m.TeacherModule),
  },
  { 
    path: 'principal', 
    loadChildren: () => import('./principal//principal.module').then(m => m.PrincipalModule),
  },
  { 
    path: 'counsellor', 
    loadChildren: () => import('./counsellor//counsellor.module').then(m => m.CounsellorModule),
  },
  { 
    path: 'finance', 
    loadChildren: () => import('./finance-manager//finance-manager.module').then(m => m.FinanceManagerModule),
  },
  { 
    path: 'transport', 
    loadChildren: () => import('./transport-manager//transport-manager.module').then(m => m.TransportManagerModule),
    
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }