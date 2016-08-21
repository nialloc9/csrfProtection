<?php
    require_once '../modals/csrfToken.modal.php';

    //GENERATE TOKEN
    if(isset($_POST['task']) && $_POST['task'] == 'csrfTokenGenerate')  {
        //ASSIGN VARIABLES
        $task = $_POST['task'];

        $csrf_token = Token::generate();

        //RETURN VALUE
        echo $csrf_token;
    }

    //CHECK TOKEN
    if(isset($_POST['task']) && $_POST['task'] == 'csrfTokenCheck')  {
        //DATA CHECK
        if(isset($_POST['token']) && !empty($_POST['token'])){
            //ASSIGN VARIABLES
            $task = $_POST['task'];
            $token = $_POST['token'];

            $csrf_token = Token::check($token);

            //RETURN VALUE
            echo $csrf_token;
        }else{
        echo '3';
        }
    }
?>