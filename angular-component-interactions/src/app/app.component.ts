import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-component-interactions';
  messagefromParent:string = ""
  messagefromChild:string = "";

  displayChildMessage(childData:any){
      this.messagefromChild = childData;
  }

  displayParentMessage(){
    this.messagefromParent = "Hello from parent component."
  }

}
