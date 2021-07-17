import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
//  public name = new FormControl('');
public profileForm = new FormGroup({
  name :new FormControl(''),
  age :new FormControl('')
});

  constructor() { }

  ngOnInit(): void {
  }
  public updateName(){
    console.log("onfunction");
  }

  public onSubmit(){
    console.log("onSubmit");
  }


}
