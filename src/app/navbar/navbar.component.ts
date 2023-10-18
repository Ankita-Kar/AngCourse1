// importing all the angular component features here

import { Component } from '@angular/core';

// decorator that declares the following the class is an angular component
@Component({
  
  //similar to css selectors
  //here is used to give a name for us to identify this component
  selector: 'app-navbar',

  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

//first create the class which will contain the logic
//then we need to export thisclass
export class NavbarComponent {

}
