import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

//we have to implement the OnInit interface to this class
//lifecycle hook
export class PostComponent implements OnInit{

  //a variable is created
  title: string = "List of Posts"
  //to display this variable inside the html file we will have to create a ts scope inside the html

  messagePost:string  = "Message Post"
  //lets say we want to have this variable inside the app component
  //how will we do that?
  //we can;t use string interpolationin that case
  //it is marked with the ! (exclamation mark), indicating that it is guaranteed to be initialized. 
  //This is typically used when you know the property will always have a value and want to prevent TypeScript from complaining about possible null or undefined values.
  

  //the @Input opens the gate of this component which is able to catch the variable from the app component i.e. string intrpolation can be used successfully now.

  parentPostMessage:string = "message from parent post component"
  
  childMessage:string = "from child post component"
  
  outputChildMessage:string = "message from child part 2"
  
  @Input()
  fromParent!: string;

  @Output()
  messageEvent = new EventEmitter<string>()
  //now what we want is to emit the message stored in outputChildMessage via this eventemmiter on a click


  constructor(){}

  ngOnInit(): void {
      
  }

  sendMessage(){
    // console.log('click');

    // we need to emit the message stored in outputChildMessage and emit it when messageEvent occurs.
    this.messageEvent.emit(this.outputChildMessage);
    //we then need to capture this event in parent component.
    
  }

}

//ngOnInit() is a callback lifecycle method that gets invoked after the particular component gets fully initialized inisde the DOM (fully loaded inside the browser)