# csrfProtection
This is csrf protection with re-usability at it's core. It includes generating tokens on server and client side and also 
validating these to allow us access to the loggedin.html page.


# Instructions
1. Make sure jQuery is available to use in your project.
2. Include the js/auth/csrf-token.auth.js file in your project.
3. Inlcude the js/index.js file or the code from it in your project
4. Give every form that needs csrf protection a class of 'csrf-token'.
5. Give the button to be used an id of 'submitButton'
6. Call function csrfTokenGenerate(pathToServerScript, inputClass, callBackFunction)
8. When you want to check tokens call function csrfTokenCheck(token, pathToServerScript, callBackFunction).

# csrfTokenGenerate Parameters

pathToServerScript: Path from file html file tocsrfToken.auth.php

inputClass: Name of the class given to the input that we want hte token to appear in

callBackFunction: Name of the callback function we will use


# csrfTokenCheck Parameters

token: the token that is in the hidden input

pathToServerScript: Path from file html file tocsrfToken.auth.php

callBackFunction: Name of the callback function we will use



# Example
                $(document).ready(function(){

                    //generate and render token
                    csrfTokenGenerate('php/auth/csrfToken.auth.php', 'csrf-token', generateTokenCallBack);

                    //generate call back
                    function generateTokenCallBack(result){
                        //result boolean check.. result == true: csrf token is confirmed
                        if(result){
                            //do something here
                        }else{

                            //do something here like redirecting the user with an error message
                        }
                    }

                    //check call back function
                    function checkTokenCallBack(result){

                        //result boolean check.. result == true: csrf token is confirmed
                        if(result){
                            //DO SOME AWESOME STUFF HERE LIKE CHECKING ALL INPUTS ARE FILLED IN... inputChecker available here: https://github.com/nialloc9/inputChecker
                            console.log('csrf token confirmed');
                            $('#someTextForm').submit();
                        }else{
                            //DO SOME AWESOME STUFF HERE LIKE ADDING AN INFO MESSAGE... addInfoMessage available here: https://github.com/nialloc9/addInfoMessage
                            console.log('error confirming csrf token');
                        }
                    }

                    //check token
                    $('#myButton').click(function() {
                        tokenCheck = $('#csrfToken').val();
                        csrfTokenCheck(tokenCheck, 'php/auth/csrfToken.auth.php', checkTokenCallBack)
                    });
                });
        
# NB
If you want to change the id of the button or the class name of the csrf-token input don't forget to update the code that came 
from js/index.js
    
