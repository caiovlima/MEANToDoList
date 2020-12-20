import { ApiService } from './../shared/api.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/models/item';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  item: Item;
  title: string = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private apiService: ApiService,
      ) { }

  ngOnInit() {
    this.title = 'Novo item';
    this.item = new Item();

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.apiService.getById(id).subscribe(resp => {
        this.item = resp;
        this.title = `Alterando tarefa: ${this.item.title}`
      });
    }
  }

  onSubmit() {
    let observable: Observable<Item>;

    if (this.item._id) {
      observable = this.apiService.update(this.item);
    } else {
      observable = this.apiService.create(this.item);
    }

    observable.subscribe(() => {
      this.router.navigate(['/itens']);
    });

  }

}
