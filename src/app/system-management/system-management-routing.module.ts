import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

	{
		path: 'attendance',
		loadChildren: () => import('./attendance/attendance.module').then(m => m.AttendanceModule),
	},
	{
		path: 'stationery',
		loadChildren: () => import('./stationery/stationery.module').then(m => m.StationeryModule),
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemManagementRoutingModule { }
