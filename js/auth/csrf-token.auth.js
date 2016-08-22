function csrfTokenGenerate(pathToServerScript, inputClass){
    $.post(pathToServerScript, {
        task: 'csrfTokenGenerate'
    }).success(function(data){
        console.log("Successfully generated csrf token returned: " + data);
        renderCsrfToken(inputClass, data);
    }).error(function(){
        console.log('Error generating csrf token at csrf-token.js.');
    });
}

function csrfTokenCheck(token, pathToServerScript, functionName){
    $.post(
        pathToServerScript,
        {
            task: 'csrfTokenCheck',
            token: token
        }
    ).error(
        function(){
            console.log('Error checking csrf token at csrf-token.js.');
        }
    ).success(
        function(data){
            console.log("Successfully checked csrf token returned: " + data);
            functionName(data);
        }
    );
}

function renderCsrfToken(className, token){
    //ASSIGN INPUT VARIABLE
    var input = '.' + className;

    //RENDER TOKEN TO INPUTS
    $(input).each(function(){
        $(this).val(token);
    });
}