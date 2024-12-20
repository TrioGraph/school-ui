import { Component } from '@angular/core';

import { AuthService } from './core/services/auth/auth.service';
import { LoadingService } from './core/services/utils/loading.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	isLoggedIn$!: Observable<boolean>;
	
	showLoader: boolean = false;

    title = 'app';

  constructor(
  	private authService: AuthService,
  	private loadingService: LoadingService
  	) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;

    console.log("[AppComponent] showLoader: " + this.showLoader);

    this.loadingService.status.subscribe((val: boolean) => {
       this.showLoader = val;
    });
  }

}
