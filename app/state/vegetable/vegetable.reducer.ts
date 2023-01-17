import { createReducer,on } from "@ngrx/store";
import { initialState, VegetableState } from "./vegetable.state";
import * as VegetableActions from './vegetable.actions'


export const vegetableReducer = createReducer<VegetableState>(
    initialState,
    
    on(VegetableActions.setCurrentVegetable, (state, action): VegetableState => {
      return {
        ...state,
        currentVegetableId: action.currentVegetableId
      };
    }),
    on(VegetableActions.clearCurrentVegetable, (state): VegetableState => {
      return {
        ...state,
        currentVegetableId: null
      };
    }),
    on(VegetableActions.initializeCurrentVegetable, (state): VegetableState => {
      return {
        ...state,
        currentVegetableId: 0
      };
    }),
    on(VegetableActions.loadVegetableSuccess, (state, action): VegetableState => {
      return {
        ...state,
        vegetables: action.vegetable,
        error: ''
      };
    }),
    on(VegetableActions.loadVegetableFailure, (state, action): VegetableState => {
      return {
        ...state,
        vegetables: [],
        error: action.error
      };
    }),
    on(VegetableActions.updateVegetableSuccess, (state, action): VegetableState => {
      const updatedVegetable = state.vegetables.map(
        item => action.vegetable.id === item.id ? action.vegetable : item);
      return {
        ...state,
        vegetables: updatedVegetable,
        currentVegetableId: action.vegetable.id,
        error: ''
      };
    }),
    on(VegetableActions.updateVegetableFailure, (state, action): VegetableState => {
      return {
        ...state,
        error: action.error
      };
    }),
   
    on(VegetableActions.createVegetableSuccess, (state, action): VegetableState => {
      return {
        ...state,
        vegetables: [...state.vegetables, action.vegetable],
        currentVegetableId: action.vegetable.id,
        error: ''
      };
    }),
    on(VegetableActions.createVegetableFailure, (state, action): VegetableState => {
      return {
        ...state,
        error: action.error
      };
    }),
  
    on(VegetableActions.deleteVegetableSuccess, (state, action): VegetableState => {
      return {
        ...state,
        vegetables: state.vegetables.filter(vegetable => vegetable.id !== action.vegetableId),
        currentVegetableId: null,
        error: ''
      };
    }),
    on(VegetableActions.deleteVegetableFailure, (state, action): VegetableState => {
      return {
        ...state,
        error: action.error
      };
    })
  );