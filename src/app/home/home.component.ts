import { Component } from '@angular/core';
import { menJean } from '../../Data/Men/men_jean';
import { gounsPage1 } from '../../Data/Gouns/gouns';
import { lehngacholiPage2 } from '../../Data/Saree/lenghaCholiPage2';
import { mensShoesPage1 } from '../../Data/shoes';
import { mens_kurta } from '../../Data/Men/men_kurta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  menJeans: any;
  womenGouns : any;
  lenghaCholi: any;
  mensKurta: any;
  mensShoes: any;
  
  ngOnInit(){
    this.menJeans = menJean.slice(0,8)
    this.womenGouns = gounsPage1.slice(0,8)
    this.lenghaCholi = lehngacholiPage2.slice(0,8)
    this.mensShoes = mensShoesPage1.slice(0,8)
    this.mensKurta = mens_kurta.slice(0,8)

  }
}
