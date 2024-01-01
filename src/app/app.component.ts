import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private backendUrl=environment.backendUrl;
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.http.get<any>(this.backendUrl+'product').subscribe(res=>{
      console.log(res);
    });
  }
  title = 'NewShop_Client';

}
