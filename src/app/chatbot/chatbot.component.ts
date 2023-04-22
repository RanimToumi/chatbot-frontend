
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../services/Chat/chat.service';


@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  public Message!: string;
  response: string = '';

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.GetResponse(this.Message)

  }

  public async GetResponse(message: string): Promise<void> {
    console.log("hi");
    this.chatService.chat(message).subscribe(

      (response:any) => {
        console.log("hi");
        this.response = response.choices[0].message.content;

      },
      (error) => {
        console.log(error);
      }
    );

  }
}



