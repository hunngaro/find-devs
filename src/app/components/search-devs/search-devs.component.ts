import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-devs',
  templateUrl: './search-devs.component.html',
  styleUrls: ['./search-devs.component.sass']
})
export class SearchDevsComponent {

  @Output() findDev = new EventEmitter<String>();


  sendName(name: string){
    this.findDev.emit(name)
  }

}
