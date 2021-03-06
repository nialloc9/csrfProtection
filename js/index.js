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