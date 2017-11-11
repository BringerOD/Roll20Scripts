import { OpenEndedRoller } from './openEndedRoller';
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
    
        let roller = new OpenEndedRoller();
    
        let result = roller.performRoll(null, true, null);
    
        this.jsonDataString = JSON.stringify(result, null, 2);
    
      }
}
