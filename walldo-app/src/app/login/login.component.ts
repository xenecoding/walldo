import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

	user: string = ""
	pass: string = ""
	error: boolean = false

	constructor(
		private Router: Router
	) { }

	ngOnInit(): void {
	}

	login() {
		if (this.user == "" || this.pass == "") {
			this.error = true
		} else {
			if (this.user == "admin" && this.pass == "1234") {
				this.Router.navigateByUrl("panel")
				this.error = false
			} else {
				this.error = true

			}
		}
		
		
	}

}
