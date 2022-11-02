import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";
import { incrementCounter, setValue } from "./actions";

@Injectable()
export class GlobalEffects {

  increment = createEffect(()=> this.actions$.pipe(
    ofType(setValue),//same as filter(action => action.type === setValue.type)
    map(action => {
      console.log(action);
      return incrementCounter()
    })
  ))

  constructor(private actions$: Actions) { }
}
