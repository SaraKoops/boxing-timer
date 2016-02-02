$(document).ready(function() {

    $('#start').click(function() {

        // alert('hello im working');

         $("#start").hide();

         $('#wrapper').css("background-image", "url(images/1.jpg)"); 
        
        var seconds = 179; // start at 4 min. 

        function secondPassed() {

            var minutes = Math.round((seconds - 30) / 60);

            var remainingSeconds = seconds % 60;

            if (remainingSeconds < 10) {
                remainingSeconds = "0" + remainingSeconds;
            }

            document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
            if (seconds == 0) { // if the seconds less than 60 than display rest
                clearInterval(countdownTimer);
                document.getElementById('countdown').innerHTML = "Rest"
                $('#wrapper').css("background-image", "url(images/2.jpg)");  
                $("#start").show();



            } else {
                seconds--;
            }

        }

        var countdownTimer = setInterval(secondPassed, 1000);        

    });
  
    });



//timer = setInterval('$("#start").click()', 60000);
