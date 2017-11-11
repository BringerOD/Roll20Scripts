

export class OpenEndedRoller {

    constructor() {

    }

    randomInteger(max) {

        return Math.random() * (max - 1) + 1;
        
      }

    performRoll( previousRoll, canRollLow, loggerFunction) {

        var rollResult = {
            total: 0,
            fumble: false,
            history: []
        };

        if(loggerFunction)  loggerFunction(previousRoll);

        var previousTotal = 0;

        if (previousRoll) previousTotal = previousRoll.total;

        if(loggerFunction) loggerFunction(previousTotal);


        rollResult.total = this.randomInteger(100);

        rollResult.history.push({
            type: 1,
            roll: rollResult.total,
            message: ''
        });


        if (rollResult.total < 6 && canRollLow) {

            rollResult.history[rollResult.history.length - 1].message = 'You Fumbled';

            rollResult.fumble = true;
            var newResult = this.performRoll( rollResult, false);
            rollResult.history.push.apply(rollResult.history, newResult.history);
            rollResult.total += newResult.total;

            return rollResult;

        }

        if (rollResult.total == 66 && canRollLow) {

            rollResult.history[rollResult.history.length - 1].message = 'Death Roll';

        }

        if (rollResult.total > 95) {


            rollResult.history[rollResult.history.length - 1].message = 'Rolling Over';


            var newResult = this.performRoll( rollResult, false);
            rollResult.history.push.apply(rollResult.history, newResult.history);
            rollResult.total += newResult.total;


        }

        return rollResult;


    } // performRoll
}


