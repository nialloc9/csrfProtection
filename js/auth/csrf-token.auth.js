//TOKEN GENERATE
function csrfTokenGenerate(pathToServerScript, inputClass, callBackFunction){
    $.post(pathToServerScript, {
        task: 'csrfTokenGenerate'
    }).
        success(function(token){
        console.log("SUCCESS: Generated csrf token returned: " + token);
        renderCsrfToken(inputClass, token);

       //callback function
        callBackFunction(true);
    }).
        error(function(){
        console.log('ERROR: Generating csrf token at csrf-token.js.');

        //callback function
        callBackFunction(false);
    });
}

//TOKEN CHECK
function csrfTokenCheck(token, pathToServerScript, callBackFunction){
    $.post(
        pathToServerScript,
        {
            task: 'csrfTokenCheck',
            token: token
        }
    ).error(
        function(){
            console.log('ERROR: Checking csrf token at csrf-token.js.');
        }
    ).success(
        function(data){

            var result = false;

            //data check
            if(data == 1){
                result = true;
            }

            console.log("SUCCESS: Checked csrf token... calling callback function");

            //callback function
            callBackFunction(result);
        }
    );
}

//RENDER TOKEN
function renderCsrfToken(className, token){
    //ASSIGN INPUT VARIABLE
    var input = '.' + className;

    //RENDER TOKEN TO INPUTS
    $(input).each(function(){
        $(this).val(token);
    });
}