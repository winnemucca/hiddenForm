$(document).on('ready', function() {
	// $('form').hide();


   
  $('#submit').click(function(e) {
  	e.preventDefault();
  	console.log('clicked');

  	var user = $('#user').val();
  	var books = $('#books').val();
  	var library = $('#library').val();
  	var bio = $('#bio').val();




  	$('.one').append('user ' + user);
  	$('.two').append('bio ' + bio);
  	$('.three').append('books ' + books);
  	$('.four').append('js libraries ' + library);


  	
  	});

  $('.show').on('click', function() {
      $(this).toggleClass('hide');
    $('.userInfo').toggleClass("userInfoTwo");
      $(this).text('hide form');

        // nesting a text change only works once
        // $('.hide').on('click', function() {
        // $(this).text('show form');
        // console.log('well hope');
        // });
        // if($('button').text('show')) {
        //   $()
        // }


    });
  

    

  });


  










