/*
     FILE ARCHIVED ON 23:07:52 May 13, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 9:14:14 Sep 21, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
$(document).ready(function() {
    $('html').bind("touchmove", {}, function(event){
  event.preventDefault();
});
    
    currentTrigger = 0;
    noauto = false;
    nolyrics = false;
    
    if (location.hash == '#nolyrics') {
        nolyrics = true;
    }
    
    if (location.hash == '#noauto' || noauto == true) {
        
        $("#jpId").jPlayer( {
        ready: function () {
            $(this).jPlayer("setMedia", {
                mp3: "res/vilifymp3.mp3", //HTML5 audio for streaming only! Buy the music folks! The National - Exile Vilify
                oga: "res/vilifyogg.ogg" 
            });
        },
        volume: 0.9,
        supplied: "mp3, oga",
        swfPath: "./res/"
    });
    
    noauto = true;
        
    }
    else {
        $("#jpId").jPlayer( {
        ready: function () {
          $(this).jPlayer("setMedia", {
            mp3: "res/vilifymp3.mp3", //HTML5 audio for streaming only! Buy the music folks! The National - Exile Vilify
            oga: "res/vilifyogg.ogg" 
          }).jPlayer("play");
        },
        volume: 0.9,
        supplied: "mp3, oga",
        swfPath: "./res/"
        });
    }
    
  
  
  $('#credits').click(function () {
      if ($(this).text() == 'Credits') {
          $('#creditsbox').fadeIn(500);
          $(this).text('Hide Credits');
      }
      else {
          $('#creditsbox').fadeOut(500);
          $(this).text('Credits');
      }
  })
  
 
    $('#stop').click(function() {
    $('#jpId').jPlayer('stop');
    $('#play').text('play');
    });
    
    $('#play').click(function() {
    $('#jpId').jPlayer('play');
    });
  
  $('#jpId').bind($.jPlayer.event.playing, function(event) {
     $('#play').text('playing');
     startLyrics();
  });
  $('#jpId').bind($.jPlayer.event.loadstart, function(event) {
     $('#play').text('loading...');
  });
  $('#jpId').bind($.jPlayer.event.suspend, function(event) {
     $('#play').text('play');
  });

  
  $('#jpId').bind($.jPlayer.event.ended, function(event) {
     $('#jpId').jPlayer('play');
     $('#play').text('play');
  });
  
  $('#jpId').bind($.jPlayer.event.timeupdate, function(event) {
     $('#time').html($.jPlayer.convertTime(event.jPlayer.status.currentTime));
     
     if (event.jPlayer.status.currentTime >= timings[currentTrigger] && nolyrics != true) {
         fireTrigger(currentTrigger);
         currentTrigger++;
     }
     
     
  });
  
  
function startLyrics () {
    $('#lyrics1 p').hide().css('fontSize', '').removeClass('vilify');
    $('#lyrics2 p').hide().css('fontSize', '');
    currentTrigger = 0;
    
    
}

function fireTrigger(trigger) {
    switch (trigger) {
            case 0:
                $('#lyrics1 p').addClass('vilify').html(lyrics[0]).fadeIn(1500);
                break;
                
            case 1:
                $('#lyrics2 p').html(lyrics[1]).fadeIn(1000).delay(5000).fadeOut(1000);
                $('#lyrics1 p').delay(6000).fadeOut(1000);
                break;
                
            case 2:
                $('#lyrics1 p').fadeIn(1000);
                break;
                
            case 3:
                $('#lyrics2 p').fadeIn(1000).delay(4000).fadeOut(1000);
                $('#lyrics1 p').delay(5000).fadeOut(1000);
                break;
            case 4:
                $('#lyrics1 p').removeClass('vilify').html(lyrics[2]).fadeIn(1000);
                break;
            case 5:
                $('#lyrics2 p').html(lyrics[3]).fadeIn(1000).delay(3000).fadeOut(1000);
                $('#lyrics1 p').delay(4000).fadeOut(1000);
                break;
            case 6:
                $('#lyrics1 p').html(lyrics[4]).fadeIn(1000);
                break;
            case 7:
                $('#lyrics2 p').html(lyrics[5]).fadeIn(1000).delay(4000).fadeOut(1000);
                $('#lyrics1 p').delay(5000).fadeOut(1000);
                break;
            case 8:
                $('#lyrics1 p').addClass('vilify').html(lyrics[0]).fadeIn(1500);
                break;
            case 9:
                $('#lyrics2 p').html(lyrics[1]).fadeIn(1000).delay(5000).fadeOut(1000);
                $('#lyrics1 p').delay(6000).fadeOut(1000);
                break;
            case 10:
                $('#lyrics1 p').html(lyrics[0]).fadeIn(1000);
                break;
            case 11:
                $('#lyrics2 p').html(lyrics[1]).fadeIn(1000).delay(4000).fadeOut(1000);
                $('#lyrics1 p').delay(5000).fadeOut(1000);
                break;
            case 12:
                $('#lyrics1 p').removeClass('vilify').html(lyrics[6]).fadeIn(1000);
                break;
            case 13:
                $('#lyrics2 p').html(lyrics[3]).fadeIn(1000).delay(3000).fadeOut(1000);
                $('#lyrics1 p').delay(4000).fadeOut(1000);
                break;
            case 14:
                $('#lyrics1 p').html(lyrics[4]).fadeIn(1000);
                break;
            case 15:
                $('#lyrics2 p').html(lyrics[5]).fadeIn(1000).delay(3500).fadeOut(1000);
                $('#lyrics1 p').delay(4500).fadeOut(1000);
                break;
            case 16:
                $('#lyrics1 p').html(lyrics[4]).fadeIn(1000).delay(4000).fadeOut(1000);
                break;
            case 17:
                $('#lyrics1 p').html(lyrics[7]).fadeIn(1000);
                break;
            case 18:
                $('#lyrics2 p').html(lyrics[8]).fadeIn(1000).delay(4000).fadeOut(1000);
                $('#lyrics1 p').delay(5000).fadeOut(1000);
                break;
            case 19:
                $('#lyrics1 p').addClass('vilify').html(lyrics[9]).fadeIn(1500);
                break;
            case 20:
                $('#lyrics2 p').html(lyrics[10]).fadeIn(1000).delay(5000).fadeOut(1000);
                $('#lyrics1 p').delay(6000).fadeOut(1000);
                break;
            case 21:
                $('#lyrics1 p').fadeIn(1000);
                break;
            case 22:
                $('#lyrics2 p').fadeIn(1000).delay(5000).fadeOut(1000);
                $('#lyrics1 p').delay(6000).fadeOut(1000);
                break;
            case 23:
                $('#lyrics1 p').removeClass('vilify').html(lyrics[2]).fadeIn(1000);
                break;
            case 24:
                $('#lyrics2 p').html(lyrics[3]).fadeIn(1000).delay(3000).fadeOut(1000);
                $('#lyrics1 p').delay(4000).fadeOut(1000);
                break;
            case 25:
                $('#lyrics1 p').html(lyrics[4]).fadeIn(1000);
                break;
            case 26:
                $('#lyrics2 p').html(lyrics[5]).fadeIn(1000).delay(4000).fadeOut(1000);
                $('#lyrics1 p').delay(5000).fadeOut(1000);
                break;
            case 27:
                $('#lyrics1 p').html(lyrics[4]).fadeIn(1000);
                break;
            case 28:
                $('#lyrics2 p').html(lyrics[11]).fadeIn(1000).delay(4000).fadeOut(1000);
                $('#lyrics1 p').delay(5000).fadeOut(1000);
                break;
            case 29:
                $('#lyrics1 p').addClass('vilify').html(lyrics[9]).fadeIn(1500);
                break;
            case 30:
                $('#lyrics2 p').html(lyrics[10]).fadeIn(1000).delay(4000).fadeOut(1000);
                $('#lyrics1 p').delay(5000).fadeOut(1000);
                break;
            case 31:
                $('#lyrics1 p').fadeIn(1500);
                break;
            case 32:
                $('#lyrics2 p').fadeIn(1000).delay(5000).fadeOut(1000);
                $('#lyrics1 p').delay(6000).fadeOut(1000);
                break;
                
            case 33:
                $('#lyrics1 p').fadeIn(1500);
                break;
            case 34:
                $('#lyrics2 p').fadeIn(1000).delay(4000).fadeOut(1000);
                $('#lyrics1 p').delay(5000).fadeOut(1000);
                break;
            case 35:
                $('#lyrics1 p').fadeIn(1500).delay(5000).fadeOut(4000);
                break;
            case 36:
                $('#lyrics1 p').css('fontSize', '').html('Exile Vilify').fadeIn(1000);
                $('#lyrics2 p').html('The National').fadeIn(1000);
                break;
                
            default:
                break;
        }

}


  
  timings = new Array();
  timings[0] = 11.5;
  timings[1] = 17;
  timings[2] = 24;
  timings[3] = 29;
  timings[4] = 35.5;
  timings[5] = 41.5;
  timings[6] = 47.5;
  timings[7] = 53.5;
  timings[8] = 73.5;
  timings[9] = 78.5;
  timings[10] = 85.5;
  timings[11] = 90.5;
  timings[12] = 97;
  timings[13] = 103;
  timings[14] = 109;
  timings[15] = 115;
  timings[16] = 121;
  timings[17] = 127;
  timings[18] = 130;
  timings[19] = 137.5;
  timings[20] = 143;
  timings[21] = 149.5;
  timings[22] = 155;
  timings[23] = 172;
  timings[24] = 178;
  timings[25] = 184;
  timings[26] = 190;
  timings[27] = 196;
  timings[28] = 202;
  timings[29] = 212.5;
  timings[30] = 218;
  timings[31] = 224.5;
  timings[32] = 230;
  timings[33] = 238;
  timings[34] = 243.5
  timings[35] = 253;
  timings[36] = 268; // credits sequence
  
  /*
   * 
   */
  
  


    lyrics = new Array();
    lyrics[0] = 'Exile';
    lyrics[1] = 'It takes your mind... again';
    lyrics[2] = "You've got sucker's luck";
    lyrics[3] = 'Have you given up?';
    
    lyrics[4] = 'Does it feel like a trial?';
    lyrics[5] = 'Does it trouble your mind <br />&#09;the way you trouble mine?';
    
    lyrics[6] = 'Oh you meant so much...';
    lyrics[7] = "Now you're thinking too fast";
    lyrics[8] = "You're like marbles on glass";
    
    lyrics[9] = 'Vilify';
    lyrics[10] = "Don't even try...";
    
    lyrics[11] = "Did you fall for the same <br />empty answers again?";
    




});
