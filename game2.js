$(document).ready(function() {
  var clickOrder = ['zone-1', 'zone-2', 'zone-3', 'zone-4'];
  $('.zone').on('mouseenter', function() {
    if(clickOrder[clickIndex] === $(this).attr('id')) {
      $(this).innerHTML("Welcome.")
      $(this).css ({
       'background-color': 'green',
       'border-radius': '5px',
       'border': 'solid #000',
       'background-color': 'green',
       'color'           : 'rebeccapurple',
     });
    } else {
      $(this).innerHTML("Wrong.")
      $(this).css ({
        'background-color': '#BA160C',
        'font-family': 'helvetica',
        'font-weight': 'bolder',
        'color': 'yellow',
      });
    }
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

  $('.zone').on('click', function () {
    if(clickOrder[clickIndex] === $(this).attr('id')) {
     if(clickOrder[clickIndex] === $(this).attr('id')) {
      $(this).innerHTML("Welcome.")
      $(this).css ({
       'background-color': 'green',
       'border-radius': '5px',
       'border': 'solid #000',
       'background-color': 'green',
       'color'           : 'rebeccapurple',
     });
    } else {
      $(this).innerHTML("Wrong.")
      $(this).css ({
        'background-color': '#BA160C',
        'font-family': 'helvetica',
        'font-weight': 'bolder',
//         'color': 'yellow',
//       });
//     }

//
//
//     }

// });

// var clickIndex=0;
 // var clickIndex++;

//
//     });
  }


  // var clickCheck = function () {
  //   if ($('.clicked').length === 4) {
  //     alert('Green means go!');
  //   }

});




