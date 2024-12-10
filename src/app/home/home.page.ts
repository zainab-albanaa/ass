import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { OnInit } from '@angular/core';
import { IonicSlides  } from '@ionic/angular';
import Swiper from 'swiper';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKIAnNiISKyvpjAdOcdgmOqVeoUS-tnPo4Dg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0r7ZS167H3jRmUSXNsos-6gnTrA1MWVgiA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ76Py9slgq5c4GazrDfJgOZChYS5v10MaKWw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKsTnB2lUVTQ7FdBcinhRRy33FRADHu7qxwA&s",
    
   
   
  ];

  contentLists = [
    {
      
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKIAnNiISKyvpjAdOcdgmOqVeoUS-tnPo4Dg&s",
      items : ['sunshine', 'sunshine','sunshine','sunshine', 'example']
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0r7ZS167H3jRmUSXNsos-6gnTrA1MWVgiA&s",
      items : ['flower', 'flower','flower']
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ76Py9slgq5c4GazrDfJgOZChYS5v10MaKWw&s",
      items : ['Hello', 'Hello','Hello']
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKsTnB2lUVTQ7FdBcinhRRy33FRADHu7qxwA&s",
      items : ['text', 'text','text' ,'text','text' ]
    },
  ];

  CountChar: Record<string, number> = {};
  isModalOpen: boolean = false;



  //serach 
  public datalist = ['item 1', 'item 2', 'item 3'];
  public results = [...this.datalist];
  filteredLists = this.contentLists.map((image) => [...image.items]); // Clone the original content
  SearchText="";

  handleInput(index: number) {
    const list = this.SearchText.toLowerCase();
    this.filteredLists[index] = this.contentLists[index].items.filter((item) =>
      item.toLowerCase().includes(list)
    );
   // const query = event.target.value.toLowerCase();
    //this.results = this.datalist.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }

  //

  constructor(private alertController: AlertController) {
    addIcons({ add });


  }

  swiperSlideChange (e: any){
    console.log('changed: ', e);
    alert("test");
  }

  async presentAlert() {
    this.CountChar = {};
    this.filteredLists.forEach(item => {[...item].forEach(char => {
      this.CountChar[char] = (this.CountChar[char] || 0)+ 1;

    });
  });

//const list = Object.entries(this.CountChar).sort((a,b))=> b[1] -a[1]).slice(0,3).map(([char, count])=> ${char}= ${count}).join('<br');
const list = Object.entries(this.CountChar)
      .sort((a, b) => b[1] - a[1]) 
      .slice(0, 3) 
      .map(([char, count]) => `${char} = ${count}`)
      .join  (`</br>`);

  console.log('count', this.CountChar);

this.isModalOpen = true;



   const alert = await this.alertController.create({
      header: 'Hello',
      subHeader: 'List size is ',
      message: list,
     buttons: ['OK'],
    });

    await alert.present();
  }



}
