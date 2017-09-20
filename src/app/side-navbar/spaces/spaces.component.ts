import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ServicesService } from './../../services/services.service'

@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.component.html',
  styleUrls: ['./spaces.component.css']
})

export class SpacesComponent implements OnInit {
  data = {
    category: [{
      sub_space_list: []
    }]
  }
public closetab:any;

  constructor(public global: ServicesService) { }
  ngOnInit() {
    this.getSpaceList();
  }

  public addCategoryRow() {
    let temp = {
      sub_space_list: []
    }

    this.data.category.push(temp)

  }
  public addSubCategoryRow(index) {
    let temp = {}
    this.data.category[index].sub_space_list.push(temp)
    console.log("data", this.data)
  }
  public removeSubCategory(index, indexsub) {
    this.data.category[index].sub_space_list.splice(indexsub, 1)
  }
  public removeCategory() {

  }

  public getSpaceList(): any {
    let url = "http://api.renovarz.co/api/superadmin/allSpace/"
    this.global.getRequest(url).subscribe(res => {
      this.calculateDerivative(res.main_space_list)
      this.calculateSubDerivativeinitial(res.main_space_list);
    })
  }
  public calculateDerivative(res) {
    let sum = res.map(function (obj) {
      return obj.waightage;
    }).reduce(function (total, number) {
      return total + number;
    }, 0);
    for (var key in res) {
      res[key].calculate = Math.round((res[key].waightage / sum) * 100);
    }
    this.data.category = res;
  }
  public calculateSubDerivative(res, index) {
    let sum = res.map(function (obj) {
      return obj.waightage;
    }).reduce(function (total, number) {
      return total + number;
    }, 0);
    for (var key in res) {
      res[key].calculate = Math.round((res[key].waightage / sum) * 100);
    }
    
  }
  public calculateSubDerivativeinitial(res) {
    for (var index in res) {
     
      if (res[index].sub_space_list.length) {
        let sum = res[index].sub_space_list.map(function (obj) {
          return obj.waightage;
        }).reduce(function (total, number) {
          return total + number;
        }, 0);
        console.log("sum",res[index].sub_space_list);
        
        for (var key in res[index].sub_space_list) {
          res[index].sub_space_list[key].calculate = Math.round(( res[index].sub_space_list[key].waightage / sum) * 100);
        }
      }
    }
  }
  public updateWeightage() {
    this.calculateDerivative(this.data.category)
  }


}
