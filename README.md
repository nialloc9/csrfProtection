# csrfProtection
This is csrf protection with re-usability at it's core. It includes generating tokens on server and client side and also 
validating these to allow us access to the loggedin.html page.


# Instructions
1. Make sure jQuery is available to use in your project.
2. Include the js/auth/csrf-token.auth.js file in your project.
3. Inlcude the js/index.js file or the code from it in your project
4. Give every form that needs csrf protection a class of 'csrf-token' e.g 

        <input type="text" id="csrfToken" class="csrf-token"/>
        
5. Give the button to be used an id of 'submitButton' e.g
        <input type="button" id="submitButton" value="Submit"/>
        
# NB
If you want to change the id of the button or the class name of the csrf-token input don't forget to update the code that came 
from js/index.j
    
