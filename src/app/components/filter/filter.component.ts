import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit{

  @Output() filters = new EventEmitter<any>();

  ngOnInit(): void {
    this.filters.emit(`?sort=full_name&direction=asc`)
  }

  sort(filter: string){
    if(filter == 'star'){
      this.filters.emit(filter) 
    } else {
      this.filters.emit(`?sort=full_name&direction=${filter}`)
    }
  }

}
