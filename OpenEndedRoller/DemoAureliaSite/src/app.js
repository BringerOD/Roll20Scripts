import { OpenEndedRoller } from './openEndedRoller';
import { on } from './roll20code-movement-calculator';
import $ from 'jquery';

export class App {
  constructor() {
    this.jsonDataString = "";
  }


 
  roll() {

    let roller = new OpenEndedRoller();

    let result = roller.performRoll(null, true, null);

    this.jsonDataString = JSON.stringify(result, null, 2);

  }

  movement() {
    
        let testResult = on("!move5 walk 3 75 55");
    
        this.jsonDataString = JSON.stringify(testResult, null, 2);
    
      }
}
