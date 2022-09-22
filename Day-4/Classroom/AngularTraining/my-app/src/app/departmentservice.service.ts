import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentserviceService {

  deptdata():string[]{
    return ['Admin','IT','Management']
  }

  constructor() { }
}
