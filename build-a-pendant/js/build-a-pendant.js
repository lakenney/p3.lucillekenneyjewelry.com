/*-------------------------------------------------------------------------------------------------
Build A Pendant

Created by Lucille Kenney
for
Susan Buck
Dynamic Web Development
Harvard Extension
Submitted 6 Dec 2013

-------------------------------------------------------------------------------------------------*/	
// Set document ready
$( document ).ready(function() {

	// Global variables
	var maxMessageLength = 16;
	var fontsize = 12;
	var how_many_left = 16;

	// Default setup
			changeMaxLength($('[name|=shapes]:checked').val(),$('[name|=size]:checked').val()), fontsize;
			// Hard coded
			//changeMaxLength('shape','size', "24");
			//console.log("The maxMessageLength is " + maxMessageLength);

	/*-------------------------------------------------------------------------------------------------
	Pick a shape, metal and size
	-------------------------------------------------------------------------------------------------*/
	$('input:radio').change(function () {
	    //var $this = $(this);
	    var shapes =  $('[name|=shapes]:checked').val();
	    var metals =  $('[name|=metals]:checked').val();
	    var size =  $('[name|=size]:checked').val();
	    //console.log('radio clicked');

	    // Concatenate 3 selected variables into an image url
	    var imageURL = "images/" + shapes + "-" + size + "-" + metals + ".png";
	    //console.log(imageURL);

	    // Place the concatenated image string into image src
	    var newImage = "<img src='" + imageURL + "'></img";
		$('#pendant').html(newImage);

		// Call the pendent cost returned from round penny functon when a pendant change is made  
		printCost(shapes,size,metals);
		// console.log("I've changed");
		//console.log('[name|=shapes]:checked')

		// Call to change character maximum when a new shape and/or size is clicked
		changeMaxLength($('[name|=shapes]:checked').val(),$('[name|=size]:checked').val());
	 });

	/*-------------------------------------------------------------------------------------------------
	Calculate pendant cost according to shape, size and metal
	-------------------------------------------------------------------------------------------------*/
	function printCost(shape,size,metal) {
			
		// Nested if statements to determine cost for shape, size and metals
		var silver_price_grm = 2.22;
		var bronze_price_grm = .25;

		// CIRCLE
		if(shape == "circle") {
			//(pendantCost for small silver circle
			if (size == "sm") {
				if (metal == "silver") {
					var sm_circle_weight_grm = 14.18;
					pendantCost = silver_price_grm * sm_circle_weight_grm;
				} 
				//(pendantCost for small bronze circle
				else if (metal == "bronze") {
					var sm_circle_weight_grm = 28.35;
					pendantCost = bronze_price_grm * sm_circle_weight_grm;
				}
			} 

			//(pendantCost for medium silver circle
			else if (size == "md") {
				if (metal == "silver") {
					var md_circle_weight_grm = 42.52;
					pendantCost = silver_price_grm * md_circle_weight_grm;
				} 
				//(pendantCost for medium bronze circle
				else if (metal == "bronze") {
					var md_circle_weight_grm = 51.03;
					pendantCost = bronze_price_grm * md_circle_weight_grm;	
				}
			} 

			//(pendantCost for large silver circle
			else if (size =="lg") {
				if (metal == "silver") {
					var lg_circle_weight_grm = 56.7;
					pendantCost = silver_price_grm * lg_circle_weight_grm;
				} 
				//(pendantCost for large bronze circle
				else if (metal == "bronze") {
					var lg_circle_weight_grm = 62.36;
					pendantCost = bronze_price_grm * lg_circle_weight_grm;
				}
			}
		} 

		//(pendantCost for small silver square
		else if (shape == "square") {
			if(size == "sm") {
				if (metal == "silver") {
					var sm_square_weight_grm = 36.855;
					pendantCost = silver_price_grm * sm_square_weight_grm;
				} 
				//(pendantCost for small bronze square
				else if (metal == "bronze") {
					var sm_square_weight_grm = 42.525;
					pendantCost = bronze_price_grm * sm_square_weight_grm;
				}
			} 

			//(pendantCost for medium silver square
			else if (size == "md") {
				if (metal == "silver") {
					var md_square_weight_grm = 51.03;
					pendantCost = silver_price_grm * md_square_weight_grm;
				} 
				//(pendantCost for medium bronze square
				else if (metal == "bronze") {
					var md_square_weight_grm = 59.535;
					pendantCost = bronze_price_grm * md_square_weight_grm;
				}
			}

			//(pendantCost for large silver square
			else if (size =="lg") {
				if (metal == "silver") {
					var lg_square_weight_grm = 65.205;
					pendantCost = silver_price_grm * lg_square_weight_grm;
				} 
				//(pendantCost for large bronze square
				else if (metal == "bronze") {
					var lg_square_weight_grm = 70.875;
					pendantCost = bronze_price_grm * lg_square_weight_grm;
				}
			}
		} 

		else if (shape == "heart") {
			//(pendantCost for small silver heart
			if(size == "sm") {
				if (metal == "silver") {
					var sm_heart_weight_grm = 42.53;
					pendantCost = silver_price_grm * sm_heart_weight_grm;
				} 
				//(pendantCost for small bronze heart
				else if (metal == "bronze") {
					var sm_heart_weight_grm = 48.2;
					pendantCost = bronze_price_grm * sm_heart_weight_grm;				
					//console.log('This is small bronze heart')
				}
			} 
			//(pendantCost for medium silver heart
			else if (size == "md") {
				if (metal == "silver") {
					var md_heart_weight_grm = 56.7;
					pendantCost = silver_price_grm * md_heart_weight_grm;				
				} 
				//(pendantCost for medium bronze heart
				else if (metal == "bronze") {
					var md_heart_weight_grm = 62.37;
					pendantCost = bronze_price_grm * md_heart_weight_grm;					
					//console.log('This is medium bronze heart')
				}
			}
			//(pendantCost for large silver heart
			else if (size =="lg") {
				if (metal == "silver") {
					var lg_heart_weight_grm = 70.88;
					pendantCost = silver_price_grm * lg_heart_weight_grm;
				}
				//(pendantCost for large silver heart
				else if (metal == "bronze") {
					var lg_heart_weight_grm = 76.55;
					pendantCost = bronze_price_grm * lg_heart_weight_grm;	
				}
			}
		}

		// Call the round penny function
		pendantCost = roundPenny(pendantCost);

		// Print the cost of the pendant
		$('#output').html(pendantCost);
	}

	/*-------------------------------------------------------------------------------------------------
	Round pendant cost to the penny
	-------------------------------------------------------------------------------------------------*/	
	function roundPenny(pendantCost){

		// Var holds pendant cost wiht trailing numbers
		var original = pendantCost;

		// round 'original' to two decimals
		result = Math.round(original*100)/100;

		// Return to printCost
		return result;
	}

	/*-------------------------------------------------------------------------------------------------
	changeMaxLength to be called from functions that 
	react to the pendant size changing (line 4), and the font size changing (line 301)
	-------------------------------------------------------------------------------------------------*/
	function changeMaxLength(shape, size) {
	//var maxMessageLength = 16;

		// Assign a new message length when the pendant size and the font size changes.
		// nested if statements that look at both the current pendant size and shape, and the 
		// current font size, and set maxMessageLength appropriately
		// call that function that sets the max length in two cases -- 
		//	1) if the font size is changed (in the Font Chooser)
		//  2) And when the pendant size changes -- input radio 

		if(shape == "circle") {
			if (size == "sm") {
				// Max amount of 12pt characters that fit in the small circle
				if (fontsize == "12") {
					maxMessageLength = 8;
					$("#message").attr("maxlength","8");
					// Save new message
				}
				// Max amount of 24pt characters that fit in the small circle
				else if (fontsize == "24") {
					maxMessageLength = 4;
					$("#message").attr("maxlength","4");
				}
			} 

			else if (size == "md") {
				// Max amount of 12pt characters that fit in the medium circle
				if (fontsize == "12") {
					maxMessageLength = 12;
					$("#message").attr("maxlength","12");
				} 
				// Max amount of 24pt characters that fit in the medium circle
				else if (fontsize == "24") {
					maxMessageLength = 6;
					$("#message").attr("maxlength","6");
				}
			} 

			else if (size == "lg") {
				// Max amount of 12pt characters that fit in the large circle
				if (fontsize == "12") {
					maxMessageLength = 14;
					$("#message").attr("maxlength","14");
				}
				// Max amount of 24pt characters that fit in the large circle
				else if (fontsize == "24") {
					maxMessageLength = 9;
					$("#message").attr("maxlength","9");
				}
			}
		} 

		else if (shape == "square") {
			if (size == "sm") {
				// Max amount of 12pt characters that fit in the small square
				if (fontsize == "12") {
					maxMessageLength = 9;
					$("#message").attr("maxlength","9");
				} 
				// Max amount of 24pt characters that fit in the small square
				else if (fontsize == "24") {
					maxMessageLength = 4;
					$("#message").attr("maxlength","4");
				}
			} 

			else if (size == "md") {
				// Max amount of 12pt characters that fit in the medium square
				if (fontsize == "12") {
					maxMessageLength = 12;
					$("#message").attr("maxlength","12");
				} 
				// Max amount of 24pt characters that fit in the medium square
				else if (fontsize == "24") {
					maxMessageLength = 6;
					$("#message").attr("maxlength","6");
				}
			} 

			else if (size == "lg") {
				// Max amount of 12pt characters that fit in the large square
				if (fontsize == "12") {
					maxMessageLength = 14;
					$("#message").attr("maxlength","14");
				} 
				// Max amount of 24pt characters that fit in the large square
				else if (fontsize == "24") {
					maxMessageLength = 8;
					$("#message").attr("maxlength","8");
				}
			}
		} 

		else if (shape == "heart") {
			if (size == "sm") {
				// Max amount of 12pt characters that fit in the small heart
				if (fontsize == "12") {
					maxMessageLength = 8;
					$("#message").attr("maxlength","8");
				} 
				// Max amount of 24pt characters that fit in the small heart
				else if (fontsize == "24") {
					maxMessageLength = 4;
					$("#message").attr("maxlength","4");
				}
			} 

			else if (size == "md") {
				// Max amount of 12pt characters that fit in the medium heart
				if (fontsize == "12") {
					maxMessageLength = 11;
					$("#message").attr("maxlength","11");
				}
				// Max amount of 24pt characters that fit in the medium heart
				else if (fontsize == "24") {
					maxMessageLength = 5;
					$("#message").attr("maxlength","5");
				}
			} 

			else if (size == "lg") {
				// Max amount of 12pt characters that fit in the large heart
				if (fontsize == "12") {
					maxMessageLength = 16;
					$("#message").attr("maxlength","16");
				}
				// Max amount of 24pt characters that fit in the large heart
				else if (fontsize == "24") {
					maxMessageLength = 9;
					$("#message").attr("maxlength","9");
				}
			}
		} 

			// Get what's in textbox compare char length with max message and strip the difference
			newMessage = $('#message').val().substring(0, maxMessageLength);
			//console.log(newMessage);

			// Put new calculated message length into textbox and pendant
			$('#message').val(newMessage);

			// call calcMessage
			calcMessage();

	        $('#message').attr("maxlength",maxMessageLength);
	        $('#message-error').html("Max "+maxMessageLength.toString() +" characters");

	}

	/*-------------------------------------------------------------------------------------------------
	New Function
	-------------------------------------------------------------------------------------------------*/
	function calcMessage() {

		// Find out what is in the field
	    var value = $('#message').val();
	    //console.log(value);

	    // How many characters did the user type in
	    how_many_characters = value.length;
	    //console.log(how_many_characters);

	    // Subtract the number of characters typed in from the max amount of char
	    how_many_left = maxMessageLength - how_many_characters;

	    // If number of characters is zero turn it red
	   	if(how_many_left == 0) {
	    	$('#message-error').css('color', 'red');
	    }
	    // If number of characters left is less than 3 turn it orange
	    else if(how_many_left < 3){
	    	$('#message-error').css('color', 'orange');
	    }
	    else {
	    	$('#message-error').css('color', 'black');

	    }

	    // Concatenate message with how_many_left
	    $('#message-error').html('You have ' + how_many_left + ' characters left');

		// Inject the message into the output div on the canvas
		//console.log(value);
		$('#message-output').html(value);	
	};


	/*-------------------------------------------------------------------------------------------------
	Message
	-------------------------------------------------------------------------------------------------*/
	// Created a function to determine message and message-error
	$('#message').keyup(function() {
		calcMessage();
		
	});

	/*-------------------------------------------------------------------------------------------------
	Font chooser
	-------------------------------------------------------------------------------------------------*/
	$("#fs").change(function() {
	    //alert($(this).val());
	    $('.changeMe').css("font-family", $(this).val());
	});

	$("#fontsize").change(function() {
	    $('.changeMe').css("fontSize", $(this).val() + "px");
	    fontsize = $(this).val();

		// Change maximum length message when a new font size is selected pass in shape and size
		changeMaxLength($('[name|=shapes]:checked').val(),$('[name|=size]:checked').val());
	
	});


	/*-------------------------------------------------------------------------------------------------
	Start over
	-------------------------------------------------------------------------------------------------*/
	$('#refresh-btn').click(function() {
		//console.log("reset pressed");
		// Reset color and texture
		$('#canvas').css('background-color', 'white');
		$('#canvas').css('background-image', '');

		// Clear message and recipient divs
		$('#message-output').html("");
		//$('#total-output').html("");

		// Startover button clears text from pendant and left message output field
		$('.resetMe').val("");

		// reset color back to black
	    $('#message-error').css('color', 'black');

		// reset characters back to 16 max
		$('#message-error').html('You have ' + how_many_left + ' characters left');

		// reset the variable back to max amount 16
	    // Concatenate message with max
	    $('#message-error').html('Max ' + maxMessageLength + ' characters');

		// Remove any shapes from preview
		$('#pendant').html("");

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
	    new_tab_contents += canvas; // Here's where we add the pendant to our HTML for the new tab
	    new_tab_contents += pendant; // Here's where we add pendant css to center to text to our HTML for the new tab
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

});
