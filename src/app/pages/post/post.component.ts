import { Component, OnInit } from '@angular/core';
import { WpserviceService } from '../../services/wpservice.service';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'ow-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post:any;
  constructor(private wp: WpserviceService, private route:ActivatedRoute, private meta: Meta) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.wp.getPost(params.id).subscribe(ret =>{
        this.post = ret;
        console.log(ret);
        console.log(this.post._embedded['wp:term'][0]);
        this.meta.addTag({name: 'og:title', content: this.post.title.rendered});
        this.meta.addTag({name: 'og:type', content: "website"});
      });
    });
  }

}
