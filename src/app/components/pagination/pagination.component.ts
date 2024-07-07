import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent {

  @Input() page_atual: number = 1;
  @Input() total_count: number = 0;

  @Output() page = new EventEmitter<any>();


  pagination(total:number){
    return Math.ceil(total/30);
  }

  nextPage(){
    if(this.page_atual < this.pagination(this.total_count)){
      this.page_atual = this.page_atual + 1
      // this.getDevs(this.nameDev, this.page_atual)
      this.page.emit(this.page_atual)
    }
    return
  }

  previoustPage(){
    if(this.page_atual > 1){
      this.page_atual = this.page_atual - 1
      // this.getDevs(this.nameDev, this.page_atual)
      this.page.emit(this.page_atual)
    }
    return
  }

}
