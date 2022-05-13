import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'backend/services/signup/signup.service';

@Component({
  selector: 'app-sginup',
  templateUrl: './sginup.component.html',
  styleUrls: ['./sginup.component.css']
})
export class SginupComponent implements OnInit {
signupForm!:FormGroup
  constructor(private fb: FormBuilder, private signupService:SignupService, private router : Router) { }

  ngOnInit(): void {

    this.signupForm = this.fb.group({
      firstName :[''],
      lastName :[''],
      email :[''],
      password :[''],
    });
  }


  signup(x:any){
this.signupService.signup(this.signupForm.value).subscribe(
  (data)=>{
    console.log('here into signup', data.message);
    
  }
)
this.router.navigate(['signin'])
  }
}
