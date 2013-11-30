/*-------------------------------------------------------------------------------------------------
Build A Pendant

Created by Lucille Kenney
for
Susan Buck
Dynamic Web Development
Harvard Extension
Submitted 6 Dec 2013

Note here we use the .on() method instead of just .click()
This is because we want this listener to also apply to the Google Image Stickers which are
added *after* the page loads. In order to do this, on has to be used, and we have to delegate the
listening for .stickers to the #controls div.
-------------------------------------------------------------------------------------------------*/	
$('input:radio').change(function () {
    //var $this = $(this);
    var shapes =  $('[name|=shapes]:checked').val();
    var metals =  $('[name|=metals]:checked').val();
    var size =  $('[name|=size]:checked').val();
    
    //console.log('radio clicked');
    //console.log(group1Val);

    var imageURL = "images/" + shapes + "-" + size + "-" + metals + ".png";

    //console.log(imageURL);

    var newImage = "<img src='" + imageURL + "'></img";
	$('#pendant').html(newImage);
	printCost(shapes,size,metals);
	//maxMessageLength(shape,size,fontsize);
 });

function printCost(shape,size,metal) {
		
	//console.log(shape);

	// Nested if statements
	// and then size and metals
	var silver_price_grm = 2.22;
	var bronze_price_grm = .25;

	if(shape == "circle") {
		if (size == "sm") {
			if (metal == "silver") {
				var sm_circle_weight_grm = 14.18;
				pendantCost = silver_price_grm * sm_circle_weight_grm;
				//(pendantCost + ' Small silver circle dimensions ...');
			} 
			else if (metal == "bronze") {
				var sm_circle_weight_grm = 28.35;
				pendantCost = bronze_price_grm * sm_circle_weight_grm;
				//console.log('This is small bronze circle')
			}
		} 

		else if (size == "md") {
			if (metal == "silver") {
				var md_circle_weight_grm = 42.52;
				pendantCost = silver_price_grm * md_circle_weight_grm;
				//console.log('This is medium silver circle')
			} 
			else if (metal == "bronze") {
				var md_circle_weight_grm = 51.03;
				pendantCost = bronze_price_grm * md_circle_weight_grm;	
				//console.log('This is medium bronze circle')
			}
		} 

		else if (size =="lg") {
			if (metal == "silver") {
				var lg_circle_weight_grm = 56.7;
				pendantCost = silver_price_grm * lg_circle_weight_grm;
				//console.log('This is large silver circle')
			} 
			else if (metal == "bronze") {
				var lg_circle_weight_grm = 62.36;
				pendantCost = bronze_price_grm * lg_circle_weight_grm;
				//console.log('This is large bronze circle')
			}
		}
	} 

	else if (shape == "square") {
		if(size == "sm") {
			if (metal == "silver") {
				var sm_square_weight_grm = 36.855;
				pendantCost = silver_price_grm * sm_square_weight_grm;
				//console.log('This is small silver square')
			} 
			else if (metal == "bronze") {
				var sm_square_weight_grm = 42.525;
				pendantCost = bronze_price_grm * sm_square_weight_grm;
				//console.log('This is small bronze square')
			}
		} 

		else if (size == "md") {
			if (metal == "silver") {
				var md_square_weight_grm = 51.03;
				pendantCost = silver_price_grm * md_square_weight_grm;
				//console.log('This is medium silver square')

			} 
			else if (metal == "bronze") {
				var md_square_weight_grm = 59.535;
				pendantCost = bronze_price_grm * md_square_weight_grm;
				//console.log('This is medium bronze square')
			}
		} 

		else if (size =="lg") {
			if (metal == "silver") {
				var lg_square_weight_grm = 65.205;
				pendantCost = silver_price_grm * lg_square_weight_grm;
				//console.log('This is large silver square')
			} 
			else if (metal == "bronze") {
				var lg_square_weight_grm = 70.875;
				pendantCost = bronze_price_grm * lg_square_weight_grm;
				//console.log('This is large bronze square')
			}
		}
	} 

	else if (shape == "heart") {
		if(size == "sm") {
			if (metal == "silver") {
				var sm_heart_weight_grm = 42.53;
				pendantCost = silver_price_grm * sm_heart_weight_grm;
				//console.log('This is small silver heart')
			} 
			else if (metal == "bronze") {
				var sm_heart_weight_grm = 48.2;
				pendantCost = bronze_price_grm * sm_heart_weight_grm;				
				//console.log('This is small bronze heart')
			}
		} 

		else if (size == "md") {
			if (metal == "silver") {
				var md_heart_weight_grm = 56.7;
				pendantCost = silver_price_grm * md_heart_weight_grm;				
				//console.log('This is medium silver heart')
			} 
			else if (metal == "bronze") {
				var md_heart_weight_grm = 62.37;
				pendantCost = bronze_price_grm * md_heart_weight_grm;					
				//console.log('This is medium bronze heart')
			}
		} else if (size =="lg") {
			if (metal == "silver") {
				var lg_heart_weight_grm = 70.88;
				pendantCost = silver_price_grm * lg_heart_weight_grm;
				//console.log('This is large silver heart')
			} else if (metal == "bronze") {
				var lg_heart_weight_grm = 76.55;
				pendantCost = bronze_price_grm * lg_heart_weight_grm;	
				//console.log('This is large bronze heart')
			}
		}

		//console.log($this.val());
	}

	pendantCost = roundPenny(pendantCost);
	$('#output').html(pendantCost);
}

/*-------------------------------------------------------------------------------------------------
Round up to the penny
-------------------------------------------------------------------------------------------------*/	
function roundPenny(pendantCost){

	var original = pendantCost;

	// round 'original' to two decimals
	result = Math.round(original*100)/100;

	// Return to printCost
	return result;
}

/*//$('#controls').on('click', '.shapes', function() {
$('.shapes').click(function(){

	var imageID = $(this).attr('id');
	//var size = // the id of the button clicked;
	//var metal = // the id of the radiobutton that is checked


	var imageURL = "images/" + imageID + "-" + ".png";
	//var imageURL = "images/" + imageID + "-" + size + "-" + metal + ".png";
	//imageURL ="/images/heart-md.png";
	//console.log(imageURL);

	// Alternative method: Find which image was clicked then find image source
	var newImage = "<img src='" + imageURL + "'></img";

	// Hard coded url
	//var new_image = "<img src='images/heart-lg.png'></img>";
	
	$('#canvas').html(newImage);
	console.log(canvas);


	// Clone whatever sticker was clicked
	//var new_image = $(this).clone();
	//console.log(new_image);

	//new_image.addClass('shapes_on_card');

	// Place the clone in the canvas (.html overwrites vs prepend or append)
	//$('#canvas').prepend(new_image);

	//new_image.draggable({containment: "#canvas", opacity:.35 });

});

// Helper function for creating color and size of shape
	// check which size is clicked
	$('input[name=size]').click(function() {
	//$('.size').click(function() {

	// use jquery to detech which radiobutton is clicked	
	var radio_button = $(this).attr('id');
	var size = radio_button;
	// console.log(size);

	var imageSize = "images/" + size + "-" + ".png";
	console.log(imageSize);

	// Find which size was clicked then then add it to image in url source
	//var imageURL = "images/" + imageID + "-" + imageSize + "-" + ".png";
	//console.log(imageURL);

	});

	// check which metal is clicked
	$('input[name=metals]').click(function() {
	//$('.metals').click(function(){
	
	// use jquery to detech which radiobutton is clicked	
	var radio_button = $(this).attr('id');
	var imageMetal = radio_button;

	console.log(imageMetal);

	});

	// build image url
*/

/*-------------------------------------------------------------------------------------------------
Message
-------------------------------------------------------------------------------------------------*/
$('#message').keyup(function() {

	// Find out what is in the field
    var value = $(this).val();
    //console.log(value);

    // How many characters did the user type in
    var how_many_characters = value.length;
    //console.log(how_many_characters);

    // Subtract the number of characters typed in from the max amount of char
    var how_many_left = maxMessageLength - how_many_characters;

    // If number of characters is zero turn it red
   	if(how_many_left == 0) {
    	$('#message-error').css('color', 'red');
    }
    // If number of characters left is less than 5 turn it orange
    else if(how_many_left < 3){
    	$('#message-error').css('color', 'orange');
    }

    // Concatenate message with how_many_left
    $('#message-error').html('You have ' + how_many_left + ' characters left');

	// Inject the message into the output div on the canvas
	$('#message-output').html(value);
 
});
				// Taken from word game ... use to setup type on pendant split on space
                // Split on each letter i.e., no space in ''
                //var random_word_array = random_word.split('');

/*-------------------------------------------------------------------------------------------------
(Bonus) Font chooser
-------------------------------------------------------------------------------------------------*/
$("#fs").change(function() {
    //alert($(this).val());
    $('.changeMe').css("font-family", $(this).val());
});

$("#size").change(function() {
    $('.changeMe').css("fontsize", $(this).val() + "px");
	
	$(".changeMe") = maxMessageLength(shape,size,fontsize);
	console.log(changeMe);
});

/*-------------------------------------------------------------------------------------------------
changeMaxLength to be called from functions that 
react to the pendant size changing (line 4), and the font size changing (line 301)
-------------------------------------------------------------------------------------------------*/
// Global variable that can be accessed by multiple functions
// passed it to line 261 in place of the hard coded 14
// Default message length
var maxMessageLength = 0;

function changeMaxLength(shape, size, fontsize) {

	// Assign a new message length when the pendant size and the font size changes.
	// nested if statements that look at both the current pendant size and shape, and the 
	// current font size, and set maxMessageLength appropriately
	// call that function that sets the max length in two cases -- 
	//	1)if the font size is changed (in the function that starts on like 302)
	//  2) And when the pendant size changes -- so that's the function that starts on line 4

	if(shape == "circle") {
		if (size == "sm") {
			// What is the max amount of letters that fit in the small circle
			if (fontsize == "12") {
				maxMessageLength = 9;
			} 
			else if (fontsize == "24") {
				maxMessageLength = 4;
			}
		} 

		else if (size == "md") {
			if (fontsize == "12") {
				maxMessageLength = 12;
			} 
			else if (fontsize == "24") {
				maxMessageLength = 6;
			}
		} 

		else if (size == "lg") {
			if (fontsize == "12") {
				maxMessageLength = 14;
			} 
			else if (fontsize == "24") {
				maxMessageLength = 9;
			}
		}
	} 

	else if (shape == "square") {
		if (size == "sm") {
			// What is the max amount of letters that fit in the small square
			if (fontsize == "12") {
				maxMessageLength = 9;
			} 
			else if (fontsize == "24") {
				maxMessageLength = 4;
			}
		} 

		else if (size == "md") {
			if (fontsize == "12") {
				maxMessageLength = 12;
			} 
			else if (fontsize == "24") {
				maxMessageLength = 6;
			}
		} 

		else if (size == "lg") {
			if (fontsize == "12") {
				maxMessageLength = 14;
			} 
			else if (fontsize == "24") {
				maxMessageLength = 8;
			}
		}
	} 

	else if (shape == "heart") {
		if (size == "sm") {
			// What is the max amount of letters that fit in the small heart
			if (fontsize == "12") {
				maxMessageLength = 8;
			} 
			else if (fontsize == "24") {
				maxMessageLength = 4;
			}
		} 

		else if (size == "md") {
			if (fontsize == "12") {
				maxMessageLength = 11;
			} 
			else if (fontsize == "24") {
				maxMessageLength = 5;
			}
		} 

		else if (size == "lg") {
			if (fontsize == "12") {
				maxMessageLength = 16;
			} 
			else if (fontsize == "24") {
				maxMessageLength = 9;
			}
		}
	} 

        $('#message').attr("maxlength",maxMessageLength);
        $('#message-error').html("Max "+maxMessageLength.toString() +" characters");

}

		changeMaxLength("shape","size", "fontsize");

/*-------------------------------------------------------------------------------------------------
Toggle, chain specs hidden until clicked ... 
see: http://www.metaltoad.com/blog/detect-which-element-was-clicked-using-jquery
-------------------------------------------------------------------------------------------------*/

// Implementing toggle
// $('.toggle').on('click', function() {}); 
// is equivalent of $('.toggle').click(function() {});
$('.chains').click (function() {

	// Use jquery to determine which chain was clicked 
	// since I only want to show those lengths
	//var selected-chain = $(this).attr('id');
	var chain_id = $(this).attr('id');
	var length_value = $('.class').val() ;
	// var thickness = ...;
	console.log(length_value);

	// Now I only want to show lengths of chain_selected
	// so now i need chain_selected and chain_class?
	$('.'+chain_id).toggleClass('show-length');	

	// Toggling show-thickness on after chain length is clicked
	//$('.'+length_value).toggleClass('show-length');	
  	//$('.item-length').toggleClass('show-length');
});



// Bind click event listener on the body
// Hide list if user clicks anywhere off of the list itself.
/*$('body').on('click.hideDropdown', function(e) {

  // Check to see if the list is currently displayed.
  if ($('.item-length').hasClass('show-length')) {
    // If element clicked on is NOT one of the menu list items,
    // hide the menu list.
    if (!$(e.target).parent().hasClass('item-length')) {
      $('.item-length').removeClass('show-length');
    }
  }
});*/


/*-------------------------------------------------------------------------------------------------
Remove a shapes from the canvas
-------------------------------------------------------------------------------------------------*/
$('#canvas').on('click', '.shapes', function() {
//$('.shapes').click(function(){

	// Remove any shapes
	var new_image = $(this).remove();

});

/*-------------------------------------------------------------------------------------------------
Message picker
-------------------------------------------------------------------------------------------------*/
/*$('input[name=message]').click(function() {
//$('.messages').click(function() {

	 // Which radio button was clicked?
	 // (Note here how we're storing a whole element in a variable... cool, huh?)
	 //var radio_button = $(this);
	 //var message = $(this).val();
	 //console.log(message);

	 // Get the label element that comes immediately after this radio button 
	 var label = $(this).next();
	 //console.log(label);

	 // Now that we know the label, grab the text inside of it (That's our message!)
	 var message = label.html();
	 //console.log(message);
		
	// Place the message in the card
	$('#message-output').html(message);

	//console.log("You clicked this message".$message);

});*/

/*-------------------------------------------------------------------------------------------------
(Bonus) Font chooser
-------------------------------------------------------------------------------------------------*/
$("#fs").change(function() {
    //alert($(this).val());
    $('.changeMe').css("font-family", $(this).val());
});

$("#size").change(function() {
    $('.changeMe').css("font-size", $(this).val() + "px");
});


/*-------------------------------------------------------------------------------------------------
Message
-------------------------------------------------------------------------------------------------*/

$('#message').keyup(function() {

	// Find out what is in the field
    var value = $(this).val();
    //console.log(value);

    // How many characters did the user type in
    var how_many_characters = value.length;
    //console.log(how_many_characters);

    // Subtract the number of characters typed in from the max amount of char
    var how_many_left = 14 - how_many_characters;

    // If number of characters is zero turn it red
   	if(how_many_left == 0) {
    	$('#message-error').css('color', 'red');
    }

    // If number of characters is less than 5 turn it orange
    else if(how_many_left < 5){
    	$('#message-error').css('color', 'orange');
    }

    // Concatenate message with how_many_left
    $('#message-error').html('You have ' + how_many_left + ' characters left');

	// Inject the message into the output div on the canvas
	$('#message-output').html(value);
        
	// Note: The "maxlength" attribute on the HTML element will prevent the user from entering more than 14 characters
	// <input type='text' id='recipient' maxlength="14"> 

});


/*-------------------------------------------------------------------------------------------------
Start over
-------------------------------------------------------------------------------------------------*/
$('#refresh-btn').click(function() {
	
	// Reset color and texture
	$('#canvas').css('background-color', 'white');
	$('#canvas').css('background-image', '');
	
	// Clear message and recipient divs
	$('#message-output').html("");
	$('#total-output').html("");
		
	// Remove any shapes
	$('[name|=shapes]:checked').remove();

});


/*-------------------------------------------------------------------------------------------------
Print
-------------------------------------------------------------------------------------------------*/
$('#print-btn').click(function() {
	
	// Goal: Open the card in a new tab
   
    // Take the existing card on the page (in the #canvas div) and clone it for the new tab
    var canvas_clone = $('#canvas').clone();
        
    /* 
    Next, we need to get the HTML code of the card element
    We can't just say canvas.html() because that will get us the stuff *inside* the #canvas:
    
    	<div id="message-output"></div>
		<div id="recipient-output"></div>
		
	Think of a turkey sandwich. The above gets us just the inside of the sandwich, the turkey... But we need the bread too.
		
    I.e., this is what we want:
    
   		<div id="canvas" style="background-image: url(images/texture-cloth.png);">
			<div id="message-output"></div>
			<div id="recipient-output"></div>
		</div> 
    
    To accomplish this we'll use a new method .prop (short for property) and request the "outerHTML" property of the canvas.
    In JavaScript land, "outerHTML" is both the bread and the meat of an element. 
    (Don't let it confuse you, the name outerHTML sounds kinda like it would just be the bread...it's not...it's the whole sammie).
    */
    var canvas = canvas_clone.prop('outerHTML'); // Give us the whole canvas, i.e the bread and the meat, i.e the complete card from our clone
    	    
    // Now that we have the entire canvas let's focus on creating our new tab
    
    // For the new tab, we need to basically construct all the pieces we need for any HTML page starting with a start <html> tag.
    var new_tab_contents  = '<html>';
    
    // (Note the += symbol is used to add content onto an existing variable, so basically we're just adding onto our new_tab_contents variable one line at a time)
    new_tab_contents += '<head>';
    new_tab_contents += '<link rel="stylesheet" href="css/main.css" type="text/css">'; // Don't forget your CSS so the card looks good in the new tab!
    new_tab_contents += '<link rel="stylesheet" href="css/features.css" type="text/css">';
    new_tab_contents += '</head>';
    new_tab_contents += '<body>'; 
    new_tab_contents += canvas; // Here's where we add the card to our HTML for the new tab
    new_tab_contents += pendant; // Here's where we add the card to our HTML for the new tab
    new_tab_contents += '</body></html>';
    
	// Ok, our card is ready to go, we just need to work on opening the tab
    
    // Here's how we tell JavaScript to create a new tab (tabs are controlled by the "window" object).
    var new_tab =  window.open();

	// Now within that tab, we want to open access to the document so we can make changes
    new_tab.document.open();
    
    // Here's the change we'll make: we'll write our card (i.e., new_tab_contents) to the document of the tab
    new_tab.document.write(new_tab_contents);
    
    // Then close the tab. This isn't actually closing the tab, it's just closing JS's ability to talk to it.
    // It's kind of like when you're talking to a walkie-talkie and you say "over and out" to communicate you're done talking
    new_tab.document.close();
    		
});
