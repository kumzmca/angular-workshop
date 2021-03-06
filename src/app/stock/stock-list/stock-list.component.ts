import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  public stocks: Stock[];

  constructor(private stockService:StockService) { }

  ngOnInit() {
    this.stocks=this.stockService.getStocks();
  }

  trackStockByCode(index, stock) {
    return stock.code;
  }
  whenEditCalled (stock: Stock) {
    console.log('whenEditCalled stock ', stock, ' was triggered');
    // this.stockService.toggleFavourite(stock);
  }

  whenFavouriteToggled(stock: Stock) {
    console.log('Favorite for stock ', stock, ' was triggered');
    //stock.favourite = !stock.favourite;
    this.stockService.toggleFavourite(stock);
  }
}
