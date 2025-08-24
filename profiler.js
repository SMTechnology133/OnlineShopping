//modal code
$(document).ready(function() 
{ 
$("#myModal").modal('hide'); 
}); 

//_______________________________

//popover  code
$(function(){
$('[data-toggle="popover"]').popover ()
})

//_______________________________

//tooltip code
$(function(){
$('[data-toggle="tooltip"]').tooltip()
})

//_______________________________

//custom alert box script
  function showAlert(message) {
    document.getElementById("alertMessage").textContent = message;
    document.getElementById("customAlert").style.display = "block";
    document.getElementById("overlay").style.display = "block";

    // Play the alert sound
    const sound = document.getElementById("alertSound");
    sound.currentTime = 0;
    sound.play();
  }

  function closeAlert() {
    document.getElementById("customAlert").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }
//end custom alert box script

//_______________________________

//code to show update time on advert one
  // Set the post time
  const postTime = new Date('2025-07-08T14:00:00'); // Example date

  function timeAgo(time) {
    const now = new Date();
    const seconds = Math.floor((now - time) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours   = Math.floor(minutes / 60);
    const days    = Math.floor(hours / 24);
    const months  = Math.floor(days / 30);
    const years   = Math.floor(days / 365);

    if (seconds < 60)
      return ` ${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    else if (minutes < 60)
      return ` ${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    else if (hours < 24)
      return ` ${hours} hour${hours !== 1 ? 's' : ''} ago`;
    else if (days < 30)
      return ` ${days} day${days !== 1 ? 's' : ''} ago`;
    else if (days < 365)
      return ` ${months} month${months !== 1 ? 's' : ''} ago`;
    else
      return ` ${years} year${years !== 1 ? 's' : ''} ago`;
  }

  function updateTimestamp() {
    document.getElementById('advert1').textContent = timeAgo(postTime);
  }

  updateTimestamp(); // Initial call
  setInterval(updateTimestamp, 30000); // Update every 30 seconds
//end code to show update time on advert one
//_______________________________


//toggle question code 1
$(document).ready(function() 
{ 

$("#shbtn0").click(function() 
{ 

$("#d0").toggle(); 

}); 

}); 
//_______________________________


//toggle question code 1
$(document).ready(function() 
{ 

$("#shbtn1").click(function() 
{ 

$("#d1").toggle(); 

}); 

}); 

//_______________________________

//toggle question code 2
$(document).ready(function() 
{ 

$("#shbtn2").click(function() 
{ 

$("#d2").toggle(); 

}); 

}); 

//_______________________________

//toggle question code 3
$(document).ready(function() 
{ 

$("#shbtn3").click(function() 
{ 

$("#d3").toggle(); 

}); 

}); 

//_______________________________

//toggle question code 4
$(document).ready(function() 
{ 

$("#shbtn4").click(function() 
{ 

$("#d4").toggle(); 

}); 

}); 

//_______________________________

//toggle question code 5
$(document).ready(function() 
{ 

$("#shbtn5").click(function() 
{ 

$("#d5").toggle(); 

}); 

}); 

//_______________________________

//toggle question code 6
$(document).ready(function() 
{ 

$("#shbtn6").click(function() 
{ 

$("#d6").toggle(); 

}); 

}); 

//_______________________________

//toggle question code 7
$(document).ready(function() 
{ 

$("#shbtn7").click(function() 
{ 

$("#d7").toggle(); 

}); 

}); 

//_______________________________

//toggle question code 8
$(document).ready(function() 
{ 

$("#shbtn8").click(function() 
{ 

$("#d8").toggle(); 

}); 

}); 

//_______________________________

//toggle question code 9
$(document).ready(function() 
{ 

$("#shbtn9").click(function() 
{ 

$("#d9").toggle(); 

}); 

}); 

//_______________________________

//toggle question code 10
$(document).ready(function() 
{ 

$("#shbtn10").click(function() 
{ 

$("#d10").toggle(); 

}); 

}); 

//_______________________________

//toggle question code 10
$(document).ready(function() 
{ 

$("#shbtn11").click(function() 
{ 

$("#d11").toggle(); 

}); 

}); 

//_______________________________

//toggle question code 10
$(document).ready(function() 
{ 

$("#shbtn12").click(function() 
{ 

$("#d12").toggle(); 

}); 

}); 

//_______________________________

$(document).ready(function(){
$("h5").animate({
color: "teal"
});
});

//_______________________________

$(document).ready (function(){
$("img").attr("loading", "lazy");
});

//_______________________________

//Links to various pages
homePage=()=>{
	open("https://smtechnology133.github.io/africaonline/homePage.html");
}