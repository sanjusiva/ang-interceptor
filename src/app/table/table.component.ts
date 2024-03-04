import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as Actions from '../store/table.action';
import { TableModal } from '../store/table.modal';
import { TableState } from '../table.state';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  content:Observable<TableModal[]>;
  constructor(
    private store: Store<TableState>
    ) { 
    this.content=store.select('content')
  }

  addToStore(product: string, price: any) {
    this.store.dispatch(new Actions.AddTable({
      product: product,
      price: price
    }))
  }
}
