$(document).ready(function () {
    var allChannels = [
        "freecodecamp",
        "storbeck", 
        "terakilobyte", 
        "habathcx",
        "RobotCaleb",
        "thomasballinger",
        "noobs2ninjas",
        "beohoff",
        "streamerhouse",
    "idonoteexi404"];
  for (i = 0; i < allChannels.length; i++) {
    findChannel(allChannels[i]);

    // get every channel name to push into the findChannel function
  }
});
//Add client ID for this to work again. http://forum.freecodecamp.com/t/problem-with-client-id-in-twitchtv-project/37361/5
function findChannel(channel) {
  $.getJSON('https://api.twitch.tv/kraken/streams/' + channel + '?callback=?', function(data) {
       var status;
    if (data.stream !== null && data.stream !== undefined) {
     status = "online";
     var game = data.stream.game; 
     var logo = data.stream.channel.logo;
      
      var userName = '<div class="user online" id="'+ channel +'"><img class="logo" src="' + logo + '"><p class="text">' + '<a target="_blank" href="https://www.twitch.tv/' +channel + '">' + channel + '</a>' + ' | ' + game + '</p></div>';
   $('.main').append(userName);
    } 
    else if (data.stream == null && data.stream !== undefined) {
       status = "offline";
      var noLogo = "http://i.imgur.com/x9R5XUw.png";
        var userName = '<div class="user offline" id="'+ channel +'"><img class="logo" src="' + noLogo + '"><p class="text">' + '<a target="_blank" href="https://www.twitch.tv/' +channel + '">' +  channel + '</a>' + " is currently offline :&lpar;" + '</p></div>'
   $('.main').append(userName);
    }
    else {
      status = "_404";
       var noLogo = "http://i.imgur.com/x9R5XUw.png";
      var userName = '<div class="user _404"><img class="logo" src="' + noLogo +'"><p class="text">' + channel + " " + 'does not exist</p></div>'
   $('.main').append(userName);
    }
   
});
  
}

/*

FOR ONLINE ONLY

*/

function online() {
  var allChannels = [
        "freecodecamp",
        "storbeck", 
        "terakilobyte", 
        "habathcx",
        "RobotCaleb",
        "thomasballinger",
        "noobs2ninjas",
        "beohoff",
        "streamerhouse",
        "idonoteexi404"];
   for (i = 0; i < allChannels.length; i++) { 
     showOnline(allChannels[i]);
   }
  
  function showOnline(channel) {
    $('.main').empty();
    $.getJSON('https://api.twitch.tv/kraken/streams/' + channel + '?callback=?', function(data) {
        var status;
    if (data.stream !== null && data.stream !== undefined) {
     status = "online";
     var game = data.stream.game; 
     var logo = data.stream.channel.logo;
      
      var userName = '<div class="user online" id="'+ channel +'"><img class="logo" src="' + logo + '"><p class="text">' + '<a target="_blank" href="https://www.twitch.tv/' +channel + '">' + channel + '</a>' + ' | ' + game + '</p></div>';
   $('.main').append(userName);
    }
    });
  }
  
}

/*

FOR OFFLINE ONLY

*/
function offline() {
   var allChannels = [
        "freecodecamp",
        "storbeck", 
        "terakilobyte", 
        "habathcx",
        "RobotCaleb",
        "thomasballinger",
        "noobs2ninjas",
        "beohoff",
        "streamerhouse",
        "idonoteexi404"];
   for (i = 0; i < allChannels.length; i++) { 
     showOffline(allChannels[i]);
   }
  function showOffline(channel) {
    $('.main').empty();
    $.getJSON('https://api.twitch.tv/kraken/streams/' + channel + '?callback=?', function(data) {
      if (data.stream == null && data.stream !== undefined) {
       status = "offline";
      var noLogo = "http://i.imgur.com/x9R5XUw.png";
        var userName = '<div class="user offline" id="'+ channel +'"><img class="logo" src="' + noLogo + '"><p class="text">' + '<a target="_blank" href="https://www.twitch.tv/' +channel + '">' +  channel + '</a>' + " is currently offline :&lpar;" + '</p></div>'
   $('.main').append(userName);
    }
    });
  }
}

/*

SHOW ALL

*/
function allUsers() {
  console.log("hello wor");
  var allChannels = [
        "freecodecamp",
        "storbeck", 
        "terakilobyte", 
        "habathcx",
        "RobotCaleb",
        "thomasballinger",
        "noobs2ninjas",
        "beohoff",
        "streamerhouse",
        "idonoteexi404"];
   for (i = 0; i < allChannels.length; i++) { 
     $('.main').empty();
     console.log("hello");
     findChannel(allChannels[i]);
   }
}
