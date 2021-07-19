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
  public comments:any;
  public posts :any;


  constructor(private serviceHttp: ServerHttpService) { }

  ngOnInit(): void {
    this.serviceHttp.getProfile().subscribe((data)=>{
      console.log('profile : '+ data);
      this.name = data.name;
      this.age = data.age;
    })

    this.serviceHttp.getPosts().subscribe((data)=>{
      console.log('post', data);
      this.posts= data;
    })

  }
  showComment(){
    this.serviceHttp.getComment().subscribe((data)=>{
      console.log('Comment'+ data.name)
    })
  }
  public addPost(){
    const newData ={title: 'testing', author: 'author testing'};
    this.serviceHttp.addPosts(newData).subscribe((data)=>{
      console.log('addPost', data);
      this.posts.push(data);
      //
    });
  }

}
