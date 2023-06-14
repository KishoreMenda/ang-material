import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading: Boolean = false;

  ngOnInit(): void {
    
  }

  constructor(private router: Router){

  }
  loginaction() {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2000);
  }

}
