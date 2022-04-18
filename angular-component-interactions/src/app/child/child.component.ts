import { Component, OnInit , Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() 
  inputFromParent : string = "";
  
  @Output()
  buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  buttonSayHello(){
    this.buttonClicked.emit("Hello from child component.");
  }

}
