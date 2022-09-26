import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'app-formmdemo',
  templateUrl: './formmdemo.component.html',
  styleUrls: ['./formmdemo.component.css']
})
export class FormmdemoComponent implements OnInit {

  users:any=[]

  constructor(private fs:FormserviceService) { }

  ngOnInit(): void {
    // this.loadData();


  }
 

  addUser(nf:NgForm){
    this.fs.addUserToDB(nf.value)
    this.loadData()
    // console.log(nf.value)
  }

  loadData(){
    this.fs.loadDataFromDB().subscribe(data=>{
      // console.log(data);
      const mydata=[]
      for(let key in data){
        mydata.push(data[key])
      }
      this.users=mydata
    })

  }

}
