function manueverLookup(pace, skill) {
  
  var rollAndSkill = performRoll(null, true, null);
  var rollAndSkill  = rollAndSkill.total + skill;
  var extraordinaryResultMessage = '';

  switch (pace) {
    case 'walk':
      if (rollAndSkill < -201) {
        extraordinaryResultMessage = 'Fall down. You take +2 Hits. Fall. Knock self out. You are out 3 rounds.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }

      if ((rollAndSkill >= -200) && (rollAndSkill <= -151)) {
        extraordinaryResultMessage = 'Fail to Act.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }

      if ((rollAndSkill >= -150) && (rollAndSkill <= -101)) return {
        moveCost: 0.1,
        text: extraordinaryResultMessage
      };

      if ((rollAndSkill >= -100) && (rollAndSkill <= -51)) return {
        moveCost: 0.3,
        text: extraordinaryResultMessage
      };

      if ((rollAndSkill >= -50) && (rollAndSkill <= -26)) return {
        moveCost: 0.5,
        text: extraordinaryResultMessage
      };

      if ((rollAndSkill >= -25) && (rollAndSkill <= -0)) return {
        moveCost: 0.7,
        text: extraordinaryResultMessage
      };

      if ((rollAndSkill >= 1) && (rollAndSkill <= 20)) return {
        moveCost: 0.8,
        text: extraordinaryResultMessage
      };

      if ((rollAndSkill >= 21) && (rollAndSkill <= 40)) return {
        moveCost: 0.9,
        text: extraordinaryResultMessage
      };

      if ((rollAndSkill >= 41) && (rollAndSkill <= 95)) return {
        moveCost: 1.0,
        text: extraordinaryResultMessage
      };

      if ((rollAndSkill >= 96) && (rollAndSkill <= 115)) return {
        moveCost: 1.1,
        text: extraordinaryResultMessage
      };

      if ((rollAndSkill >= 116) && (rollAndSkill <= 135)) return {
        moveCost: 1.2,
        text: extraordinaryResultMessage
      };

      if ((rollAndSkill >= 136) && (rollAndSkill <= 155)) return {
        moveCost: 1.3,
        text: extraordinaryResultMessage
      };

      if ((rollAndSkill >= 156) && (rollAndSkill <= 185)) return {
        moveCost: 1.4,
        text: extraordinaryResultMessage
      };

      if ((rollAndSkill >= 186) && (rollAndSkill <= 275)) return {
        moveCost: 1.5,
        text: extraordinaryResultMessage
      };

      if (rollAndSkill > 275) {
        extraordinaryResultMessage = 'Incredible move. You feel great. Get back 3 hits';
        return {
          moveCost: 1.5,
          text: extraordinaryResultMessage
        };
      }

      break;
    case 'jog':
      if (rollAndSkill < -201) {
        extraordinaryResultMessage = 'Fall. Knock self out. You are out for 12 rounds. You take +9 hits.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= -200) && (rollAndSkill <= -151)) {
        extraordinaryResultMessage = 'Fall down. Lose 2 rounds. You take +2 hits.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= -150) && (rollAndSkill <= -101)) {
        extraordinaryResultMessage = 'Fail to act.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= -100) && (rollAndSkill <= -51)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.1,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= -50) && (rollAndSkill <= -26)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.3,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= -25) && (rollAndSkill <= 0)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.5,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 1) && (rollAndSkill <= 20)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.6,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 21) && (rollAndSkill <= 40)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.7,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 41) && (rollAndSkill <= 55)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.8,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 56) && (rollAndSkill <= 65)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.9,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 66) && (rollAndSkill <= 105)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 1.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 106) && (rollAndSkill <= 125)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 1.1,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 126) && (rollAndSkill <= 145)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 1.2,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 146) && (rollAndSkill <= 165)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 1.3,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 166) && (rollAndSkill <= 225)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 1.4,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 226) && (rollAndSkill <= 275)) {
        extraordinaryResultMessage = 'Incredible move. You feel great. Get back 3 hits.';
        return {
          moveCost: 1.4,
          text: extraordinaryResultMessage
        };
      }
      if (rollAndSkill >= 276) {
        extraordinaryResultMessage = 'Brilliant move. Move inspires all. Allies are at +10 for 3 rounds.';
        return {
          moveCost: 1.4,
          text: extraordinaryResultMessage
        };
      }
      break;
    case 'run':
      if (rollAndSkill < -201) {
        extraordinaryResultMessage = 'Fall. Break arms. You are out for 6 rounds. You take +10 hits.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= -200) && (rollAndSkill <= -151)) {
        extraordinaryResultMessage = 'Fall down. You take +3 hits. You are out for 4 rounds.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= -150) && (rollAndSkill <= -101)) {
        extraordinaryResultMessage = 'Fall down. You take +2 hits. You are out for 2 rounds.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= -100) && (rollAndSkill <= -51)) {
        extraordinaryResultMessage = 'Fail to act.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= -50) && (rollAndSkill <= -26)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.1,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= -25) && (rollAndSkill <= 0)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.3,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 1) && (rollAndSkill <= 20)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.5,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 21) && (rollAndSkill <= 40)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.6,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 41) && (rollAndSkill <= 55)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.7,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 56) && (rollAndSkill <= 65)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.8,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 66) && (rollAndSkill <= 75)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.9,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 76) && (rollAndSkill <= 115)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 1.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 116) && (rollAndSkill <= 135)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 1.1,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 136) && (rollAndSkill <= 165)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 1.2,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 166) && (rollAndSkill <= 165)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 1.3,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 186) && (rollAndSkill <= 225)) {
        extraordinaryResultMessage = 'Great move. You feel better. Get back +4 hits.';
        return {
          moveCost: 1.3,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 226) && (rollAndSkill <= 275)) {
        extraordinaryResultMessage = 'Move inspires all. You are unstunned. Allies are at +10 for 2 rounds.';
        return {
          moveCost: 1.3,
          text: extraordinaryResultMessage
        };
      }
      if (rollAndSkill >= 276) {
        extraordinaryResultMessage = 'Move inspires your allies. +20 to friendly rolls for 2 rounds.';
        return {
          moveCost: 1.3,
          text: extraordinaryResultMessage
        };
      }
      break;
    case 'sprint':
      if (rollAndSkill < -201) {
        extraordinaryResultMessage = 'Fall. Break arm. You are out for 9 rounds.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= -200) && (rollAndSkill <= -151)) {
        extraordinaryResultMessage = 'Fall. Break wrist. You take +10 hits. You are out for 6 rounds.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= -150) && (rollAndSkill <= -101)) {
        extraordinaryResultMessage = 'Fall down. Sprain ankle. You are at -25. You take +6 hits.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= -100) && (rollAndSkill <= -51)) {
        extraordinaryResultMessage = 'Fall down. Lose 2 rounds. You take +3 hits.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= -50) && (rollAndSkill <= -26)) {
        extraordinaryResultMessage = 'Fail to act.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= -25) && (rollAndSkill <= 0)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.05,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 1) && (rollAndSkill <= 20)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.1,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 21) && (rollAndSkill <= 40)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.2,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 41) && (rollAndSkill <= 55)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.3,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 56) && (rollAndSkill <= 65)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.4,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 66) && (rollAndSkill <= 75)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.5,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 76) && (rollAndSkill <= 85)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.6,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 86) && (rollAndSkill <= 95)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.7,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 96) && (rollAndSkill <= 105)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.8,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 106) && (rollAndSkill <= 115)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.9,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 116) && (rollAndSkill <= 135)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 1.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 136) && (rollAndSkill <= 145)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 1.1,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 146) && (rollAndSkill <= 165)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 1.2,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 166) && (rollAndSkill <= 185)) {
        extraordinaryResultMessage = 'Super move. You feel great. Get back +4 hits.';
        return {
          moveCost: 1.2,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 186) && (rollAndSkill <= 225)) {
        extraordinaryResultMessage = 'Move inspires all. You are unstunned. Allies are at +10 for 2 rounds.';
        return {
          moveCost: 1.2,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 226) && (rollAndSkill <= 275)) {
        extraordinaryResultMessage = 'Move inspires your allies. +20 to friendly rolls for 2 rounds.';
        return {
          moveCost: 1.2,
          text: extraordinaryResultMessage
        };
      }
      if (rollAndSkill >= 276) {
        extraordinaryResultMessage = 'Move inspires your allies. +25 to friendly rolls for 3 rounds.';
        return {
          moveCost: 1.2,
          text: extraordinaryResultMessage
        };
      }
      break;
    case 'fsprint':
      if (rollAndSkill < -201) {
        extraordinaryResultMessage = 'Fall. Break arms. You are out for 18 rounds. Arms are useless.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= -200) && (rollAndSkill <= -151)) {
        extraordinaryResultMessage = 'Fall. Break leg. You take +20 hits. You are out for 9 rounds.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= -150) && (rollAndSkill <= -101)) {
        extraordinaryResultMessage = 'Fall down. Break arm. You take +10 hits. You are out 6 rounds, and stunned for 3 rounds.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= -100) && (rollAndSkill <= -51)) {
        extraordinaryResultMessage = 'Fall down. Sprain ankle. You are at -25. You take +5 hits.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= -50) && (rollAndSkill <= -26)) {
        extraordinaryResultMessage = 'Fall down. You take +5 hits. You are out 3 rounds.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= -25) && (rollAndSkill <= 0)) {
        extraordinaryResultMessage = 'Fail to act.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 1) && (rollAndSkill <= 20)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.05,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 21) && (rollAndSkill <= 40)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.1,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 41) && (rollAndSkill <= 55)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.2,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 56) && (rollAndSkill <= 65)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.3,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 66) && (rollAndSkill <= 75)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.4,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 76) && (rollAndSkill <= 85)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.5,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 86) && (rollAndSkill <= 95)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.6,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 96) && (rollAndSkill <= 105)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.7,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 106) && (rollAndSkill <= 115)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.8,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 116) && (rollAndSkill <= 125)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.9,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 126) && (rollAndSkill <= 145)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 1.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 146) && (rollAndSkill <= 155)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 1.1,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 156) && (rollAndSkill <= 165)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 1.2,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 166) && (rollAndSkill <= 185)) {
        extraordinaryResultMessage = 'Excellent move. You are unstunned. +10 to allies rolls for 2 rounds.';
        return {
          moveCost: 1.2,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 186) && (rollAndSkill <= 225)) {
        extraordinaryResultMessage = 'Move inspires your allies. +20 to friendly rolls for 3 rounds.';
        return {
          moveCost: 1.2,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 226) && (rollAndSkill <= 275)) {
        extraordinaryResultMessage = 'Move inspires your allies. +25 to friendly rolls for 3 rounds.';
        return {
          moveCost: 1.2,
          text: extraordinaryResultMessage
        };
      }
      if (rollAndSkill >= 276) {
        extraordinaryResultMessage = 'Move inspires your allies. +30 to friendly rolls for 3 rounds.';
        return {
          moveCost: 1.2,
          text: extraordinaryResultMessage
        };
      }
      break;
    case 'dash':
      if (rollAndSkill < -201) {
        extraordinaryResultMessage = 'Fall. Break both arms and neck. You are out for 60 rounds. You take +30 hits.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= -200) && (rollAndSkill <= -151)) {
        extraordinaryResultMessage = 'Fall. Break arms. You take +30 hits. You are out for 18 rounds. Arms are useless.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= -150) && (rollAndSkill <= -101)) {
        extraordinaryResultMessage = 'Fall down. Break leg. You take +15 hits. You are out 6 rounds.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= -100) && (rollAndSkill <= -51)) {
        extraordinaryResultMessage = 'Fall. Break wrist. You are out for 2 rounds. Not very smooth.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= -50) && (rollAndSkill <= -26)) {
        extraordinaryResultMessage = 'Fall. Sprain ankle and tear ligament. You take +15 hits. You are at -30.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= -25) && (rollAndSkill <= 0)) {
        extraordinaryResultMessage = 'Fall down. You take +5 hits. You are out for 3 rounds.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 1) && (rollAndSkill <= 20)) {
        extraordinaryResultMessage = 'Fail to act.';
        return {
          moveCost: 0.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 21) && (rollAndSkill <= 40)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.05,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 41) && (rollAndSkill <= 55)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.1,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 56) && (rollAndSkill <= 65)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.2,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 66) && (rollAndSkill <= 75)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.3,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 76) && (rollAndSkill <= 85)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.4,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 86) && (rollAndSkill <= 95)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.5,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 96) && (rollAndSkill <= 105)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.6,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 106) && (rollAndSkill <= 115)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.7,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 116) && (rollAndSkill <= 125)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.8,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 126) && (rollAndSkill <= 145)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 0.9,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 146) && (rollAndSkill <= 155)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 1.0,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 156) && (rollAndSkill <= 165)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 1.1,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 166) && (rollAndSkill <= 185)) {
        extraordinaryResultMessage = '';
        return {
          moveCost: 1.2,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 186) && (rollAndSkill <= 225)) {
        extraordinaryResultMessage = 'Move inspires your allies. +30 to friendly rolls for 2 rounds.';
        return {
          moveCost: 1.2,
          text: extraordinaryResultMessage
        };
      }
      if ((rollAndSkill >= 226) && (rollAndSkill <= 275)) {
        extraordinaryResultMessage = 'Move inspires your allies. +30 to friendly rolls for 3 rounds.';
        return {
          moveCost: 1.2,
          text: extraordinaryResultMessage
        };
      }
      if (rollAndSkill >= 276) {
        extraordinaryResultMessage = 'Move inspires your allies. +30 to friendly rolls for 4 rounds.';
        return {
          moveCost: 1.2,
          text: extraordinaryResultMessage
        };
      }
      break;
    default:
      extraordinaryResultMessage = 'Failed to look up on the chart. Roll result was: ' + rollAndSkill;
      return 0;
  }
}

export function movementCost(hexSize, hexes, baseRate, pace, skill) {
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


function getPaceRate(pace) {
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

function performRoll(previousRoll, canRollLow, loggerFunction) {
  
    var rollResult = {
      total: 0,
      fumble: false,
      history: []
    };
  
    if (loggerFunction) loggerFunction(previousRoll);
  
    var previousTotal = 0;
  
    if (previousRoll) previousTotal = previousRoll.total;
  
    if (loggerFunction) loggerFunction(previousTotal);
  
  
    rollResult.total = randomInteger(100);
  
    rollResult.history.push({
      type: 1,
      roll: rollResult.total,
      message: ''
    });
  
  
    if (rollResult.total < 6 && canRollLow) {
  
      rollResult.history[rollResult.history.length - 1].message = 'You Fumbled';
  
      rollResult.fumble = true;
      var newResult =performRoll(rollResult, false);
      rollResult.history.push.apply(rollResult.history, newResult.history);
      rollResult.total += newResult.total;
  
      return rollResult;
  
    }
  
    if (rollResult.total == 66 && canRollLow) {
  
      rollResult.history[rollResult.history.length - 1].message = 'Death Roll';
  
    }
  
    if (rollResult.total > 95) {
  
  
      rollResult.history[rollResult.history.length - 1].message = 'Rolling Over';
  
  
      var newResult = performRoll(rollResult, false);
      rollResult.history.push.apply(rollResult.history, newResult.history);
      rollResult.total += newResult.total;
  
  
    }
  
    return rollResult;
  
  
  } // performRoll
  
function randomInteger(max) {

  return Math.random() * (max - 1) + 1;

}
