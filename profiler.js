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

//_______________________________

// Download several files online shopping advert1
function downloadFiles(urls) {
    urls.forEach(url => {
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const urlObject = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = urlObject;
                a.download = url.split('/').pop(); // Use the last part of the URL as the filename
                a.click();
                URL.revokeObjectURL(urlObject); // Clean up the object URL
            })
            .catch(error => console.error('Error downloading file:', error));
    });
}

// Usage:
const filesToDownload = [
'file:///storage/emulated/0/projects/OnlineShopping/salmanda.png',
    'https://example.com/file1.pdf',
    'https://example.com/file2.jpg',
    'https://example.com/file3.txt'
];

//downloadFiles(filesToDownload);
//End download several files online shopping advert1

//_______________________________