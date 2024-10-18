// ====================================== SELECTING ELEMENTS ======================================
// To select any tag we use dollar($) symbol...

// $('h1');        // h1 has been selected.

// console.log($('h1'));       // It will select all the h1 elements.


// Select using class...

// console.log($('.hd'));      // Only 'hd' class will select.

// Select using id..

// console.log($('#id'));

// NOTE : JQuerry is very smart it will not allow to select multiple ID, with same name, bcoz it knows that ID should be unique.


//====================================== MANUPULATING ELEMENTS ======================================

// $('h1').css('color','green');
// $('h1').css('background-color' , 'red');

// NOTE : To add multiple properties at a time we need to use Object.

// $('h1').css({
//     border : '2px solid green',
//     color : 'green',
//     backgroundColor : 'plum'
// })


//====================================== ACCESSING TEXT ======================================

// console.log($('p').text());     // It is working as same as text content.

// console.log($('p').text('<b>This content has been changed. </b>'))      // Inner material will considered as normal text.

// console.log($('p').html('<b>This content has been changed. </b>'))      // It will manupulate the HTML tags also..


// =======================================MANIPULATING ATTRIBUTES  (Unable to get or set attribute..)=======================================

// console.log($('a').attr('href'));       // Getter

// console.log($('a').attr('href', 'https://www.facebook.com/'));   // Setter


// ======================================= Selecting Particular Element out of All =======================================

// $('h1:nth-of-type(4)').css('border','5px solid blue');       // firstChild and lastChild will not work.

// In this case we will use keywords : 'first' and 'last'.
// $('h1:first').css('border','5px solid red');
// $('h1:last').css('border','5px solid red');

// ALTERNATIVE METHOD :
// $('h1').first().css('backgroundColor','aqua')
// $('h1').last().css('backgroundColor','aqua')


//======================================= INPUT MANIPULLATION (ACCESSING INPUT VALUE)=======================================

$('input').val();

// Changing content :
$('input').val('Mene Content change kr diya hai.')

// These can be seen by writing this code on console..


//======================================= MANIPULATING CLASS ATTRIBUTE =======================================

// $('h1').first().addClass('first');      // Adding single class only
// $('h1').first().addClass('second');


$('h1').first().addClass('first second third hd');           // Adding Multiple  Classes


// Removing class
// $('h1').first().removeClass('second');      // Single class removes

// $('h1').first().removeClass('second hd')         // Removing Multiple classes


// Toggle the Class

// $('h1').first().toggleClass('second');      // Single Class


$('h1').first().toggleClass('third second');        // MultiClass


// It's deffect can be shown by writing this line on console.


// hasClass : It shows the presence of Class.

$('h1').first().hasClass('first');


//======================================= EVENTS =======================================


// -> Click Event
$('button').click(function(){
    console.log("Master ji patloon gili hai hahahaha.........")
})

// NOTE : On clicking the button, this content will diplay on console.



// Here, 'this' is not same as JS.
// 'this' points the event over which the event triggers..
$('li').click(function(){
    $(this).css('color','crimson');
})      // On clicking the particular list item will change the color.....

// Note : Make sure never use Arrow Function, it does not work.


// input ----------
$('input').keyup(function(){
    console.log($(this).val());
})          // The input text will appear on console after leaving the key..


    // --> Add event Listener ----> 'on'

    $('button').on('click' , function(){
        console.log("Master ji patloon gili hai hahahaha.......");
    })


    
    $('input').keypress(function(event){
        if(event.which == 13){          // 13 is the numnerical value of 'ENTER BUTTON'.
            console.log($(this).val());
        }
            
    })



    //=================================== EFFECTS ===================================

    $('#out').click(function(){
        $('#container').fadeOut();     
    })

    // On clicking the fadeout button, the container will disappear...


    $('#in').click(function(){
        $('#container').fadeIn();     
    })
    // Dissppeared box will appear after clicking on this button..

    $('#tog').click(function(){
        $('#container').fadeToggle();
    })