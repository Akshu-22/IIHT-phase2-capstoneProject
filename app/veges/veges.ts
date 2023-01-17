export enum Category{
    fruits='fruits', vegetables='vegetables'
}
export interface IVeges{
   
    id:number;
    name:string;
    category:Category;
    image:string;
    price:number;
    qnty: number;
    company:string;
    total: number;


}