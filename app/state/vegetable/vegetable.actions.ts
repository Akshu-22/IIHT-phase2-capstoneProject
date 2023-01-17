import { createAction, props } from '@ngrx/store';
import { IVeges } from 'src/app/veges/veges';

export const setCurrentVegetable = createAction(
    '[Vegetable] Set Current Vegetable',
    props<{ currentVegetableId: number }>()
  );
  
  export const clearCurrentVegetable = createAction(
    '[Vegetable] Clear Current Vegetable'
  );
  
  export const initializeCurrentVegetable = createAction(
    '[Vegetable] Initialize Current Vegetable'
  );
  
  export const loadVegetable = createAction(
    '[Vegetable] Load'
  );
  
  export const loadVegetableSuccess = createAction(
    '[Vegetable] Load Success',
    props<{ vegetable: IVeges[] }>()
  );
  
  export const loadVegetableFailure = createAction(
    '[Vegetable] Load Fail',
    props<{ error: string }>()
  );
  
  export const updateVegetable = createAction(
    '[Vegetable] Update Vegetable',
    props<{ vegetable: IVeges }>()
  );
  
  export const updateVegetableSuccess = createAction(
    '[Vegetable] Update Vegetable Success',
    props<{ vegetable: IVeges }>()
  );
  
  export const updateVegetableFailure = createAction(
    '[Vegetable] Update Vegetable Fail',
    props<{ error: string }>()
  );
  
  export const createVegetable = createAction(
    '[Vegetable] Create Vegetable',
    props<{ vegetable: IVeges }>()
  );
  
  export const createVegetableSuccess = createAction(
    '[Vegetable] Create Vegetable Success',
    props<{ vegetable: IVeges }>()
  );
  
  export const createVegetableFailure = createAction(
    '[Vegetable] Create Vegetable Fail',
    props<{ error: string }>()
  );
  
  export const deleteVegetable = createAction(
    '[Vegetable] Delete Vegetable',
    props<{ vegetableId: number }>()
  );
  
  export const deleteVegetableSuccess = createAction(
    '[Vegetable] Delete Vegetable Success',
    props<{ vegetableId: number }>()
  );
  
  export const deleteVegetableFailure = createAction(
    '[Vegetable] Delete Vegetable Fail',
    props<{ error: string }>()
  );