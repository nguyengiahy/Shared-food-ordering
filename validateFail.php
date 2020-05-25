<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Payment</title>
</head>

<body>

  <?php
    //Page is currently just for testing inputs and see if they work
    //The code below will output the session errMsg.
    session_start();
    print_r($_SESSION["errMsg"]);
  ?>

  <form action="validate.php" method="POST">
    <p>
      <label for="CreditType">Credit Card Type</label>
      <select class="CreditType" name="CreditType" id="CreditType">
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="AmericanExpress">American Express</option>
      </select>
    </p>
    <p>
      <label for="CreditName">Name on credit card:</label>
      <input type="text" name="CreditName" id="CreditName" required="required" pattern="^[a-zA-Z\s]{1,40}$" />
    </p>
    <p>
      <label for="CreditNumber">Credit card number:</label>
      <input type="text" name="CreditNumber" id="CreditNumber" required="required" pattern="^\d{15,16}$" />
    </p>
    <p>
      <label for="CreditExpiry">Expiration Date of Credit Card</label>
      <input type="text" name="CreditExpiry" id="CreditExpiry" required="required" pattern="^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$" />
      <!--Code was obtained from https://stackoverflow.com/questions/2188689/regular-expression-to-match-6-15-alphanumeric-characters-plus-symbols-above-1-8 -->
    </p>
    <p>
      <label for="CreditVeri">CCV Number</label>
      <input type="text" name="CreditVeri" id="CreditVeri" required="required" pattern="^\d{3,4}$" />
    </p>


    <input type="submit" name="submit" value="Checkout"/>
    <input type="reset" name="cancel" value="Cancel" id="CancelB" />
  </form>
</body>

</html>