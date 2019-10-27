import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WpserviceService {

  url = 'https://www.onewatt.eu';
  constructor(private http: HttpClient) { }

  getPostsPage(pagenum, perpage): any {
    return this.http.get<any[]>(this.url + '/wp-json/wp/v2/posts?_embed', {
      params: {
        per_page: perpage,
        page: pagenum
      },
      observe: 'response'
    });
  }

  getPost(id): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/wp-json/wp/v2/posts/' + id +'?_embed', {

    });
  }

}
