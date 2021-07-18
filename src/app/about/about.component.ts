import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public name :String ='' ;
  public age : number= 0;

  constructor(private serviceHttp: ServerHttpService) { }

  ngOnInit(): void {
    this.serviceHttp.getProfile().subscribe((data)=>{
      console.log('profile : '+ data.name)
    })

  }
  showComment(){
    this.serviceHttp.getComment().subscribe((data)=>{
      console.log('Comment'+ data.name)
    })
  }

}
