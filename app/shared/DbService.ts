import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { IEle } from "../Electronic/electronic";
import { Ifash } from "../Fashion/fashion";
import { User } from "../user/user";
import { Category, IVeges } from "../veges/veges";



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
        "id":101,
        "name":"Tomato",
        category:Category.vegetables,
        "image":"../../assets/images/tomato.jpg" ,
        "price":40 ,
        "qnty":0,
        "company":"A Grade Nasik Suppliers",
        "total":0 
    },
    {  
        "id":102,
        "name":"Apple",
        category:Category.fruits,
        "image":"../../assets/images/apple.jpg" ,
        "price":110,
        "qnty":0,
        "company":"A Grade Kasmir Suppliers",
        "total":0
          
    },
    {  
        "id":103,
        "name":"Potato",
        category:Category.vegetables,
        "image":"../../assets/images/potato.jpg" ,
        "price":30,
        "qnty":0,
        "company":"A Grade Kokan Suppliers",
        "total":0   
    },
    {  
        "id":104,
        "name":"Banana",
        category:Category.fruits,
        "image":"../../assets/images/banana.jpg" ,
        "price":60,
        "qnty":0,
        "company":"A Grade Dhule Suppliers",
        "total":0  
       
    },{  
        "id":105,
        "name":"Peas",
        category:Category.vegetables,
        "image":"../../assets/images/peas.jpg" ,
        "price":40,
        "qnty":0,
        "company":"A Grade Nasik Suppliers",
        "total":0   
    },
    {  
        "id":106, 
        "name":"Orange",
        category:Category.fruits,
        "image":"../../assets/images/orange.jpg" ,
        "price":100 ,
        "qnty":0,
        "company":"A Grade Nagpur Suppliers",
        "total":0  
        
    },
    {  
        "id":107,
        "name":"Cabbage",
        category:Category.vegetables,
        "image":"../../assets/images/cabbage.jpg" ,
        "price":60 ,
        "qnty":0,
        "company":"A Grade Nasik Suppliers",
        "total":0   
    },
    {  
        "id":108,
        "name":"Mango",
        category:Category.fruits,
        "image":"../../assets/images/mango.jpg" ,
        "price":400 ,
        "qnty":0,
        "company":"A Grade Ratnagiri Suppliers",
        "total":0 
        
    },
    {  
        "id":109,
        "name":"Broccoli",
        category:Category.vegetables,
        "image":"../../assets/images/broccoli.jpg" ,
        "price":100,
        "qnty":0,
        "company":"A Grade Nasik Suppliers",
        "total":0   
    },
    {  
        "id":110,
        "name":"Watermelon",
        category:Category.fruits,
        "image":"../../assets/images/watermelon.jpg" ,
        "price":150,
        "qnty":0,
        "company":"A Grade Nasik Suppliers",
        "total":0  
        
    },
     {  
        "id":111,
        "name":"Bitter Gourd",
        category:Category.vegetables,
        "image":"../../assets/images/bittergourd.jpg" ,
        "price":80,
        "qnty":0,
        "company":"A Grade Nagpur Suppliers",
        "total":0   
    },
    {  
        "id":112,
        "name":"Lady Finger",
        category:Category.vegetables,
        "image":"../../assets/images/LadyFinger.jpg" ,
        "price":70,
        "qnty":0,
        "company":"A Grade Dhule Suppliers" ,
        "total":0  
    },
    {  
        "id":113,
        "name":"Eggplant",
        category:Category.vegetables,
        "image":"../../assets/images/eggplant.jpg" ,
        "price":100 ,
        "qnty":0,
        "company":"A Grade Nasik Suppliers",
        "total":0 
    },
    {  
        "id":114,
        "name":"Cauliflower",
        category:Category.vegetables,
        "image":"../../assets/images/cauliflower.jpg" ,
        "price":80,
        "qnty":0,
        "company":"A Grade Jalgaon Suppliers" ,
        "total":0  
    },
    {  
        "id":115,
        "name":"Carrot",
        category:Category.vegetables,
        "image":"../../assets/images/carrot.jpg" ,
        "price":60,
        "qnty":0,
        "company":"A Grade Nagpur Suppliers",
        "total":0    
    },
    {  
        "id":116,
        "name":"Onion",
        category:Category.vegetables,
        "image":"../../assets/images/onion.jpg" ,
        "price":25,
        "qnty":0,
        "company":"A Grade Nasik Suppliers",
        "total":0   
       
    },
    {  
        "id":117,
         "name":"Pumpkin",
        category:Category.vegetables,
        "image":"../../assets/images/pumpkin.jpg" ,
        "price":50,
        "qnty":0,
        "company":"A Grade Jalgaon Suppliers",
        "total":0   
       
    },
    {  
        "id":118,
        "name":"Red Pepper",
        category:Category.vegetables,
        "image":"../../assets/images/redpepper.jpg" ,
         "price":20,
         "qnty":0,
         "company":"A Grade Kokan Suppliers",
         "total":0   
        
    },
    {  
        "id":119,
        "name":"Capsicum",
        category:Category.vegetables,
        "image":"../../assets/images/capsicum.jpg" ,
        "price":50,
        "qnty":0,
        "company":"A Grade Ratnagiri Suppliers",
        "total":0 
        
    },
    {  
        "id":120,
        "name":"Grapes",
         category:Category.fruits,
        "image":"../../assets/images/grapes.jpg" ,
        "price":180,
        "qnty":0,
        "company":"A Grade Nasik Suppliers",
        "total":0   
    },
    {  
        "id":121,
        "name":"Pappaya",
         category:Category.fruits,
        "image":"../../assets/images/papaya.jpg" ,
        "price":100,
        "qnty":0,
        "company":"A Grade Nagpur Suppliers",
        "total":0    
    },
    {  
        "id":122,
         "name":"Mushroom",
        category:Category.vegetables,
        "image":"../../assets/images/mushroom.jpg" ,
        "price":60,
        "qnty":0,
        "company":"A Grade Local Suppliers",
        "total":0  
       
    },
    {  
        "id":123,
        "name":"Strawberry",
         category:Category.fruits,
        "image":"../../assets/images/strawberry.jpg" ,
        "price":300 ,
        "qnty":0,
        "company":"A Grade Mahabaleshwar Suppliers",
        "total":0  
    },
    {  
        "id":124,
        "name":"Kiwi",
         category:Category.fruits,
        "image":"../../assets/images/kiwi.jpg" ,
        "price":180,
        "qnty":0,
        "company":"A Grade Maharashtra Suppliers",
        "total":0    
    },
    {  
        "id":125,
        "name":"Cherry",
         category:Category.fruits,
        "image":"../../assets/images/cherry.jpg" ,
        "price":250,
        "qnty":0,
        "company":"A Grade Himachal Suppliers",
        "total":0  
    } 
    ]

    const users:User[]=[{ id:1,
        userName:'Akshata',
        password:'Akshata',
        isAdmin:true},

        { id:2,
          userName:'Deepak',
          password:'Deepak',
          isAdmin:false},

          { id:2,
            userName:'admin',
            password:'admin',
            isAdmin:true}

         ]
         const cart:IVeges[]=[]

    return {fashion,electronic,vegetable,users,cart};

    }
}