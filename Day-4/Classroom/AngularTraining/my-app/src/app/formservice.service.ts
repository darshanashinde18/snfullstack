import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {
  addUserToDB(user:any){
    return this.http.post('https://angularpro-7b9a3-default-rtdb.firebaseio.com/sn.json',user)
    .subscribe(data =>{
      console.log(data);
      
    })
    // console.log(user);
  }

  loadDataFromDB(){
    return this.http.get('https://angularpro-7b9a3-default-rtdb.firebaseio.com/sn.json')
  }

  constructor( private http:HttpClient) { }
}
