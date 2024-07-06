import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  items: any;

  constructor(
    private service: HomeService
  ){}

  getDevs(name: any) {
    let url = `https://api.github.com/search/users?q=${name}`;
    this.service.sendGetRequest(url).subscribe( res => {
      this.items = res.items
      console.log(this.items)
    })
  }

}
