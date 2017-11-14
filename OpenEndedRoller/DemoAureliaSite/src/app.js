import { OpenEndedRoller } from './openEndedRoller';
import * as move from './movement';
import $ from 'jquery';

export class App {
  constructor() {
    this.jsonDataString = "";
    this.movementResult = "";
  }


 
  roll() {

    let roller = new OpenEndedRoller();

    let result = roller.performRoll(null, true, null);

    this.jsonDataString = JSON.stringify(result, null, 2);

  }

  movement() {
    
        
    
        let moveResult = move.movementCost(5,10,50,'walk',20);

        this.movementResult = JSON.stringify(moveResult, null, 2);
    
      }
}
