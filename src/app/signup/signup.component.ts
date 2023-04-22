import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit  } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Patient } from '../services/Patient/Patient';
import { PatientService } from '../services/Patient/patient.service';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public patient = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirm_Password: ''
  };
  public patientName = '';

  @ViewChild('signupForm')  signupForm!: NgForm;


  constructor(private patientService: PatientService ,private router: Router) {

  }

  ngOnInit(): void {
    this.patientService.getPatients()

  }

  async onAddPatient(addForm: NgForm): Promise<void> {


    try {


      // Cette ligne appelle la méthode addPatient du service patientService avec les valeurs du formulaire et convertit l'observable en promesse avec la méthode toPromise().
      const response = await this.patientService.addPatient(addForm.value).toPromise();
      console.log(response);

       // Stocke le nom du patient
       this.patientName = this.patient.firstname;

       // Redirige vers la page de signin avec le nom du patient en tant que paramètre
       this.router.navigate(['/signin']);

      // Cette ligne réinitialise le formulaire.
      addForm.reset();
    } catch (error) {
      // Cette ligne affiche une alerte avec le message d'erreur si une erreur s'est produite.
      alert(error);
      // Cette ligne réinitialise le formulaire.
      addForm.reset();
    }
  }

  public isPasswordMatch(): boolean {
    return this.patient && this.patient.password === this.patient.confirm_Password;
  }

  passwordMatchError = false;

  onConfirmPasswordBlur() {
    if (this.patient.password !== this.patient.confirm_Password) {
      this.passwordMatchError = true;
    } else {
      this.passwordMatchError = false;
    }
  }





}
