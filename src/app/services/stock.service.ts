import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private stocks: Stock[];

  constructor() { 
    this.stocks= [
      new Stock('Test Stock Company', 'TSC', 85, 80, 'NASDAQ'),
      new Stock('Second Stock Company', 'SSC', 10, 20, 'BSE'),
      new Stock('Last Stock Company', 'LSC', 876, 765, 'NYSE')
    ];
  }

  createStock(stock:Stock) {
    let foundStock=this.stocks.find((each)=> each.code===stock.code);
    console.log(foundStock);
    if(foundStock) return false;

    this.stocks.push(stock);
    return true;
  }

  getStocks(){
    return this.stocks;
  }

  toggleFavourite(stock:Stock){
    let foundStock=this.stocks.find((each)=> { return each.code===stock.code } );
    console.log(foundStock);
    if(foundStock) 
      foundStock.favourite = !foundStock.favourite;

  }

}
