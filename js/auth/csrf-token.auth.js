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

function csrfTokenCheck(token, pathToServerScript){
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
            handleCheckData(data);
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

function handleCheckData(data){
    //HERE ADD WHAT YOU WANT TO DO IF DATA IS TRUE OR FALSE
    if(data == '1'){
        console.log('csrf token confirmed');
        $('#someTextForm').submit();
    }else{
        console.log('error confirming csrf token');
    }
}