<?php
    require_once '../modals/csrfToken.modal.php';

    //GENERATE TOKEN
    if(isset($_POST['task']) && $_POST['task'] == 'csrfTokenGenerate')  {

        //assign variables
        $task = $_POST['task'];

        $csrfToken = Token::generate();

        //return value
        echo $csrfToken;
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