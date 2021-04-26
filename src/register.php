<?php

session_start();


$errors = array(); 
$db = mysqli_connect('localhost', 'root', '', 'testing');

if(isset($_POST['register']) ){
 
       
    $name=$_REQUEST['name'];
    $email = $_REQUEST['email'];
    $password = $_REQUEST['password'];
    $retypepassword = $_REQUEST['retypepassword'];
    $dob=$_REQUEST['dob'];
    $address=$_REQUEST['address'];
    $phn_no=$_REQUEST['phn_no'];
    $gender=$_REQUEST['gender'];

    
    if (empty($name)) { array_push($errors, "Name is required"); }
    if (empty($email)) { array_push($errors, "Email is required"); }
    if (empty($password)) { array_push($errors, "Password is required"); }
    if ($password != $retypepassword) {
      array_push($errors, "Password do not match");
    }
    $user_check_query = "SELECT * FROM user WHERE name='$name' OR email='$email' LIMIT 1";
    $result = mysqli_query($db, $user_check_query);
    $user = mysqli_fetch_assoc($result);
    
    if ($user) { // if user exists
        if ($user['name'] === $name) {
          array_push($errors, "Name already exists");
        }
    
        if ($user['email'] === $email) {
          array_push($errors, "Email already exists");
        }
      }
      if (count($errors) == 0) {
        $query = "INSERT into user (id, name, email,password, retypepassword, gender, dob, address, phn_no) VALUES ('', '$name', '$email', '".md5($password)."', '".md5($retypepassword)."', '$gender', '$dob', '$address', '$phn_no')";
        $result=mysqli_query($db, $query);
        $_SESSION['name'] = $name;
        $_SESSION['success'] = "Registered Successfully";
        header('location: login.php');
    }

}   
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700">
<title>Welcome to the world of Crafts</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="assests/css/style.css">
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

<style>
    #input{
 width: 100%;
border-radius:0;
    padding: 10px;
    border: none;
    outline:none;
    border-bottom:1px black solid;
    text-align: center;
    }
    #input-icons i {
            position: absolute;
            margin-right:10%;
        }
          
        #input-icons {
            width: 100%;
            margin-bottom: 10px;
            
        }
          
        .fa {
            padding: 10px;
          margin-right:10%;
            min-width: 70px;
     
            text-align: center;
   
        }
        #button {
 
 margin-top: 1px;
 margin-right: 2px;
 position: absolute;
 top: 1%;
 right: 3%;
}
    </style>
</head>
<body>
<div class="signup-form">
<img src="register.jpg" style="position:absolute;margin-left:20%;margin-top:5%;">
<div class="col-sm-8 col-md-11" style="margin-left:40%;margin-top:5%;padding:1px 16px;width:500px;">

<h2 style="margin-bottom:15%">Register</h2>
<?php include('errors.php'); ?>
    <form action="register.php" method="POST" enctype="multipart/form-data">


        <div class="form-group">
			<div class="row">
                <div class="col" id="input-icons"><i class="fa fa-user-circle" aria-hidden="true"></i><input type="text" id="input" class="form-control" name="name" placeholder="First Name" required="required" ></div>

				<div class="col" id="input-icons"><i class="fa fa-user-circle" aria-hidden="true"></i><input type="text" id="input" class="form-control" name="last_name" placeholder="Last Name" required="required"></div>
			</div>        	
        </div>
        <div class="form-group" id="input-icons">
        <i class="fa fa-envelope" aria-hidden="true"></i><input type="email" id="input" class="form-control" name="email" placeholder="Email ID" required="required">
   
    </div>
		<div class="form-group" id="input-icons">
        <i class="fa fa-key" aria-hidden="true"></i> <input type="password" id="input" class="form-control" name="password" placeholder="Password" required="required">
        </div>
		<div class="form-group" id="input-icons">
        <i class="fa fa-check" aria-hidden="true"></i> <input type="password" id="input" class="form-control" name="retypepassword" placeholder="Confirm Password" required="required">
        </div>
        <div class="form-group" id="input-icons">
  
  <input type="date" id="input" name="dob" class="form-control"  placeholder="Date Of Birth" required="required">
      </div>

    <div class="form-group" id="input-icons">
    <label  placeholder="Address" >Address </label>
    <textarea  id="input" name="address" placeholder="Address" required="required">
                  </textarea>
                  </div>
    <div class="form-group" id="input-icons">
    <i class="fa fa-phone" aria-hidden="true"></i>
  <input type="number" id="input" name="phn_no" class="form-control" maxlength="2" placeholder="Phone number" required="required">
      </div>
      <div class="form-group" id="input-icons">
        <p>Select your gender</p>
  <input  type="radio" id="male" name="gender" value="male" required="required">
  <label for="male">Male</label>
  <input  type="radio" id="female" name="gender" value="female" required="required">
  <label for="female">Female</label><br>
    </div>
		<div class="form-group" id="input-icons">
            <button type="submit" name="register" class="btn btn-success btn-lg btn-block">Register Now</button>
        </div>
        <div class="text-center">Already have an account? <a href="login.php">Sign in</a></div>
   
    </form>
</div>
</div>
</body>
</html>

