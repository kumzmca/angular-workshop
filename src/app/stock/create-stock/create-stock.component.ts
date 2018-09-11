import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {
  public confirmed:boolean;
  public stock: Stock;
  public message: String;
  
  constructor(private stockService:StockService) {
    this.confirmed=false;
    this.stock = new Stock('test', 'west', 10, 0, 'NASDAQ');
  }

  ngOnInit() { }

  updatePrice(price){
    this.stock.previousPrice = this.stock.price; 
    this.stock.price = price;
  }

  createStock(){
    console.log(this.stock);
    let created = this.stockService.createStock(this.stock);
    if(created){
      this.message="Stock Created";
      this.stock = new Stock('test', 'west', 10, 0, 'NASDAQ');
    }else{
      this.message="Stock Create Failed";
    }


  }
}
