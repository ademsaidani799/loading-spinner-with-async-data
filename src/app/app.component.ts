import { Component } from '@angular/core';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoadingSpinnerForAsyncData';
  runSpin:boolean = true;
  received_data!:string;


  constructor(private dataService:DataService){}

  ngOnInit(){
    this.dataService.getData().subscribe((res)=>{
      this.received_data = res;
      this.runSpin = false;
      
    })
    
    
  }
}
