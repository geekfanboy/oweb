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
        console.log(this.route);
        console.log(this.route.snapshot['_routerState'].url);
        this.post = ret;
        console.log(ret);
        console.log(this.post._embedded['wp:term'][0]);
        this.meta.addTag({property: "og:title", content: this.post.title.rendered});
        this.meta.addTag({property: "og:type", content: "article"});
        this.meta.addTag({property: "og:url", content: "http://backup.onewatt.eu/post/" + params.id});
        this.meta.addTag({property: "og:image", content: this.post['_embedded']['wp:featuredmedia'][0].source_url});
        this.meta.addTag({property: "og:description", content: this.post.excerpt.rendered});
        this.meta.addTag({property: "fb:app_id", content: "2414651985449886"});      });
    });
  }

}
