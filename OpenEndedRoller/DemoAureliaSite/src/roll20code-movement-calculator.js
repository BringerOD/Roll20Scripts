/**
 * RM2 Movement Calculator
 * @author Peter Sotos
 * @version 1.0
 */

log('-- Loaded Rolemaster Movement Calculator! --');
sendChat('RM2 Movement Calculator API', 'Thanks for using RM2 MMC! type <code>!move5 walk 3 75 55</code> walk being the pace, 3 being the number of hexes you wish to move, 75 being your sprinting skill, 55 being your base movement rate. Possible movement rates are: walk, jog, run, sprint, fsprint, dash.');


/**
 * The core functionality of the script. Intercepts API messages meant for it, extracts the core of the command, and passes it to
 * the appropriate function for handling.
 */
on('chat:message', function (msg) {

    if (msg.type != 'api') return;

    var parts = msg.content.split(' ');
    log(parts);
    var pace = parts[1];
    pace = str.tolowercase(pace);
    log(pace);

    var hexes = parts[2];
    log(hexes);

    var skill = parts[3];

    if (skill == undefined) skill = "0";
    log(skill);

    var baseRate =

    log(msg.content.indexOf(apiWake));

    var message =  msg.content.split(' ').slice(2).join(' ');

   var extraordinaryResultMessage = '';


    // theme
    var top = "#667292";
    var left = "#8d9db6";
    var result = "#606060";
    var resultFont = "white";
    var success = "#96ceb4";
    var failure = "#c83349";
    var command = "white";



    var apiWake = '!move5';

    if (msg.content.indexOf(apiWake) != -1) {

        log('***********************************');

        var rollResult = performRoll(msg, null, true);
        var skillResult = parseInt(eval(skill));
        var total = parseInt(rollResult.total) + skillResult;

        log(rollResult.history);

        var player = getObj("player", msg.playerid);
        // var outHTML = buildHTML2(rollResult, msg.content,  player.get('color'));

        /**
         In RM there are 200 initiative points in a round. So a person With
           a base movement of 55 would take 200 initiative points to move
           55 feet at a walk.
        */


        var strHTML = "<hr>";
        strHTML += "      <div>";
        strHTML += "        " +  msg.content
        strHTML += "      <\/div>";

        strHTML += "  <table width=\"100%\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" style=\"border-collapse:collapse;border:1px solid Black;color:black;font-family:arial,helvetica,sans-serif;\">";
        strHTML += "    <tbody>";

        if (message) {

            strHTML += "      <tr>";
            strHTML += "        <td colspan=\"3\" style=\"padding:5px;background-color:" + top + ";color:White;font-size:120%;font-weight: bold;text-align:left;\">Roll:  " + message + " <\/td>";
            strHTML += "      <\/tr>";

            }else{

            strHTML += "      <tr>";
            strHTML += "        <td colspan=\"3\" style=\"padding:5px;background-color:" + top + ";color:White;font-size:120%;font-weight: bold;text-align:left;\">Roll Results<\/td>";
            strHTML += "      <\/tr>";

        }



        var openEndedTotal = 0;
        var openEndedString = "";

        _.each(rollResult.history, function (item, idx) {

            if (item.type == 1) {
                strHTML += "      <tr>";


                if (idx > 0)
                    strHTML += "        <td style=\"text-align:center;background-color:" + left + ";color:White;white-space:nowrap;\">Next Roll<\/td>";
                else
                    strHTML += "        <td style=\"text-align:center;background-color:" + left + ";color:White;white-space:nowrap;\">Initial Roll<\/td>";

                strHTML += "        <td style=\"white-space:nowrap;\">" + item.roll + "<\/td>";
                strHTML += "        <td style=\"white-space:nowrap;\">" + item.message + "<\/td>";
                strHTML += "      <\/tr>";
            }

            if (rollResult.fumble) {
                openEndedString += item.roll + " - ";
                openEndedTotal -= item.roll
            }
            else {
                openEndedString += item.roll + " + ";
                openEndedTotal += item.roll
            }

        });

        openEndedString = openEndedString.substring(0, openEndedString.length - 3);

        if (rollResult.fumble) {


            strHTML += "      <tr>";
            strHTML += "        <td style=\"text-align:center;background-color:" + left + ";color:White;white-space:nowrap;\">   <\/td>";
            strHTML += "        <td colspan=\"2\" style=\"padding:5px;background-color:" + failure + " ;font-weight: bold;color:White;font-size:120%;text-align:left;\">Fumble Results<\/td>";
            strHTML += "      <\/tr>";

            strHTML += "      <tr>";
            strHTML += "        <td style=\"text-align:center;background-color:" + left + ";color:White;white-space:nowrap;\"> ( - " + openEndedString + " + " + skillResult + " )   <\/td>";
            strHTML += "        <td style=\"white-space:nowrap;background-color:" + result + ";color:" + resultFont + "\">" + (skillResult + openEndedTotal) + "<\/td>";
            strHTML += "        <td style=\"white-space:nowrap;background-color:" + result + ";color:" + resultFont + "\">With Skill<\/td>";
            strHTML += "      <\/tr>";

            strHTML += "      <tr>";
            strHTML += "        <td style=\"text-align:center;background-color:" + left + ";color:White;white-space:nowrap;\"> ( - " + openEndedString + " )   <\/td>";
            strHTML += "        <td style=\"white-space:nowrap;\">" + (openEndedTotal) + "<\/td>";
            strHTML += "        <td style=\"white-space:nowrap;\">Without Skill<\/td>";
            strHTML += "      <\/tr>";




        } else {


            strHTML += "      <tr>";
            strHTML += "        <td style=\"text-align:center;background-color:" + left + ";color:White;white-space:nowrap;\">   <\/td>";
            strHTML += "        <td colspan=\"2\" style=\"padding:5px;background-color:" + success + " ;font-weight: bold;color:black;font-size:120%;text-align:left;\">Outcome<\/td>";
            strHTML += "      <\/tr>";



            strHTML += "      <tr>";
            strHTML += "        <td style=\"text-align:center;background-color:" + left + ";color:White;white-space:nowrap;\"> (  " + openEndedString + " + " + skillResult + " )   <\/td>";
            strHTML += "        <td style=\"white-space:nowrap;background-color:" + result + ";color:" + resultFont + "\">" + (skillResult + openEndedTotal) + "<\/td>";
            strHTML += "        <td style=\"white-space:nowrap;background-color:" + result + ";color:" + resultFont + "\">With Skill<\/td>";
            strHTML += "      <\/tr>";

            strHTML += "      <tr>";
            strHTML += "        <td style=\"text-align:center;background-color:" + left + ";color:White;white-space:nowrap;\"> (  " + openEndedString + " )   <\/td>";
            strHTML += "        <td style=\"white-space:nowrap;\">" + (openEndedTotal) + "<\/td>";
            strHTML += "        <td style=\"white-space:nowrap;\">Without Skill<\/td>";
            strHTML += "      <\/tr>";

        }



        strHTML += "    <\/tbody>";
        strHTML += "  <\/table>";

        strHTML += "  <hr>";

        // // Passes the final, formatted HTML as a direct message to the chat window.
        sendChat(msg.who, '/direct ' + strHTML);
    } // if
}); // on


function performRoll(msg, previousRoll, canRollLow) {

    var rollResult = {
        total: 0,
        fumble: false,
        history: []
    };

    log(previousRoll);
    var previousTotal = 0;
    if (previousRoll) previousTotal = previousRoll.total;
    log(previousTotal);

    rollResult.total = randomInteger(100);

    rollResult.history.push({
        type: 1,
        roll: rollResult.total,
        message: ''
    });


    if (rollResult.total < 6 && canRollLow) {

        rollResult.history[rollResult.history.length - 1].message = 'You Fumbled';

        rollResult.fumble = true;
        var newResult = performRoll(msg, rollResult, false);
        rollResult.history.push.apply(rollResult.history, newResult.history);
        rollResult.total += newResult.total;

        return rollResult;

    }

    if (rollResult.total == 66 && canRollLow) {

        rollResult.history[rollResult.history.length - 1].message = 'Death Roll';

    }

    if (rollResult.total > 95) {


        rollResult.history[rollResult.history.length - 1].message = 'Rolling Over';


        var newResult = performRoll(msg, rollResult, false);
        rollResult.history.push.apply(rollResult.history, newResult.history);
        rollResult.total += newResult.total;


    }

    return rollResult;


} // performRoll

//walk 3 75 55
function getMovementCost(pace, hexes, sprintSkill, baseRate ) {

  var cost =
  var paceEnum = {
      WALK: 0,
      JOG: 1,
      RUN: 2,
      SPRINT: 3,
      FSPRINT: 4,
      DASH: 5,
      properties: {
        0: {name: "walk", speed: 1},
        1: {name: "jog", speed: 1.5},
        2: {name: "run", speed: 2},
        3: {name: "sprint", speed: 3},
        4: {name: "fsprint", speed: 4},
        5: {name: "dash", speed: 5}
      }
  }
} //getMovementCost

function manueverLookup(pace) {
  rollResult = 
  switch (pace) {
    case 'walk':
      if(rollResult < -201) {
        extraordinaryResultMessage = 'Fall down. You take +2 Hits. Fall. Knock self out. You are out 3 rounds.';
        return 0.0;
      }

      if((rollResult >= -200) && (rollResult <= -151)) {
        extraordinaryResultMessage = 'Fail to Act.';
        return 0.0;
      }

      if((rollResult >= -150) && (rollResult <= -101)) return 0.10;
      if((rollResult >= -100) && (rollResult <= -51)) return 0.30;
      if((rollResult >= -50) && (rollResult <= -26)) return 0.50;
      if((rollResult >= -25) && (rollResult <= -0)) return 0.70;
      if((rollResult >= 1) && (rollResult <= 20)) return 0.80;
      if((rollResult >= 21) && (rollResult <= 40)) return 0.90;
      if((rollResult >= 41) && (rollResult <= 95)) return 1.0;
      if((rollResult >= 96) && (rollResult <= 115)) return 1.10;
      if((rollResult >= 116) && (rollResult <= 135)) return 1.20;
      if((rollResult >= 136) && (rollResult <= 155)) return 1.30;
      if((rollResult >= 156) && (rollResult <= 185)) return 1.40;
      if((rollResult >= 186) && (rollResult <= 275)) return 1.50;
      if(rollResult > 275) {
        extraordinaryResultMessage = 'Incredible move. You feel great. Get back 3 hits';
        return 1.5;
      }
      break;
    case 'jog':
      if (rollResult < -201) {
        extraordinaryResultMessage = 'Fall. Knock self out. You are out for 12 rounds. You take +9 hits.';
        return 0.0;
      }
      if ((rollResult >= -200) && (rollResult <= -151)) {
        extraordinaryResultMessage = 'Fall down. Lose 2 rounds. You take +2 hits.';
        return 0.0;
      }
      if ((rollResult >= -150) && (rollResult <= -101)) {
        extraordinaryResultMessage = 'Fail to act.';
        return 0.0;
      }
      if ((rollResult >= -100) && (rollResult <= -51)) {
        extraordinaryResultMessage = '';
        return 0.10;
      }
      if((rollResult >= -50) && (rollResult <= -26)) {
             extraordinaryResultMessage = '';
             return 0.3;
      }
      if((rollResult >= -25) && (rollResult <= 0)) {
             extraordinaryResultMessage = '';
             return 0.5;
      }
      if((rollResult >= 1) && (rollResult <= 20)) {
             extraordinaryResultMessage = '';
             return 0.6;
      }
      if((rollResult >= 21) && (rollResult <= 40)) {
             extraordinaryResultMessage = '';
             return 0.7;
      }
      if((rollResult >= 41) && (rollResult <= 55)) {
             extraordinaryResultMessage = '';
             return 0.8;
      }
      if((rollResult >= 56) && (rollResult <= 65)) {
             extraordinaryResultMessage = '';
             return 0.9;
      }
      if((rollResult >= 66) && (rollResult <= 105)) {
             extraordinaryResultMessage = '';
             return 1.0;
      }
      if((rollResult >= 106) && (rollResult <= 125)) {
             extraordinaryResultMessage = '';
             return 1.1;
      }
      if((rollResult >= 126) && (rollResult <= 145)) {
             extraordinaryResultMessage = '';
             return 1.2;
      }
      if((rollResult >= 146) && (rollResult <= 165)) {
             extraordinaryResultMessage = '';
             return 1.3;
      }
      if((rollResult >= 166) && (rollResult <= 225)) {
             extraordinaryResultMessage = '';
             return 1.4;
      }
      if((rollResult >= 226) && (rollResult <= 275)) {
             extraordinaryResultMessage = 'Incredible move. You feel great. Get back 3 hits.';
             return 1.4;
      }
      if(rollResult >= 276) {
             extraordinaryResultMessage = 'Brilliant move. Move inspires all. Allies are at +10 for 3 rounds.';
             return 1.4;
      }
      break;
  case 'run':
      if (rollResult < -201) {
        extraordinaryResultMessage = 'Fall. Break arms. You are out for 6 rounds. You take +10 hits.';
        return 0.0;
      }
      if ((rollResult >= -200) && (rollResult <= -151)) {
        extraordinaryResultMessage = 'Fall down. You take +3 hits. You are out for 4 rounds.';
        return 0.0;
      }
      if ((rollResult >= -150) && (rollResult <= -101)) {
        extraordinaryResultMessage = 'Fall down. You take +2 hits. You are out for 2 rounds.';
        return 0.0;
      }
      if ((rollResult >= -100) && (rollResult <= -51)) {
        extraordinaryResultMessage = 'Fail to act.';
        return 0.0;
      }
      if ((rollResult >= -50) && (rollResult <= -26)) {
        extraordinaryResultMessage = '';
        return 0.1;
      }
      if ((rollResult >= -25) && (rollResult <= 0)) {
        extraordinaryResultMessage = '';
        return 0.3;
      }
      if ((rollResult >= 1) && (rollResult <= 20)) {
        extraordinaryResultMessage = '';
        return 0.5;
      }
      if ((rollResult >= 21) && (rollResult <= 40)) {
        extraordinaryResultMessage = '';
        return 0.6;
      }
      if ((rollResult >= 41) && (rollResult <= 55)) {
        extraordinaryResultMessage = '';
        return 0.7;
      }
      if ((rollResult >= 56) && (rollResult <= 65)) {
        extraordinaryResultMessage = '';
        return 0.8;
      }
      if ((rollResult >= 66) && (rollResult <= 75)) {
        extraordinaryResultMessage = '';
        return 0.9;
      }
      if ((rollResult >= 76) && (rollResult <= 115)) {
        extraordinaryResultMessage = '';
        return 1.0;
      }
      if ((rollResult >= 116) && (rollResult <= 135)) {
        extraordinaryResultMessage = '';
        return 1.1;
      }
      if ((rollResult >= 136) && (rollResult <= 165)) {
        extraordinaryResultMessage = '';
        return 1.2;
      }
      if ((rollResult >= 166) && (rollResult <= 165)) {
        extraordinaryResultMessage = '';
        return 1.3;
      }
      if ((rollResult >= 186) && (rollResult <= 225)) {
        extraordinaryResultMessage = 'Great move. You feel better. Get back +4 hits.';
        return 1.3;
      }
      if ((rollResult >= 226) && (rollResult <= 275)) {
        extraordinaryResultMessage = 'Move inspires all. You are unstunned. Allies are at +10 for 2 rounds.';
        return 1.3;
      }
      if (rollResult >= 276) {
        extraordinaryResultMessage = 'Move inspires your allies. +20 to friendly rolls for 2 rounds.';
        return 1.3;
      }
      break;
    case 'sprint':
      if (rollResult < -201) {
        extraordinaryResultMessage = 'Fall. Break arm. You are out for 9 rounds.';
        return 0.0;
      }
      if ((rollResult >= -200) && (rollResult <= -151)) {
        extraordinaryResultMessage = 'Fall. Break wrist. You take +10 hits. You are out for 6 rounds.';
        return 0.0;
      }
      if ((rollResult >= -150) && (rollResult <= -101)) {
        extraordinaryResultMessage = 'Fall down. Sprain ankle. You are at -25. You take +6 hits.';
        return 0.0;
      }
      if ((rollResult >= -100) && (rollResult <= -51)) {
        extraordinaryResultMessage = 'Fall down. Lose 2 rounds. You take +3 hits.';
        return 0.0;
      }
      if ((rollResult >= -50) && (rollResult <= -26)) {
        extraordinaryResultMessage = 'Fail to act.';
        return 0.0;
      }
      if ((rollResult >= -25) && (rollResult <= 0)) {
        extraordinaryResultMessage = '';
        return 0.05;
      }
      if ((rollResult >= 1) && (rollResult <= 20)) {
        extraordinaryResultMessage = '';
        return 0.1;
      }
      if ((rollResult >= 21) && (rollResult <= 40)) {
        extraordinaryResultMessage = '';
        return 0.2;
      }
      if ((rollResult >= 41) && (rollResult <= 55)) {
        extraordinaryResultMessage = '';
        return 0.3;
      }
      if ((rollResult >= 56) && (rollResult <= 65)) {
        extraordinaryResultMessage = '';
        return 0.4;
      }
      if ((rollResult >= 66) && (rollResult <= 75)) {
        extraordinaryResultMessage = '';
        return 0.5;
      }
      if ((rollResult >= 76) && (rollResult <= 85)) {
        extraordinaryResultMessage = '';
        return 0.6;
      }
      if ((rollResult >= 86) && (rollResult <= 95)) {
        extraordinaryResultMessage = '';
        return 0.7;
      }
      if ((rollResult >= 96) && (rollResult <= 105)) {
        extraordinaryResultMessage = '';
        return 0.8;
      }
      if ((rollResult >= 106) && (rollResult <= 115)) {
        extraordinaryResultMessage = '';
        return 0.9;
      }
      if ((rollResult >= 116) && (rollResult <= 135)) {
        extraordinaryResultMessage = '';
        return 1.0;
      }
      if ((rollResult >= 136) && (rollResult <= 145)) {
        extraordinaryResultMessage = '';
        return 1.1;
      }
      if ((rollResult >= 146) && (rollResult <= 165)) {
        extraordinaryResultMessage = '';
        return 1.2;
      }
      if ((rollResult >= 166) && (rollResult <= 185)) {
        extraordinaryResultMessage = 'Super move. You feel great. Get back +4 hits.';
        return 1.2;
      }
      if ((rollResult >= 186) && (rollResult <= 225)) {
        extraordinaryResultMessage = 'Move inspires all. You are unstunned. Allies are at +10 for 2 rounds.';
        return 1.2;
      }
      if ((rollResult >= 226) && (rollResult <= 275)) {
        extraordinaryResultMessage = 'Move inspires your allies. +20 to friendly rolls for 2 rounds.';
        return 1.2;
      }
      if (rollResult >= 276) {
        extraordinaryResultMessage = 'Move inspires your allies. +25 to friendly rolls for 3 rounds.';
        return 1.2;
      }
      break;
    case 'fsprint':
      if (rollResult < -201) {
        extraordinaryResultMessage = 'Fall. Break arms. You are out for 18 rounds. Arms are useless.';
        return 0.0;
      }
      if ((rollResult >= -200) && (rollResult <= -151)) {
        extraordinaryResultMessage = 'Fall. Break leg. You take +20 hits. You are out for 9 rounds.';
        return 0.0;
      }
      if ((rollResult >= -150) && (rollResult <= -101)) {
        extraordinaryResultMessage = 'Fall down. Break arm. You take +10 hits. You are out 6 rounds, and stunned for 3 rounds.';
        return 0.0;
      }
      if ((rollResult >= -100) && (rollResult <= -51)) {
        extraordinaryResultMessage = 'Fall down. Sprain ankle. You are at -25. You take +5 hits.';
        return 0.0;
      }
      if ((rollResult >= -50) && (rollResult <= -26)) {
        extraordinaryResultMessage = 'Fall down. You take +5 hits. You are out 3 rounds.';
        return 0.0;
      }
      if ((rollResult >= -25) && (rollResult <= 0)) {
        extraordinaryResultMessage = 'Fail to act.';
        return 0.0;
      }
      if ((rollResult >= 1) && (rollResult <= 20)) {
        extraordinaryResultMessage = '';
        return 0.05;
      }
      if ((rollResult >= 21) && (rollResult <= 40)) {
        extraordinaryResultMessage = '';
        return 0.1;
      }
      if ((rollResult >= 41) && (rollResult <= 55)) {
        extraordinaryResultMessage = '';
        return 0.2;
      }
      if ((rollResult >= 56) && (rollResult <= 65)) {
        extraordinaryResultMessage = '';
        return 0.3;
      }
      if ((rollResult >= 66) && (rollResult <= 75)) {
        extraordinaryResultMessage = '';
        return 0.4;
      }
      if ((rollResult >= 76) && (rollResult <= 85)) {
        extraordinaryResultMessage = '';
        return 0.5;
      }
      if ((rollResult >= 86) && (rollResult <= 95)) {
        extraordinaryResultMessage = '';
        return 0.6;
      }
      if ((rollResult >= 96) && (rollResult <= 105)) {
        extraordinaryResultMessage = '';
        return 0.7;
      }
      if ((rollResult >= 106) && (rollResult <= 115)) {
        extraordinaryResultMessage = '';
        return 0.8;
      }
      if ((rollResult >= 116) && (rollResult <= 125)) {
        extraordinaryResultMessage = '';
        return 0.9;
      }
      if ((rollResult >= 126) && (rollResult <= 145)) {
        extraordinaryResultMessage = '';
        return 1.0;
      }
      if ((rollResult >= 146) && (rollResult <= 155)) {
        extraordinaryResultMessage = '';
        return 1.1;
      }
      if ((rollResult >= 156) && (rollResult <= 165)) {
        extraordinaryResultMessage = '';
        return 1.2;
      }
      if ((rollResult >= 166) && (rollResult <= 185)) {
        extraordinaryResultMessage = 'Excellent move. You are unstunned. +10 to allies rolls for 2 rounds.';
        return 1.2;
      }
      if ((rollResult >= 186) && (rollResult <= 225)) {
        extraordinaryResultMessage = 'Move inspires your allies. +20 to friendly rolls for 3 rounds.';
        return 1.2;
      }
      if ((rollResult >= 226) && (rollResult <= 275)) {
        extraordinaryResultMessage = 'Move inspires your allies. +25 to friendly rolls for 3 rounds.';
        return 1.2;
      }
      if (rollResult >= 276) {
        extraordinaryResultMessage = 'Move inspires your allies. +30 to friendly rolls for 3 rounds.';
        return 1.2;
      }
      break;
    case 'dash':
      if (rollResult < -201) {
        extraordinaryResultMessage = 'Fall. Break both arms and neck. You are out for 60 rounds. You take +30 hits.';
        return 0.0;
      }
      if ((rollResult >= -200) && (rollResult <= -151)) {
        extraordinaryResultMessage = 'Fall. Break arms. You take +30 hits. You are out for 18 rounds. Arms are useless.';
        return 0.0;
      }
      if ((rollResult >= -150) && (rollResult <= -101)) {
        extraordinaryResultMessage = 'Fall down. Break leg. You take +15 hits. You are out 6 rounds.';
        return 0.0;
      }
      if ((rollResult >= -100) && (rollResult <= -51)) {
        extraordinaryResultMessage = 'Fall. Break wrist. You are out for 2 rounds. Not very smooth.';
        return 0.0;
      }
      if ((rollResult >= -50) && (rollResult <= -26)) {
        extraordinaryResultMessage = 'Fall. Sprain ankle and tear ligament. You take +15 hits. You are at -30.';
        return 0.0;
      }
      if ((rollResult >= -25) && (rollResult <= 0)) {
        extraordinaryResultMessage = 'Fall down. You take +5 hits. You are out for 3 rounds.';
        return 0.0;
      }
      if ((rollResult >= 1) && (rollResult <= 20)) {
        extraordinaryResultMessage = 'Fail to act.';
        return 0.0;
      }
      if ((rollResult >= 21) && (rollResult <= 40)) {
        extraordinaryResultMessage = '';
        return 0.05;
      }
      if ((rollResult >= 41) && (rollResult <= 55)) {
        extraordinaryResultMessage = '';
        return 0.1;
      }
      if ((rollResult >= 56) && (rollResult <= 65)) {
        extraordinaryResultMessage = '';
        return 0.2;
      }
      if ((rollResult >= 66) && (rollResult <= 75)) {
        extraordinaryResultMessage = '';
        return 0.3;
      }
      if ((rollResult >= 76) && (rollResult <= 85)) {
        extraordinaryResultMessage = '';
        return 0.4;
      }
      if ((rollResult >= 86) && (rollResult <= 95)) {
        extraordinaryResultMessage = '';
        return 0.5;
      }
      if ((rollResult >= 96) && (rollResult <= 105)) {
        extraordinaryResultMessage = '';
        return 0.6;
      }
      if ((rollResult >= 106) && (rollResult <= 115)) {
        extraordinaryResultMessage = '';
        return 0.7;
      }
      if ((rollResult >= 116) && (rollResult <= 125)) {
        extraordinaryResultMessage = '';
        return 0.8;
      }
      if ((rollResult >= 126) && (rollResult <= 145)) {
        extraordinaryResultMessage = '';
        return 0.9;
      }
      if ((rollResult >= 146) && (rollResult <= 155)) {
        extraordinaryResultMessage = '';
        return 1.0;
      }
      if ((rollResult >= 156) && (rollResult <= 165)) {
        extraordinaryResultMessage = '';
        return 1.1;
      }
      if ((rollResult >= 166) && (rollResult <= 185)) {
        extraordinaryResultMessage = '';
        return 1.2;
      }
      if ((rollResult >= 186) && (rollResult <= 225)) {
        extraordinaryResultMessage = 'Move inspires your allies. +30 to friendly rolls for 2 rounds.';
        return 1.2;
      }
      if ((rollResult >= 226) && (rollResult <= 275)) {
        extraordinaryResultMessage = 'Move inspires your allies. +30 to friendly rolls for 3 rounds.';
        return 1.2;
      }
      if (rollResult >= 276) {
        extraordinaryResultMessage = 'Move inspires your allies. +30 to friendly rolls for 4 rounds.';
        return 1.2;
      }
      break;
    default:
      extraordinaryResultMessage = 'Failed to look up on the chart. Roll result was: '+rollResult;
      return 0;
  }
}

function movementCost(hexSize, hexes, baseRate, pace, manueverRoll) {
  var initInARound = 200;
  var initCostPerFoot = initInARound / baseRate;
  var initCostPerHex = initCostPerFoot * hexSize;
  var initCostWithPace = initCostPerHex * getPaceRate(pace);
  var initCostWithManuever = initCostWithPace / manueverLookup(pace, manueverRoll);
  return initCostWithManuever * hexes;

}


function getPaceRate(pace) {
  switch(pace) {
    case 'walk': return 1;
      break;
    case 'jog': return 1.5;
      break;
    case 'run': return 2;
      break;
    case ' sprint': return 3;
      break;
    case 'fsprint': return 4;
      break;
    case 'dash': return 5;
      break;
  }
}
