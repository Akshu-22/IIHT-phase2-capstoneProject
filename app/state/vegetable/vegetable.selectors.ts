import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Category } from "src/app/veges/veges";
import { VegetableState } from "./vegetable.state";


const getVegetableFeatureState = createFeatureSelector<VegetableState>('vegetables');

export const getCurrentVegetableId = createSelector(
  getVegetableFeatureState,
  state => state.currentVegetableId
);

export const getCurrentVegetable = createSelector(
  getVegetableFeatureState,
  getCurrentVegetableId,
  (state, currentVegetableId) => {

    if (currentVegetableId === 0) {
      return {
        id:0,
        name:'',
        price:0,
        image:'',
        category:Category.vegetables,
        qnty:0,
        company:'',
        total:0,
      };
    } else {
      return currentVegetableId ? state.vegetables.find(p => p.id === currentVegetableId) : null;
    }
  }
);

export const getVegetable = createSelector(
  getVegetableFeatureState,
  state => state.vegetables
);

export const getError = createSelector(
  getVegetableFeatureState,
  state => state.error
);