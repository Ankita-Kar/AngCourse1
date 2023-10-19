import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';
@Component({

  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'AngCourse';

  parentMessage:string = "message from parent component (changed)"

  message!:string;


  fromChildOutput!:string;

  @ViewChild(PostComponent) childComp: any;

  constructor(){
    console.log(this.childComp);
    
  }

  ngAfterViewInit(): void {
      console.log(this.childComp);

      this.message = this.childComp.childMessage;
      
  }

  recieveMessage($event: any){
        this.fromChildOutput = $event
  }

}
