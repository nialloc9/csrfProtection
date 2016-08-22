$(document).ready(function(){
    //GENERATE AND RENDER TOKEN
    csrfTokenGenerate('php/auth/csrfToken.auth.php', 'csrf-token');

    //GET TOKEN VALUE.. interestingly if we grab the value here straight away it will be undefined so we have to give it 0.3 seconds to render first before we grab it.
    var tokenCheck = '';
    setTimeout(function(){
        tokenCheck = $('#csrfToken').val();
        console.log("tokenCheck: " + tokenCheck + " found.");
    },300);

    //CALL BACK FUNCTION TO BE USED
    function handleCheckData(data){
        //HERE ADD WHAT YOU WANT TO DO IF DATA IS TRUE OR FALSE
        if(data == '1'){
            console.log('csrf token confirmed');
            $('#someTextForm').submit();
        }else{
            console.log('error confirming csrf token');
        }
    }

    //CHECK TOKEN
    $('#submitButton').click(function() {
        csrfTokenCheck(tokenCheck, 'php/auth/csrfToken.auth.php', handleCheckData)
    });
});