import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent implements OnInit{

  title: string = "List of Posts"

  messagePost:string  = "Message Post"
  
  parentPostMessage:string = "message from parent post component"
  
  childMessage:string = "from child post component"
  
  outputChildMessage:string = "message from child part 2"
  
  @Input()
  fromParent!: string;

  @Output()
  messageEvent = new EventEmitter<string>()

  constructor(){}

  ngOnInit(): void {
      
  }

  sendMessage(){
    // console.log('click');

    this.messageEvent.emit(this.outputChildMessage);
    
  }

}

//ngOnInit() is a callback lifecycle method that gets invoked after the particular component gets fully initialized inisde the DOM (fully loaded inside the browser)