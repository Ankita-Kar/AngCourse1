import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';
@Component({

  //component idetifier
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  

  title = 'AngCourse';

  //we want to access/send this variable from/to the post component which is the child of the app component
  //for that we have to share this to the post component
  parentMessage:string = "message from parent component (changed)"

  message!:string;


  fromChildOutput!:string;

  //here is where we catch the variable coming from the child component i.e. the post component.
  @ViewChild(PostComponent) childComp: any;

  constructor(){
    console.log(this.childComp);
    
  }

  ngAfterViewInit(): void {
      console.log(this.childComp);

      //basically we set the value of the message variable with what the child sent us and we stored via viewchild.
      this.message = this.childComp.childMessage;
      
  }

  recieveMessage($event: any){
        this.fromChildOutput = $event
        //when the event is triggered in the child component, the recieveMessage() in the parnet component is called with the emmitted $event in it.
        // then the data in $event is assigned to fromChildOutput and can be accessed further.
        //cue to app.component.html
  }

}
