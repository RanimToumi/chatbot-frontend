import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ChildrenOutletContexts, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { AboutComponent } from './about/about.component';
import { PatientService } from './services/Patient/patient.service';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    SigninComponent,
    NavbarComponent,
    SignupComponent,
    ChatbotComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,


  ],

  providers: [
    ChildrenOutletContexts,
    PatientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
