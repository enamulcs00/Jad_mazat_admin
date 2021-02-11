import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/cooldash/services/api/api.service';
import { CommonService } from 'src/app/cooldash/services/common/common.service';
import { PopupService } from 'src/app/cooldash/services/popup/popup.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  showorder: boolean;
  foodItem: any;
  serialNumber = 0;
  loader: boolean;
  imageUrl: any;
  totalamount:any;
  
  constructor( public api: ApiService, public comm: CommonService, private dialogService: PopupService) { }

  ngOnInit() {
    this.imageUrl = this.comm.imageUrl;
    this.getStoreItem();
  }


  getStoreItem()
  {
    this.api.getStoreItem().subscribe((res:any)=>
    {
      this.showorder = false;
      if (res["response"]["success"]) {
        this.foodItem = res.response.message.data;
        for (var data of this.foodItem) {
          data.status = data["status"] == 1 ? true : false;
        }
        this.loader = false;
      }
    })
    
  }

  onEditSelect(item) {
    console.log('item',item._id);
    this.dialogService.editShuttleRoute(item._id).subscribe(res => {
     this.getStoreItem()
    });
  }

  updateData(value,id,key)
  {
    if(key == 'price')
    {
      const data=
      {
        "id":id,
        "price":value
      }
       this.api.addInventory(data).subscribe((res:any)=>
       {
        this.getStoreItem()
       }) 
    }
    if(key == 'quantity')
    {
      const data=
      {
        "id":id,
        "quantity":value
      }
       this.api.addInventory(data).subscribe((res:any)=>
       {
        this.getStoreItem()
       }) 
    }
  }

}
