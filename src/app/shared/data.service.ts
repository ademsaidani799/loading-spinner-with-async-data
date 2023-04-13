import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
   
  getData():Observable<string>{
    return new Observable((observer)=>{
      setTimeout(()=>{
      observer.next("hello world");
      },3000);
    })
  }
}
