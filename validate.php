<?php
    function sanitise_input($data){
        $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
    }

// Validation for payment details Repurposed code from a different subject - Jean Mendoza
//Validation for contact details
    $errMsg = "";

    if(isset($_POST["FirstName"])){
        $FirstName = $_POST["FirstName"];
        $FirstName = sanitise_input($FirstName);
        if($FirstName ==""){
           $errMsg.= "Field empty for first name.\n";
       }
        elseif(!preg_match("/^[a-zA-Z]{1,25}$/", $FirstName)){
           $errMsg.="Only letters are allowed in your first name.\n";
       }
    }

    if (isset($_POST["LastName"])){
        $LastName = $_POST["LastName"];
        $LastName = sanitise_input($LastName);
        if($LastName ==""){
            $errMsg.= "Field empty for first name.\n";
        }
        elseif(!preg_match("/^[a-zA-Z]{1,25}$/", $LastName)){
            $errMsg.="Only letters allowed in your last name.\n";
        }
    }

    if(isset($_POST["EmailAddress"])){
        $EmailAddress = $_POST["EmailAddress"];
        $EmailAddress = sanitise_input($EmailAddress);
        if($EmailAddress ==""){
            $errMsg.="Field Empty for email address.\n";
        }
        elseif(!filter_var($EmailAddress, FILTER_VALIDATE_EMAIL)){
            $errMsg.="Invalid email format.\n";
        }
    }

    if (isset($_POST["PhoneNumber"])){
        $PhoneNumber = $_POST["PhoneNumber"];
        $PhoneNumber = sanitise_input($PhoneNumber);
        if($PhoneNumber ==""){
            $errMsg.="Field Empty for phonenumber.\n";
        }
        elseif(!preg_match("/^\d{1,10}$/", $PhoneNumber)){
            $errMsg.="Only numbers for the phonenumber.\n";
        }
    } 

//Validation for CreditCard     
    
    if (isset($_POST["CreditType"])){
        $CreditType = $_POST["CreditType"];
        $CreditType = sanitise_input($CreditType);
        if($CreditType ==""){
            $errMsg.="Field Empty for credit type.\n";
        }
    }

    if (isset($_POST["CreditName"])){
        $CreditName = $_POST["CreditName"];
        $CreditName = sanitise_input($CreditName);
        if($CreditName ==""){
            $errMsg.="Field Empty for credit type.\n";
        }
        elseif(!preg_match("/^[a-zA-Z\s]{1,40}$/", $CreditName)){
            $errMsg.="Only alpha letters allowed in the credit card name.\n";
        }

    }

    if (isset($_POST["CreditNumber"])){
        $CreditNumber = $_POST["CreditNumber"];
        $CreditNumber = sanitise_input($CreditNumber);
        if($CreditNumber ==""){
            $errMsg.="Field Empty for credit number.\n";
        }
        elseif(($CreditType=='Visa') AND !preg_match("/^[4]\d{15}$/", $CreditNumber)){
            $errMsg.="For Visa Cards numbers must start with 4 and 16 digits.\n";
        }
        elseif(($CreditType=='Mastercard') AND !preg_match("/^5[1-5]\d{14}$/", $CreditNumber)){
            $errMsg.="For Mastercard numbers must start with from 51 up to 55 and 16 digits long.\n";
        }
        elseif(($CreditType=='AmericanExpress') AND !preg_match("/^(34|37)\d{13}$/", $CreditNumber)){
            $errMsg.="American express values must start be 34 or 37 and 15 digits long.\n";
        }
    }

    if (isset($_POST["CreditExpiry"])){
        $CreditExpiry = $_POST["CreditExpiry"];
        $CreditExpiry = sanitise_input($CreditExpiry);
        $date = explode("/", $CreditExpiry);
        $month = $date[0];
        $year = $date[1];
        $now = date("my");
        //echo $now;
        $expires = DateTime :: createFromFormat('my',$month.$year);
        //echo $expires->format('m/y');
        if($CreditExpiry == ""){
            $errMsg.= "Please input an expiration date for the card in mm/yy.\n";
        }    
        // elseif((($CreditExpiry < $now)|| ($CreditExpiry > $now))  AND  !preg_match("/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/", $CreditName)){
        //     $errMsg.="Card is expired.\n";
        // }
        elseif(($CreditExpiry < $now))
        {
            $errMsg.= "Card is expired.\n";
        }
    }

    if(isset($_POST["CreditVeri"])){
        $CreditVeri = $_POST["CreditVeri"];
        $CreditVeri = sanitise_input($CreditVeri);
        if($CreditVeri ==""){
            $errMsg.="Must have a CVV number.\n";
            
        }
        elseif($CreditType=='Visa' AND (!preg_match("/^\d{3}$/", $CreditVeri))){
            $errMsg.="Not a valid CVV number for Visa card.\n";
        }
        elseif($CreditType=='Mastercard' AND (!preg_match("/^\d{3}$/", $CreditVeri))){
            $errMsg.="Not a valid CVV number for Mastercard.\n";
        }
        elseif($CreditType=="AmericanExpress" AND (!preg_match("/^\d{4}$/", $CreditVeri))){
            $errMsg.="Not a valid CVV number for American Express.\n";
        }    
    }
//Used for testing validation.
    if($errMsg !=""){
        session_start();
        $_SESSION["errMsg"]= $errMsg;
        header("location:validateFail.php");
    }else{
        header("location:successful.html");
    }


?>