import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit{

  items: any;
  total_count: number = 0;
  page_atual: number = 1;
  nameDev: any = 'hungaro';

  constructor(
    private service: HomeService
  ){}

  ngOnInit() {
    this.getDevs(this.nameDev)
  }

  pagination(total:number){
    return Math.ceil(total/30);
  }

  nextPage(){
    if(this.page_atual < this.pagination(this.total_count)){
      this.page_atual = this.page_atual + 1
      this.getDevs(this.nameDev, this.page_atual)
    }
    return
  }

  previoustPage(){
    if(this.page_atual > 1){
      this.page_atual = this.page_atual - 1
      this.getDevs(this.nameDev, this.page_atual)
    }
    return
  }

  getDevs(name: any, page?: number) {
    console.log(page)

    let url = `https://api.github.com/search/users?q=${name}&page=${page}`;
    this.service.sendGetRequest(url).subscribe( res => {
      this.items = res.items;
      this.total_count = res.total_count;

    })
  }

}
