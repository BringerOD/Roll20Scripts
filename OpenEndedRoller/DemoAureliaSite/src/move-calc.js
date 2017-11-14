/**
 * RM2 Movement Calculator
 * @author Peter Sotos
 * @version 1.0
 */
export default class MoveCalc {
  test(msg) {
    log('-- Loaded Rolemaster Movement Calculator! --');
    //sendChat('RM2 Movement Calculator API', 'Thanks for using RM2 MMC! type <code>!move5 walk 3 75 55</code> walk being the pace, 3 being the number of hexes you wish to move, 75 being your sprinting skill, 55 being your base movement rate. Possible movement rates are: walk, jog, run, sprint, fsprint, dash.');


    /**
     * The core functionality of the script. Intercepts API messages meant for it, extracts the core of the command, and passes it to
     * the appropriate function for handling.
     */
    message(msg);

    // on
  }

  message(msg) {

    if (msg.type != 'api') return;

    var parts = msg.content.split(' ');
    log(parts);
    var pace = parts[1];
    pace = str.tolowercase(pace);
    log(pace);

    var hexes = parts[2];
    log(hexes);

    var skill = parts[3];

    if (skill === undefined) skill = "0";
    log(skill);

    var baseRate = parts[4];

    log(msg.content.indexOf(apiWake));

    var message = msg.content.split(' ').slice(2).join(' ');


    // theme
    var top = "#667292";
    var left = "#8d9db6";
    var result = "#606060";
    var resultFont = "white";
    var success = "#96ceb4";
    var failure = "#c83349";
    var command = "white";


    var apiWake = '!move5';

    if (msg.content.indexOf(apiWake) !== -1) {

      log('***********************************');

      //var rollResult = performRoll(msg, null, true);
      //var skillResult = parseInt(eval(skill));
      //var total = parseInt(rollResult.total) + skillResult;
      var moveResult = movementCost(5, hexes, baseRate, pace, skill);

      //log(rollResult.history);

      var player = getObj("player", msg.playerid);
      // var outHTML = buildHTML2(rollResult, msg.content,  player.get('color'));

      /**
       In RM there are 200 initiative points in a round. So a person With
       a base movement of 55 would take 200 initiative points to move
       55 feet at a walk.
       */


      var strHTML = "<hr>";
      strHTML += "      <div>";
      strHTML += "        " + msg.content + "<br>"
      strHTML += "        " + moveResult.move + "<br>"
      strHTML += "        " + moveResult.msg + "<br>"
      strHTML += "      <\/div>";


      // // Passes the final, formatted HTML as a direct message to the chat window.
      sendChat(msg.who, '/direct ' + strHTML);
    } // if
  }

  log(text) {
    console.log(text);
  }

  manueverLookup(pace, skill) {
    var rollResult = performRoll(null, true, null) + skill;
    var extraordinaryResultMessage = '';

    switch (pace) {
      case 'walk':
        if (rollResult < -201) {
          extraordinaryResultMessage = 'Fall down. You take +2 Hits. Fall. Knock self out. You are out 3 rounds.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }

        if ((rollResult >= -200) && (rollResult <= -151)) {
          extraordinaryResultMessage = 'Fail to Act.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }

        if ((rollResult >= -150) && (rollResult <= -101)) return {
          moveCost: 0.1,
          text: extraordinaryResultMessage
        };

        if ((rollResult >= -100) && (rollResult <= -51)) return {
          moveCost: 0.3,
          text: extraordinaryResultMessage
        };

        if ((rollResult >= -50) && (rollResult <= -26)) return {
          moveCost: 0.5,
          text: extraordinaryResultMessage
        };

        if ((rollResult >= -25) && (rollResult <= -0)) return {
          moveCost: 0.7,
          text: extraordinaryResultMessage
        };

        if ((rollResult >= 1) && (rollResult <= 20)) return {
          moveCost: 0.8,
          text: extraordinaryResultMessage
        };

        if ((rollResult >= 21) && (rollResult <= 40)) return {
          moveCost: 0.9,
          text: extraordinaryResultMessage
        };

        if ((rollResult >= 41) && (rollResult <= 95)) return {
          moveCost: 1.0,
          text: extraordinaryResultMessage
        };

        if ((rollResult >= 96) && (rollResult <= 115)) return {
          moveCost: 1.1,
          text: extraordinaryResultMessage
        };

        if ((rollResult >= 116) && (rollResult <= 135)) return {
          moveCost: 1.2,
          text: extraordinaryResultMessage
        };

        if ((rollResult >= 136) && (rollResult <= 155)) return {
          moveCost: 1.3,
          text: extraordinaryResultMessage
        };

        if ((rollResult >= 156) && (rollResult <= 185)) return {
          moveCost: 1.4,
          text: extraordinaryResultMessage
        };

        if ((rollResult >= 186) && (rollResult <= 275)) return {
          moveCost: 1.5,
          text: extraordinaryResultMessage
        };

        if (rollResult > 275) {
          extraordinaryResultMessage = 'Incredible move. You feel great. Get back 3 hits';
          return {
            moveCost: 1.5,
            text: extraordinaryResultMessage
          };
        }

        break;
      case 'jog':
        if (rollResult < -201) {
          extraordinaryResultMessage = 'Fall. Knock self out. You are out for 12 rounds. You take +9 hits.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= -200) && (rollResult <= -151)) {
          extraordinaryResultMessage = 'Fall down. Lose 2 rounds. You take +2 hits.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= -150) && (rollResult <= -101)) {
          extraordinaryResultMessage = 'Fail to act.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= -100) && (rollResult <= -51)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.1,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= -50) && (rollResult <= -26)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.3,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= -25) && (rollResult <= 0)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.5,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 1) && (rollResult <= 20)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.6,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 21) && (rollResult <= 40)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.7,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 41) && (rollResult <= 55)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.8,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 56) && (rollResult <= 65)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.9,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 66) && (rollResult <= 105)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 1.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 106) && (rollResult <= 125)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 1.1,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 126) && (rollResult <= 145)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 1.2,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 146) && (rollResult <= 165)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 1.3,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 166) && (rollResult <= 225)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 1.4,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 226) && (rollResult <= 275)) {
          extraordinaryResultMessage = 'Incredible move. You feel great. Get back 3 hits.';
          return {
            moveCost: 1.4,
            text: extraordinaryResultMessage
          };
        }
        if (rollResult >= 276) {
          extraordinaryResultMessage = 'Brilliant move. Move inspires all. Allies are at +10 for 3 rounds.';
          return {
            moveCost: 1.4,
            text: extraordinaryResultMessage
          };
        }
        break;
      case 'run':
        if (rollResult < -201) {
          extraordinaryResultMessage = 'Fall. Break arms. You are out for 6 rounds. You take +10 hits.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= -200) && (rollResult <= -151)) {
          extraordinaryResultMessage = 'Fall down. You take +3 hits. You are out for 4 rounds.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= -150) && (rollResult <= -101)) {
          extraordinaryResultMessage = 'Fall down. You take +2 hits. You are out for 2 rounds.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= -100) && (rollResult <= -51)) {
          extraordinaryResultMessage = 'Fail to act.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= -50) && (rollResult <= -26)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.1,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= -25) && (rollResult <= 0)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.3,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 1) && (rollResult <= 20)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.5,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 21) && (rollResult <= 40)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.6,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 41) && (rollResult <= 55)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.7,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 56) && (rollResult <= 65)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.8,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 66) && (rollResult <= 75)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.9,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 76) && (rollResult <= 115)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 1.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 116) && (rollResult <= 135)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 1.1,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 136) && (rollResult <= 165)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 1.2,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 166) && (rollResult <= 165)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 1.3,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 186) && (rollResult <= 225)) {
          extraordinaryResultMessage = 'Great move. You feel better. Get back +4 hits.';
          return {
            moveCost: 1.3,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 226) && (rollResult <= 275)) {
          extraordinaryResultMessage = 'Move inspires all. You are unstunned. Allies are at +10 for 2 rounds.';
          return {
            moveCost: 1.3,
            text: extraordinaryResultMessage
          };
        }
        if (rollResult >= 276) {
          extraordinaryResultMessage = 'Move inspires your allies. +20 to friendly rolls for 2 rounds.';
          return {
            moveCost: 1.3,
            text: extraordinaryResultMessage
          };
        }
        break;
      case 'sprint':
        if (rollResult < -201) {
          extraordinaryResultMessage = 'Fall. Break arm. You are out for 9 rounds.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= -200) && (rollResult <= -151)) {
          extraordinaryResultMessage = 'Fall. Break wrist. You take +10 hits. You are out for 6 rounds.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= -150) && (rollResult <= -101)) {
          extraordinaryResultMessage = 'Fall down. Sprain ankle. You are at -25. You take +6 hits.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= -100) && (rollResult <= -51)) {
          extraordinaryResultMessage = 'Fall down. Lose 2 rounds. You take +3 hits.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= -50) && (rollResult <= -26)) {
          extraordinaryResultMessage = 'Fail to act.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= -25) && (rollResult <= 0)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.05,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 1) && (rollResult <= 20)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.1,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 21) && (rollResult <= 40)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.2,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 41) && (rollResult <= 55)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.3,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 56) && (rollResult <= 65)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.4,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 66) && (rollResult <= 75)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.5,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 76) && (rollResult <= 85)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.6,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 86) && (rollResult <= 95)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.7,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 96) && (rollResult <= 105)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.8,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 106) && (rollResult <= 115)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.9,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 116) && (rollResult <= 135)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 1.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 136) && (rollResult <= 145)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 1.1,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 146) && (rollResult <= 165)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 1.2,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 166) && (rollResult <= 185)) {
          extraordinaryResultMessage = 'Super move. You feel great. Get back +4 hits.';
          return {
            moveCost: 1.2,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 186) && (rollResult <= 225)) {
          extraordinaryResultMessage = 'Move inspires all. You are unstunned. Allies are at +10 for 2 rounds.';
          return {
            moveCost: 1.2,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 226) && (rollResult <= 275)) {
          extraordinaryResultMessage = 'Move inspires your allies. +20 to friendly rolls for 2 rounds.';
          return {
            moveCost: 1.2,
            text: extraordinaryResultMessage
          };
        }
        if (rollResult >= 276) {
          extraordinaryResultMessage = 'Move inspires your allies. +25 to friendly rolls for 3 rounds.';
          return {
            moveCost: 1.2,
            text: extraordinaryResultMessage
          };
        }
        break;
      case 'fsprint':
        if (rollResult < -201) {
          extraordinaryResultMessage = 'Fall. Break arms. You are out for 18 rounds. Arms are useless.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= -200) && (rollResult <= -151)) {
          extraordinaryResultMessage = 'Fall. Break leg. You take +20 hits. You are out for 9 rounds.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= -150) && (rollResult <= -101)) {
          extraordinaryResultMessage = 'Fall down. Break arm. You take +10 hits. You are out 6 rounds, and stunned for 3 rounds.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= -100) && (rollResult <= -51)) {
          extraordinaryResultMessage = 'Fall down. Sprain ankle. You are at -25. You take +5 hits.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= -50) && (rollResult <= -26)) {
          extraordinaryResultMessage = 'Fall down. You take +5 hits. You are out 3 rounds.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= -25) && (rollResult <= 0)) {
          extraordinaryResultMessage = 'Fail to act.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 1) && (rollResult <= 20)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.05,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 21) && (rollResult <= 40)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.1,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 41) && (rollResult <= 55)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.2,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 56) && (rollResult <= 65)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.3,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 66) && (rollResult <= 75)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.4,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 76) && (rollResult <= 85)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.5,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 86) && (rollResult <= 95)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.6,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 96) && (rollResult <= 105)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.7,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 106) && (rollResult <= 115)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.8,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 116) && (rollResult <= 125)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.9,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 126) && (rollResult <= 145)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 1.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 146) && (rollResult <= 155)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 1.1,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 156) && (rollResult <= 165)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 1.2,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 166) && (rollResult <= 185)) {
          extraordinaryResultMessage = 'Excellent move. You are unstunned. +10 to allies rolls for 2 rounds.';
          return {
            moveCost: 1.2,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 186) && (rollResult <= 225)) {
          extraordinaryResultMessage = 'Move inspires your allies. +20 to friendly rolls for 3 rounds.';
          return {
            moveCost: 1.2,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 226) && (rollResult <= 275)) {
          extraordinaryResultMessage = 'Move inspires your allies. +25 to friendly rolls for 3 rounds.';
          return {
            moveCost: 1.2,
            text: extraordinaryResultMessage
          };
        }
        if (rollResult >= 276) {
          extraordinaryResultMessage = 'Move inspires your allies. +30 to friendly rolls for 3 rounds.';
          return {
            moveCost: 1.2,
            text: extraordinaryResultMessage
          };
        }
        break;
      case 'dash':
        if (rollResult < -201) {
          extraordinaryResultMessage = 'Fall. Break both arms and neck. You are out for 60 rounds. You take +30 hits.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= -200) && (rollResult <= -151)) {
          extraordinaryResultMessage = 'Fall. Break arms. You take +30 hits. You are out for 18 rounds. Arms are useless.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= -150) && (rollResult <= -101)) {
          extraordinaryResultMessage = 'Fall down. Break leg. You take +15 hits. You are out 6 rounds.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= -100) && (rollResult <= -51)) {
          extraordinaryResultMessage = 'Fall. Break wrist. You are out for 2 rounds. Not very smooth.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= -50) && (rollResult <= -26)) {
          extraordinaryResultMessage = 'Fall. Sprain ankle and tear ligament. You take +15 hits. You are at -30.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= -25) && (rollResult <= 0)) {
          extraordinaryResultMessage = 'Fall down. You take +5 hits. You are out for 3 rounds.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 1) && (rollResult <= 20)) {
          extraordinaryResultMessage = 'Fail to act.';
          return {
            moveCost: 0.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 21) && (rollResult <= 40)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.05,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 41) && (rollResult <= 55)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.1,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 56) && (rollResult <= 65)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.2,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 66) && (rollResult <= 75)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.3,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 76) && (rollResult <= 85)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.4,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 86) && (rollResult <= 95)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.5,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 96) && (rollResult <= 105)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.6,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 106) && (rollResult <= 115)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.7,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 116) && (rollResult <= 125)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.8,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 126) && (rollResult <= 145)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 0.9,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 146) && (rollResult <= 155)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 1.0,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 156) && (rollResult <= 165)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 1.1,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 166) && (rollResult <= 185)) {
          extraordinaryResultMessage = '';
          return {
            moveCost: 1.2,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 186) && (rollResult <= 225)) {
          extraordinaryResultMessage = 'Move inspires your allies. +30 to friendly rolls for 2 rounds.';
          return {
            moveCost: 1.2,
            text: extraordinaryResultMessage
          };
        }
        if ((rollResult >= 226) && (rollResult <= 275)) {
          extraordinaryResultMessage = 'Move inspires your allies. +30 to friendly rolls for 3 rounds.';
          return {
            moveCost: 1.2,
            text: extraordinaryResultMessage
          };
        }
        if (rollResult >= 276) {
          extraordinaryResultMessage = 'Move inspires your allies. +30 to friendly rolls for 4 rounds.';
          return {
            moveCost: 1.2,
            text: extraordinaryResultMessage
          };
        }
        break;
      default:
        extraordinaryResultMessage = 'Failed to look up on the chart. Roll result was: ' + rollResult;
        return 0;
    }
  }

  movementCost(hexSize, hexes, baseRate, pace, skill) {
    var initInARound = 200;
    var initCostPerFoot = initInARound / baseRate;
    var initCostPerHex = initCostPerFoot * hexSize;
    var initCostWithPace = initCostPerHex * getPaceRate(pace);
    var manueverResult = manueverLookup(pace, skill);
    var initCostWithManuever = initCostWithPace / manueverResult.moveCost;
    var finalMoveCost = initCostWithManuever * hexes;

    return {
      msg: manueverResult.text,
      move: finalMoveCost
    };


  }


  getPaceRate(pace) {
    switch (pace) {
      case 'walk':
        return 1;
        break;
      case 'jog':
        return 1.5;
        break;
      case 'run':
        return 2;
        break;
      case ' sprint':
        return 3;
        break;
      case 'fsprint':
        return 4;
        break;
      case 'dash':
        return 5;
        break;
    }
  }

  performRoll(previousRoll, canRollLow, loggerFunction) {

    var rollResult = {
      total: 0,
      fumble: false,
      history: []
    };

    if (loggerFunction) loggerFunction(previousRoll);

    var previousTotal = 0;

    if (previousRoll) previousTotal = previousRoll.total;

    if (loggerFunction) loggerFunction(previousTotal);


    rollResult.total = this.randomInteger(100);

    rollResult.history.push({
      type: 1,
      roll: rollResult.total,
      message: ''
    });


    if (rollResult.total < 6 && canRollLow) {

      rollResult.history[rollResult.history.length - 1].message = 'You Fumbled';

      rollResult.fumble = true;
      var newResult = this.performRoll(rollResult, false);
      rollResult.history.push.apply(rollResult.history, newResult.history);
      rollResult.total += newResult.total;

      return rollResult;

    }

    if (rollResult.total == 66 && canRollLow) {

      rollResult.history[rollResult.history.length - 1].message = 'Death Roll';

    }

    if (rollResult.total > 95) {


      rollResult.history[rollResult.history.length - 1].message = 'Rolling Over';


      var newResult = this.performRoll(rollResult, false);
      rollResult.history.push.apply(rollResult.history, newResult.history);
      rollResult.total += newResult.total;


    }

    return rollResult;


  } // performRoll

  randomInteger(max) {

    return Math.random() * (max - 1) + 1;

  }
}
