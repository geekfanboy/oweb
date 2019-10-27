import { Component, OnInit } from '@angular/core';
import { WpserviceService } from '../../services/wpservice.service';

@Component({
  selector: 'ow-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: any[];
  pages: any[];
  current = 1;
  pagewindow = 1;
  maxpage = 5;
  numpages = 0;


  constructor(private wp: WpserviceService) { }

  ngOnInit() {


     this.current =1;

     this.wp.getPostsPage(this.current, 3).subscribe(ret =>{
      this.posts$ = ret.body;
      console.log(ret);

    //  this.headers = ret['headers'].keys().map(key =>
    //{key: ret.headers.get(key)});
      this.numpages = +(ret.headers.get('X-WP-TotalPages'));
      console.log(this.numpages);
      this.pages = Array(this.numpages).fill(0).map((x,i)=>i+1);
     // console.log(this.pages);
    });


   // this.posts$ = this.wp.getPostsPage(3, 3);
    //console.log(this.posts$);

  }

}
