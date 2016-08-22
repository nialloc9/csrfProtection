$(document).ready(function(){
    //GENERATE AND RENDER TOKEN
    csrfTokenGenerate('php/auth/csrfToken.auth.php', 'csrf-token');

    //GET TOKEN VALUE.. interestingly if we grab the value here straight away it will be undefined so we have to give it 0.3 seconds to render first before we grab it.
    var tokenCheck = '';
    setTimeout(function(){
        tokenCheck = $('#csrfToken').val();
        console.log("tokenCheck: " + tokenCheck + " found.");
    },300);


    //CHECK TOKEN
    $('#submitButton').click(function() {
        csrfTokenCheck(tokenCheck, 'php/auth/csrfToken.auth.php', handleCheckData)
    });
});