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

    //task check
    if(isset($_POST['task']) && $_POST['task'] == 'csrfTokenCheck')  {

        //data check
        if(isset($_POST['token']) && !empty($_POST['token'])){

            //assign variables
            $task = $_POST['task'];
            $token = $_POST['token'];


            $result = Token::check($token);

            //return value
            echo $result;
        }else{
            echo 0;
        }
    }
?>