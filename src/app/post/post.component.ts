import { Component, OnInit, Input } from '@angular/core';

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

  @Input()
  fromParent!: string;
  //it is marked with the ! (exclamation mark), indicating that it is guaranteed to be initialized. 
  //This is typically used when you know the property will always have a value and want to prevent TypeScript from complaining about possible null or undefined values.
  

  //the @Input opens the gate of this component which is able to catch the variable from the app component i.e. string intrpolation can be used successfully now.

  parentPostMessage:string = "message from parent post component"
  
  childMessage:string = "from child post component"
  
  constructor(){}

  ngOnInit(): void {
      
  }

}

//ngOnInit() is a callback lifecycle method that gets invoked after the particular component gets fully initialized inisde the DOM (fully loaded inside the browser)