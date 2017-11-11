/**
 * RM Dice
 * @author Bryan Reynolds
 * @version 0.9
 */

log('-- Loaded Rolemaster Dice! --');
sendChat('RM Dice API', 'Thanks for using RM Dice! type <code>!open 75</code> 75 being your skill.');


/**
 * The core functionality of the script. Intercepts API messages meant for it, extracts the core of the command, and passes it to
 * the appropriate function for handling.
 */
on('chat:message', function (msg) {

    if (msg.type != 'api') return;

    var parts = msg.content.split(' ');
    log(parts);
    var skill = parts[1];
    log(skill);
    
    if (skill == undefined) skill = "0";
    
    log(skill);
    log(msg.content.indexOf(apiWake));
    
    var message =  msg.content.split(' ').slice(2).join(' ');
    


    // theme
    var top = "#667292";
    var left = "#8d9db6";
    var result = "#606060";
    var resultFont = "white";
    var success = "#96ceb4";
    var failure = "#c83349";
    var command = "white";



    var apiWake = '!open';

    if (msg.content.indexOf(apiWake) != -1) {

        log('***********************************');

        var rollResult = performRoll(msg, null, true);
        var skillResult = parseInt(eval(skill));
        var total = parseInt(rollResult.total) + skillResult;

        log(rollResult.history);

        var player = getObj("player", msg.playerid);
        // var outHTML = buildHTML2(rollResult, msg.content,  player.get('color'));


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

    rollResult.total = 2(100);

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

