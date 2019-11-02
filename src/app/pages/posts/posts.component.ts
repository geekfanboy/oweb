import { Component, OnInit } from '@angular/core';
import { WpserviceService } from '../../services/wpservice.service';
import { ActivatedRoute } from '@angular/router';

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


  constructor(private wp: WpserviceService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.current = params.page;
      console.log('test');
      this.wp.getPostsPage(this.current, this.maxpage).subscribe(ret => {
        this.posts$ = ret.body;
        console.log(ret);

        this.numpages = +(ret.headers.get('X-WP-TotalPages'));
        console.log(this.numpages);
        this.pages = Array(this.numpages).fill(0).map((x, i) => i + 1);
      });
    });
  }

  setwindow(win) {
    this.pagewindow = win;
    console.log(this.pagewindow)
  }


}
