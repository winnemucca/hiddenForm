$(document).on('ready', function() {
	// $('form').hide();


   
  $('#submit').click(function(e) {
  	e.preventDefault();
  	console.log('clicked');

  	var user = $('#user').val();
  	var books = $('#books').val();
  	var library = $('#library').val();
  	var bio = $('#bio').val();




  	$('.one').empty().append('user ' + user);
  	$('.two').empty().append('bio ' + bio);
  	$('.three').empty().append('books ' + books);
  	$('.four').empty().append('js libraries ' + library);


  	
  	});

  $('.show').on('click', function() {
      $(this).toggleClass('hide');
    $('.userInfo').toggleClass("userInfoTwo");
      // $(this).text('hide form');

        // nesting a text change only works once
        // $('.hide').on('click', function() {
        // $(this).text('show form');
        // console.log('well hope');
        // });
        // if($('button').text('show')) {
        //   $()
        // }


    });
// 
      $( "button" ).on('click', function() {    // On click of show/hide button...

    // Show the form and change the button text
    
    if( $("form").hasClass("userInfoTwo")) {
      $( "button" ).empty().append("Hide Form")
    }
    else {
      $( "button" ).empty().append("Show Form")
    }

  })

  

    

  });


  










