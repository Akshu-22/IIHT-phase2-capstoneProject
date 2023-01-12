import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { IEle } from "../Electronic/electronic";
import { Ifash } from "../Fashion/fashion";
import { IVeges } from "../veges/veges";



@Injectable({

    providedIn:'root'

})

export class DbService implements InMemoryDbService {

    createDb() {

       const fashion: Ifash[]=
       [{  
        "image":"../../assets/images/kurta.jpg"   
    },
    {
        "image":"../../assets/images/saree.jpg"   
    },
    {
        "image":"../../assets/images/sweatshirt.jpg"   
    },
    {
        "image":"../../assets/images/top.jpg"   
    },
    {
         "image":"../../assets/images/bottomware.jpg"   
    },
   {
        "image":"../../assets/images/MenC1.jpg"   
    },
    {
         "image":"../../assets/images/MenC2.jpg"   
    },
    {
        "image":"../../assets/images/MenC3.jpg"   
    },
    {
         "image":"../../assets/images/MenC4.jpg"   
    },
    {
        "image":"../../assets/images/MenC5.jpg"   
    },
    {
        "image":"../../assets/images/MenS1.jpg"   
    },
    {
        "image":"../../assets/images/MenS2.jpg"   
    },
    {
        "image":"../../assets/images/MenS3.jpg"   
    },
    {
        "image":"../../assets/images/MenS4.jpg"   
    },
    {
        "image":"../../assets/images/MenS5.jpg"   
    },
    {
        "image":"../../assets/images/WS1.jpg"   
    },
    {
        "image":"../../assets/images/WS2.jpg"   
    },
    {
        "image":"../../assets/images/WS3.jpg"   
    },
    {
        "image":"../../assets/images/WS4.jpg"   
    },
    {
        "image":"../../assets/images/WS5.jpg"   
    },
    {
        "image":"../../assets/images/Beu1.jpg"   
    },
    {
        "image":"../../assets/images/Beu2.jpg"   
    },
    {
        "image":"../../assets/images/Beu3.jpg"   
    },
    {
        "image":"../../assets/images/Beu4.jpg"   
    },
    {
        "image":"../../assets/images/Beu5.jpg"   
    }
      
    ]
    const electronic: IEle[]=
    [{  
        "image":"../../assets/images/E1.jpg"   
    },
    {
        "image":"../../assets/images/E2.jpg"   
    },
    {
        "image":"../../assets/images/E3.jpg"   
    },
    {
        "image":"../../assets/images/E4.jpg"   
    },
    {
         "image":"../../assets/images/E5.jpg"   
    },
    {
        "image":"../../assets/images/E11.jpg"   
    },
    {
        "image":"../../assets/images/E12.jpg"   
    },
    {
        "image":"../../assets/images/E13.jpg"   
    },
    {
        "image":"../../assets/images/E14.jpg"   
    },
    {
        "image":"../../assets/images/E15.jpg"   
    },
    
    {
        "image":"../../assets/images/E6.jpg"   
    },
    {
         "image":"../../assets/images/E7.jpg"   
    },
    {
        "image":"../../assets/images/E8.jpg"   
    },
    {
         "image":"../../assets/images/E9.jpg"   
    },
    {
        "image":"../../assets/images/E10.jpg"   
    },
    {
        "image":"../../assets/images/E16.jpg"   
    },
    {
        "image":"../../assets/images/E17.jpg"   
    },
    {
        "image":"../../assets/images/E18.jpg"   
    },
    {
        "image":"../../assets/images/E19.jpg"   
    },
    {
        "image":"../../assets/images/E20.jpg"   
    }
        
    ]

    const vegetable: IVeges[]=
    [{
        "name":"Tomato",
        "image":"../../assets/images/tomato.jpg" ,
        "price":40  
    },
    {  
        "name":"Onion",
        "image":"../../assets/images/onion.jpg" ,
        "price":25  
    },
    {  
        "name":"Potato",
        "image":"../../assets/images/potato.jpg" ,
        "price":30  
    },
    {  
        "name":"Pumpkin",
        "image":"../../assets/images/pumpkin.jpg" ,
        "price":50  
    },{  
        "name":"Peas",
        "image":"../../assets/images/peas.jpg" ,
        "price":40  
    },
    {  
        "name":"Red Pepper",
        "image":"../../assets/images/redpepper.jpg" ,
        "price":20  
    },
    {  
        "name":"Cabbage",
        "image":"../../assets/images/cabbage.jpg" ,
        "price":60  
    },
    {  
        "name":"Capsicum",
        "image":"../../assets/images/capsicum.jpg" ,
        "price":50  
    },
    {  
        "name":"Broccoli",
        "image":"../../assets/images/broccoli.jpg" ,
        "price":100  
    },
    {  
        "name":"Mushroom",
        "image":"../../assets/images/mushroom.jpg" ,
        "price":60  
    }
    ]

    return {fashion,electronic,vegetable};

    }
}