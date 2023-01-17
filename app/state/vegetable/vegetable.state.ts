import { IVeges } from "src/app/veges/veges";
import * as AppState from '../../state/app.state';


export interface State extends AppState.State {
    vegetables: VegetableState;
  }
  export interface VegetableState{
    currentVegetableId:number | null;
    vegetables:IVeges[];
    error:string;
  }
  
  export const initialState:VegetableState={
    currentVegetableId:null,
    vegetables:[],
    error:''
  }