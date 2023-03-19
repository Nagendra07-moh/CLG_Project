import { Component } from '@angular/core';
import { ApiService } from '../service/service/api.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent {
 
  bannerData : any = [];
  constructor(private api : ApiService){}

  ngOnInit():void{
    this.getAllData();
    this.getBannerData();
  }

  getBannerData(){
    this.api.getTrendingCurrency("INR").subscribe(res=>{
      console.log(res);
      this.bannerData = res;
    })
  }

  getAllData(){
    this.api.getCurrency("INR").subscribe(res=>{
      console.log(res);
      // console.log(res);
    })
  }

}
