$(document).ready(function() {



  $('.zone').on('mouseenter', function() {
     // console.log("Focused on the input");
     $(this).css ({
       'background-color': 'green',
       'border-radius': '5px',
       'border': 'solid #000',
     })
   });

  $('.zone').on('mouseleave', function() {
   $(this).removeAttr('style');
 });

  $('.zone').on('click', function() {
   $(this).css ({
     'background-color': 'green',
     'border-radius': '5px',
     'border': 'solid #000',
   })
   $(this).addClass('clicked')
   $(this).off('mouseleave');
   clickCheck();
 });
  var clickCheck = function () {
    if ($('.clicked').length === 4) {
      alert('Green means go!');
    }

  }
});

// });


 // $('.zone').each(function(taco) {
 //   if(taco.css('background-color') ===  "green") {
 //       alert("Green means go!");
 // } else false;



 // $(.zone). {
 //
 //    } else {

 //    }
 //  });



  // $(".zone").on("mouseleave", function() {
  // $(this).removeAttr("style")
  //       });






