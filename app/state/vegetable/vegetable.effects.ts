import { Injectable } from "@angular/core";
import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { VegesService } from "src/app/shared/veges.service";
import * as VegetableActions from './vegetable.actions';


@Injectable()
export class VegetableEffects {

  constructor(private actions$: Actions, private vegeService: VegesService) { }

  loadVegetable$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(VegetableActions.loadVegetable),
        mergeMap(() => this.vegeService.getVegetable()
          .pipe(
            map(vegetable => VegetableActions.loadVegetableSuccess({ vegetable })),
            catchError(error => of(VegetableActions.loadVegetableFailure({ error })))
          )
        )
      );
  });

  updateVegetable$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(VegetableActions.updateVegetable),
        concatMap(action =>
          this.vegeService.updateVegetable(action.vegetable)
            .pipe(
              map(vegetable => VegetableActions.updateVegetableSuccess({ vegetable })),
              catchError(error => of(VegetableActions.updateVegetableFailure({ error })))
            )
        )
      );
  });

  createVegetable$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(VegetableActions.createVegetable),
        concatMap(action =>
          this.vegeService.createVegetable(action.vegetable)
            .pipe(
              map(vegetable => VegetableActions.createVegetableSuccess({ vegetable })),
              catchError(error => of(VegetableActions.createVegetableFailure({ error })))
            )
        )
      );
  });

  deleteVegetable$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(VegetableActions.deleteVegetable),
        mergeMap(action =>
          this.vegeService.deleteVegetable(action.vegetableId).pipe(
            map(() => VegetableActions.deleteVegetableSuccess({ vegetableId: action.vegetableId })),
            catchError(error => of(VegetableActions.deleteVegetableFailure({ error })))
          )
        )
      );
  });
} 