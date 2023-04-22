import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { PatientService } from '../services/Patient/patient.service';
import { AuthService } from '../services/Auth/auth.service';
import { AuthResult } from '../services/Auth/auth';
import { Patient } from '../services/Patient/Patient';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  patient:any={}
  valid=false;
  private loggedPatient : Patient = {
    id:'',firstname: '', lastname: '', email: '', password: '', confirm_Password: '',
  };


  constructor(private patientService: PatientService, private authService:AuthService,private router: Router) {

   }

  ngOnInit(): void {
  }


  public error: boolean = false;


  authentificate(addForm: NgForm){
    console.log(addForm);

    this.authService.login(addForm.value).subscribe(response=>{

      this.router.navigateByUrl('/admin')


    },(error)=>{
      console.log(error);

    });
    // for (let u of patients){
    //   if (this.patient.email==u.email && this.patient.password==u.password  ) {this.valid=true;this.loggedPatient=u}

    // }
    // if(this.valid==true){;this.router.navigate(['/chat']); console.log(this.loggedPatient)}
    // else(this.error=true)
}
}

