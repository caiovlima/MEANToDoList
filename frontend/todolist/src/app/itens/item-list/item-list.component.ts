import { Item } from './../shared/models/item';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  title: string = 'Itens';
  itens: Item[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAll();

  }

  getAll() {
    this.apiService.getAll().subscribe((res => {
      this.itens = res;
    }));
  }

  remove(item: Item) {
    this.apiService.remove(item._id).subscribe(() => {
      this.itens = this.itens.filter( i => i !== item);
    });
  }

}
