$(document).ready(function () {
    //creates variable to store the users input...
    var userName, userEmail, userZip;
    //creates variables to store input field validators...
    var nameValidator, emailValidator, zipValidator;
    var valid_name, valid_email, valid_zip = false;
    //Sets the nameVal variable to a regex pattern...
    nameValidator = /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/;
    //Sets the emailVal variable to a regex pattern...
    emailValidator = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    //Sets the zipVal variable to a regex pattern...
    zipValidator = /^\d{5}-\d{4}|\d{5}|[A-Z]\d[A-Z] \d[A-Z]\d$/;

    /**  ***Validation Functions***  */

    //User-name...
    /**This function checks the validation of the form
     * element with the id of user-name. The function creates 
     * a variable called name to store the value of the 
     * html element with the id of user-name. The function
     * uses an if else statement to check the value of the
     * name variable compared to the nameValidator variable and 
     * the length of the name variable. If both conditions 
     * are true a css method is called on the html element
     * with the id of name-error to change it's css display
     * property to none and set the valid_name boolean 
     * variable to true. Else a css method is called on the
     * html element with the id of name-error to change it's
     * css display property to block and set the valid_name 
     * boolean variable to false.
     */
    //Creates the check_name() function...
    function check_name() {
        //Creates the name variable to store the value of the the #user-name element... 
        var name = $('#user-name').val();
        //Checks the comparison of the name and nameValidator variable and the name variable's length...
        if (nameValidator.test(name) && name != "") {
            //True Conditions:
            //Calls the css method on the #name-error html element...
            $('#name-error').css('display', 'none');
            //Changes the valid_name boolean variable to true... 
            valid_name = true;
            //Console msg...
            console.log('Username Valid!')
            //Else statement...
        } else {
            //False Conditions:
            //Calls the css method on the #name-error html element...
            $('#name-error').css('display', 'block');
            //Changes the valid_name boolean variable to false... 
            valid_name = false;
            //Console msg...
            console.log('Username Not-Valid!')
        }
    }

    //User-email...
    /**This function checks the validation of the form
     * element with the id of user-email. The function creates 
     * a variable called email to store the value of the 
     * html element with the id of user-email. The function
     * uses an if else statement to check the value of the
     * email variable compared to the emailValidator variable and 
     * the length of the email variable. If both conditions 
     * are true a css method is called on the html element
     * with the id of email-error to change it's css display
     * property to none and set the valid_email boolean 
     * variable to true. Else a css method is called on the
     * html element with the id of email-error to change it's
     * css display property to block and set the valid_email 
     * boolean variable to false.
     */
    //Creates the check_email() function...
    function check_email() {
        //Creates the email variable to store the value of the the #user-email element... 
        var email = $('#user-email').val();
        //Checks the comparison of the email and emailValidator variable and the email variable's length...
        if (emailValidator.test(email) && email != "") {
            //True Conditions:
            //Calls the css method on the #email-error html element...
            $('#email-error').css('display', 'none');
            //Changes the valid_email boolean variable to true... 
            valid_email = true;
            //Console msg...
            console.log('Email Valid!')
        } else {
            //False Conditions:
            //Calls the css method on the #email-error html element...
            $('#email-error').css('display', 'block');
            //Changes the valid_email boolean variable to false... 
            valid_email = false;
            //Console msg...
            console.log('Email Not-Valid!')
        }
    }

    //User-zip...
    /**This function checks the validation of the form
     * element with the id of user-zip. The function creates 
     * a variable called zip to store the value of the 
     * html element with the id of user-zip. The function
     * uses an if else statement to check the value of the
     * zip variable compared to the zipValidator variable and 
     * the length of the zip variable. If both conditions 
     * are true a css method is called on the html element
     * with the id of zip-error to change it's css display
     * property to none and set the valid_zip boolean 
     * variable to true. Else a css method is called on the
     * html element with the id of zip-error to change it's
     * css display property to block and set the valid_zip
     * boolean variable to false.
     */
    //Creates the check_zip() function...
    function check_zip() {
        //Creates the zip variable to store the value of the the user-zip element... 
        var zip = $('#user-zip').val();
        //Checks the comparison of the zip and zipValidator variable and the name variable's length...
        if (zipValidator.test(zip) && zip != "") {
            //True Conditions:
            //Calls the css method on the #zip-error html element...
            $('#zip-error').css('display', 'none');
            //Changes the valid_zip boolean variable to true... 
            valid_zip = true;
            //Console msg...
            console.log('Zip-Code Valid!')
        } else {
            //False Conditions:
            //Calls the css method on the #zip-error html element...
            $('#zip-error').css('display', 'block');
            //Changes the valid_zip boolean variable to false... 
            valid_zip = false;
            //Console msg...
            console.log('Zip-Code Not-Valid!')
        }
    }


    /**  ***Form input fields validation functions***  */

    /**This function uses the focusout event for the from
     * element with the id of user-name. When the element is
     * out of focus after being in focus the check name 
     * function is called...
     */
    //Calls the focusout event on the #user-name html element
    $("#user-name").focusout(function () {
        //Calls the check_name() function...
        check_name()
        //Console msg...
        console.log('Username Check!')
    });

    /**This function uses the focusout event for the from
     * element with the id of user-email. When the element is
     * out of focus after being in focus the check email 
     * function is called...
     */
    //Calls the focusout event on the #user-email html element
    $("#user-email").focusout(function () {
        //Calls the check_email() function...
        check_email()
        //Console msg...
        console.log('Email Check!')
    });

    /**This function uses the focusout event for the from
     * element with the id of user-zip. When the element is
     * out of focus after being in focus the check zip
     * function is called...
     */
    //Calls the focusout event on the #user-zip html element
    $("#user-zip").focusout(function () {
        //Calls the check_zip() function...
        check_zip()
        //Console msg...
        console.log('Zip-Code Check!')
    });


    /** Form Submit confirm msg... */

    /**This function uses a click event for the html element
     * with the id of join-form-btn. When the element is clicked
     * an if else statement checks the value of three different
     * boolean variables named valid_name, valid_email, and valid_zip. If 
     * the variables are equal to true the element with the id of join-form
     * will be hidden, the users input is stored in specific variables, 
     * and an alert box confirms that the user has joined...
     */
    //Calls the click function on the #join-form-btn element... 
    $("#join-form-btn").click(function () {
        //If statement to check the value of valid_name, valid_email, valid_zip...
        if (valid_name === true && valid_email == true && valid_zip === true) {
            //Sets the userName variable to the value of the html element with the id of user-name...
            userName = $("#user-name").val();
            //Sets the userEmail variable to the value of the html element with the id of user-email...
            userEmail = $("#user-email").val();
            //Sets the userZip variable to the value of the html element with the id of user-zip...
            userZip = $("#user-zip").val();
            //Hides the join-form screen...
            $(".join-form").hide();
            //Confirm join email sent to the email address provided...
            alert("Thank you " + userName.toUpperCase() + " for joing the Foodie Community. \n An email has been sent to the " +
                userEmail + " email address provided. Please check your eamil to confim your entry to the awesome community of Foodie.")
            //Console msg...
            console.log('Form confirmation!')
        }
    });

    /** Close Top Join Button */
    /**This function uses a click event for the html elemnt with the id of top-join-btn.
     * When the element is clicked a jquery css method is used to change a css property of 
     * the html element with the class of join-form  to display its conents...
     */
    //Calls the click event on the #top-join-btn element...
    $("#top-join-btn").click(function () {
        //Calls the css method on the .join-form element...
        $(".join-form").css("display", "flex");
    });

    /** Close Bottom Join Button */
    /**This function uses a click event for the html elemnt with the id of btm-join-btn.
     * When the element is clicked a jquery css method is used to change a css property of 
     * the html element with the class of join-form  to display its conents...
     */
    //Calls the click event on the #btm-join-btn element...
    $("#btm-join-btn").click(function () {
        //Calls the css method on the .join-form element...
        $(".join-form").css("display", "flex");
    });

    /** Close Join Form Button */
    /**This function uses a click event for the html elemnt with the id of join-close-btn.
     * When the element is clicked a jquery css method is used to change a css property of 
     * the html element with the class of join-form to hide its contents...
     */
    //Calls the click event on the #join-close-btn element...
    $("#join-close-btn").click(function () {
        //Calls the css method on the .join-form element...
        $(".join-form").css("display", "none");
    });
});