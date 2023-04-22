import { Component, NgModule } from '@angular/core';
import {Router, RouterModule,Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BodyComponent } from './body/body.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes=[

{path:'' ,
component: BodyComponent
}
,{path:'footer' ,
component: FooterComponent
},
{path:'signin' ,
component: SigninComponent
}
,
{path:'signup' ,
component: SignupComponent
},
{path:'chat' ,
component: ChatbotComponent
}
,
{path:'about' ,
component: AboutComponent
}
];
@NgModule({

  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
