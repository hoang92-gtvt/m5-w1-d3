import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {
  public name: String ='';
  public pass: String ='';
  public roles:Array<String>=["Admin","User", "Customer"];
  public role :String ='';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.name);
  }

  public selectRole(event:any){
    console.log(event);
    this.role = event;

  }
  public selectRole2(event:Event){
    console.log((event.target as HTMLInputElement).value);

  }

}
