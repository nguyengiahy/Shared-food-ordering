<?php
function sanitise_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Validation for payment details Repurposed code from a different subject - Jean Mendoza
//Validation for CreditCard     
$errMsg = "";

if (isset($_POST["CreditType"])) {
    $CreditType = $_POST["CreditType"];
    $CreditType = sanitise_input($CreditType);
    if ($CreditType == "") {
        $errMsg .= "Field Empty for credit type.\n";
    }
}

if (isset($_POST["CreditName"])) {
    $CreditName = $_POST["CreditName"];
    $CreditName = sanitise_input($CreditName);
    if ($CreditName == "") {
        $errMsg .= "Field Empty for credit type.\n";
    } elseif (!preg_match("/^[a-zA-Z\s]{1,40}$/", $CreditName)) {
        $errMsg .= "Only alpha letters allowed in the credit card name.\n";
    }
}

if (isset($_POST["CreditNumber"])) {
    $CreditNumber = $_POST["CreditNumber"];
    $CreditNumber = sanitise_input($CreditNumber);
    if ($CreditNumber == "") {
        $errMsg .= "Field Empty for credit number.\n";
    } elseif (($CreditType == 'Visa') and !preg_match("/^[4]\d{15}$/", $CreditNumber)) {
        $errMsg .= "For Visa Cards numbers must start with 4 and 16 digits.\n";
    } elseif (($CreditType == 'Mastercard') and !preg_match("/^5[1-5]\d{14}$/", $CreditNumber)) {
        $errMsg .= "For Mastercard numbers must start with from 51 up to 55 and 16 digits long.\n";
    } elseif (($CreditType == 'AmericanExpress') and !preg_match("/^(34|37)\d{13}$/", $CreditNumber)) {
        $errMsg .= "American express values must start be 34 or 37 and 15 digits long.\n";
    }
}

if (isset($_POST["CreditExpiry"])) {
    $CreditExpiry = $_POST["CreditExpiry"];
    $CreditExpiry = sanitise_input($CreditExpiry);
    $date = explode("/", $CreditExpiry);
    $month = $date[0];
    $year = $date[1];
    $now = date("my");
    //echo $now;
    $expires = DateTime::createFromFormat('my', $month . $year);
    //echo $expires->format('m/y');
    if ($CreditExpiry == "") {
        $errMsg .= "Please input an expiration date for the card in mm/yy.\n";
    }
    // elseif((($CreditExpiry < $now)|| ($CreditExpiry > $now))  AND  !preg_match("/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/", $CreditName)){
    //     $errMsg.="Card is expired.\n";
    // }
    elseif (($CreditExpiry < $now)) {
        $errMsg .= "Card is expired.\n";
    }
}

if (isset($_POST["CreditVeri"])) {
    $CreditVeri = $_POST["CreditVeri"];
    $CreditVeri = sanitise_input($CreditVeri);
    if ($CreditVeri == "") {
        $errMsg .= "Must have a CVV number.\n";
    } elseif ($CreditType == 'Visa' and (!preg_match("/^\d{3}$/", $CreditVeri))) {
        $errMsg .= "Not a valid CVV number for Visa card.\n";
    } elseif ($CreditType == 'Mastercard' and (!preg_match("/^\d{3}$/", $CreditVeri))) {
        $errMsg .= "Not a valid CVV number for Mastercard.\n";
    } elseif ($CreditType == "AmericanExpress" and (!preg_match("/^\d{4}$/", $CreditVeri))) {
        $errMsg .= "Not a valid CVV number for American Express.\n";
    }
}
//Used for testing validation.
if ($errMsg != "") {
    session_start();
    $_SESSION["errMsg"] = $errMsg;
    header("location:validateFail.php");
} else {
    header("location:successful.html");    
//Database code will not work as Restaurant name, meal id, small, medium etc.
//are not being passed through and table will not exist as its in local host.
    // $host = "localhost";
    // $user = "root";
    // $pwd = "";
    // $sql_db = "Payment";

    // $conn = @mysqli_connect(
    //     $host,
    //     $user,
    //     $pwd,
    //     $sql_db
    // );

    // if(!$conn){
    //     echo "<p>Database connection failure</p>"; 
    // }
    // else{
    //     $sql_table="sold";
    // }
    // $query="INSERT into $sql_table(Restaurant_Name,MealID,Small,Medium,Large,Sold,Profit)
    // values('$Restaurant','$MealID','$Small','$Medium','$Large','$Sold','$Profit')";
    // $result = mysqli_query($conn, $query); 
    // if(!$result){
    //     echo "<p class=\"wrong\">Something is wrong with ", $query,"</p>";
    // }else{
    //     header("location:successful.html");    
    // }
}
