import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.component.html',
  styleUrls: ['./spaces.component.css']
})

export class SpacesComponent implements OnInit {
  data = {
    category: [{
      percentage: "",
      value: "",
      subcatogory: []
    }
    ]
  }


  constructor() { }
  ngOnInit() {
  }

  public addCategoryRow() {
    let temp = {
      percentage: "",
      value: "",
      subcatogory: []
    }

    this.data.category.push(temp)

  }
  public addSubCategoryRow(index) {
    let temp = {
      subvalue: "",
      subpercentage: ""
    }
    this.data.category[index].subcatogory.push(temp)
  }
  public removeSubCategory(index ,indexsub){
      this.data.category[index].subcatogory.splice(indexsub,1)
  }
  public removeCategory(){

  }
}
