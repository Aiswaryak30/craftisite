<?php
 
 $db = mysqli_connect('localhost', 'root', '', 'testing');

 $errors = array(); 
    if (isset($_POST['login'])) {
        $email = mysqli_real_escape_string($db, $_POST['email']);
        $password = mysqli_real_escape_string($db, $_POST['password']);
      
        if (empty($email)) {
            array_push($errors, "Email is required");
        }
        if (empty($password)) {
            array_push($errors, "Password is required");
        }
      
        if (count($errors) == 0) {
            $password = md5($password);
            $query = "SELECT * FROM user WHERE email='$email' AND password='$password'";
            $results = mysqli_query($db, $query);
            if (mysqli_num_rows($results) == 1) {
              $_SESSION['name'] =  $email;
              $_SESSION['success'] = "You are now logged in";
              header('location: /project/craftisite/index.html');
            }else {
                array_push($errors, "Wrong username/password combination");
            }
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
    </style>
</head>
<body>
<div class="signup-form">
<div class="col-sm-8 col-md-11" style="margin-left:30%;margin-top:10%;padding:1px 16px;width:450px;">
<?php include('errors.php'); ?>
    <form action="login.php" method="post" enctype="multipart/form-data">
		<h2 style="margin-bottom:10%;">Login</h2>
	
        <div class="form-group" id="input-icons">
        <i class="fa fa-envelope" aria-hidden="true"></i>	<input type="email" id="input" class="form-control" name="email" placeholder="Email" required="required">
        </div>
		<div class="form-group" id="input-icons">
        <i class="fa fa-key" aria-hidden="true"></i>   <input type="password" id="input" class="form-control" name="password" placeholder="Password" required="required">
        </div>
		<div class="form-group" id="input-icons">
            <button type="submit" name="login" class="btn btn-success btn-lg btn-block">Login</button>
        </div>
        <div class="text-center">Don't have an account? <a href="/craftisite/src/register.php">Register Here</a></div>
    </form>
</div>
<img src="/craftisite/project/signup-image.jpg" style="position:absolute;margin-left:65%;margin-top:-20%;">
</div>
</body>
</html>