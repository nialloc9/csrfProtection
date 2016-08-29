<?php
if(!isset($_SESSION)){
    session_start();
}

class Token{

    //GENERATE TOKEN
    public static function generate(){
        //create csrf token
        return $_SESSION['csrfToken'] = base64_encode(openssl_random_pseudo_bytes(32)); //RANDOM 32 BYTE VALUE
    }

    //CHECK TOKEN
    public static function check($token){
        //token check
        if($token == $_SESSION['csrfToken']){
            return 1;
        }else{
            return 0;
        }
    }
}
?>