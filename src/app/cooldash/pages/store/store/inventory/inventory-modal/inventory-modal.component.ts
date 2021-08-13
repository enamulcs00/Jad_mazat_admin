
import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { ApiService } from "src/app/cooldash/services/api/api.service";
import { CommonService } from "src/app/cooldash/services/common/common.service";
import { StoreCategoryModalComponent } from "../../../category/storeCategoryModal/storeCategoryModal.component";
@Component({
  selector: 'app-inventory-modal',
  templateUrl: './inventory-modal.component.html',
  styleUrls: ['./inventory-modal.component.scss']
})
export class InventoryModalComponent implements OnInit {
  submitted:boolean = false;
  categoryForm: FormGroup;
  item:any;
  constructor(
    private dialog: MatDialogRef<StoreCategoryModalComponent>,
    private formBuilder: FormBuilder,
    public comm: CommonService,
    public api: ApiService,
  ) {
   
   }

  ngOnInit() {
  //addInventory
    this.categoryForm = this.formBuilder.group({
      quantity: new FormControl("", [Validators.required]),
      price: new FormControl("",[Validators.required])
    });

  }


  updateInvent()
  {
   const data=
   {
     "id":this.item,
     "quantity":this.categoryForm.controls['quantity'].value,
     "price":this.categoryForm.controls['price'].value
   }
    this.api.addInventory(data).subscribe((res:any)=>
    {
      this.dialog.close();
    })
  }
}
