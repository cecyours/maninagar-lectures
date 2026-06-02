<?php

// Error variables
$nameErr = $emailErr = $passwordErr = $genderErr = $websiteErr = "";
$name = $email = $password = $gender = $comment = $website = "";
$successMsg = "";

// Function to clean input
function test_input($data)
{
    return htmlspecialchars(stripslashes(trim($data)));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Name
    if (empty($_POST["name"])) {
        $nameErr = "Name is required";
    } else {
        $name = test_input($_POST["name"]);
        if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
            $nameErr = "Only letters and spaces allowed";
        }
    }

    // Email
    if (empty($_POST["email"])) {
        $emailErr = "Email is required";
    } else {
        $email = test_input($_POST["email"]);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format";
        }
    }

    // PASSWORD (PROPER VALIDATION)
    if (empty($_POST["password"])) {
        $passwordErr = "Password is required";
    } else {
        $password = test_input($_POST["password"]);

        if (strlen($password) < 6) {
            $passwordErr = "Password must be at least 6 characters";
        } elseif (!preg_match("/[A-Z]/", $password)) {
            $passwordErr = "Password must contain at least 1 uppercase letter";
        } elseif (!preg_match("/[a-z]/", $password)) {
            $passwordErr = "Password must contain at least 1 lowercase letter";
        } elseif (!preg_match("/[0-9]/", $password)) {
            $passwordErr = "Password must contain at least 1 number";
        }
    }

    // Website
    if (!empty($_POST["website"])) {
        $website = test_input($_POST["website"]);
        if (!filter_var($website, FILTER_VALIDATE_URL)) {
            $websiteErr = "Invalid website URL";
        }
    }

    // Comment
    if (!empty($_POST["comment"])) {
        $comment = test_input($_POST["comment"]);
    }

    // Gender
    if (empty($_POST["gender"])) {
        $genderErr = "Gender is required";
    } else {
        $gender = test_input($_POST["gender"]);
    }

    // Success condition
    if ($nameErr == "" && $emailErr == "" && $passwordErr == "" && $genderErr == "" && $websiteErr == "") {
        $successMsg = "Form submitted successfully 🎉";
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>PHP Form Validation</title>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

    <style>
        .error {
            color: red;
            font-size: 14px;
        }
    </style>
</head>

<body class="bg-light">

    <div class="container d-flex justify-content-center align-items-center min-vh-100">
        <div class="card shadow p-4" style="max-width:550px;width:100%">

            <h3 class="text-center text-primary mb-2">PHP Form Validation</h3>

            <p class="text-muted text-center">
                <span class="text-danger">*</span> Required fields
            </p>

            <?php if ($successMsg != "") { ?>
                <div class="alert alert-success text-center">
                    <?= $successMsg ?>
                </div>
            <?php } ?>

            <form method="post">

                <!-- Name -->
                <div class="mb-3">
                    <label class="form-label">Name *</label>
                    <input type="text" name="name" class="form-control" value="<?= $name ?>">
                    <div class="error"><?= $nameErr ?></div>
                </div>

                <!-- Email -->
                <div class="mb-3">
                    <label class="form-label">Email *</label>
                    <input type="text" name="email" class="form-control" value="<?= $email ?>">
                    <div class="error"><?= $emailErr ?></div>
                </div>

                <!-- Password -->
                <div class="mb-3">
                    <label class="form-label">Password *</label>
                    <input type="password" name="password" class="form-control">
                    <small class="text-muted">
                        Min 6 chars, 1 uppercase, 1 lowercase, 1 number
                    </small>
                    <div class="error"><?= $passwordErr ?></div>
                </div>

                <!-- Website -->
                <div class="mb-3">
                    <label class="form-label">Website</label>
                    <input type="text" name="website" class="form-control" value="<?= $website ?>">
                    <div class="error"><?= $websiteErr ?></div>
                </div>

                <!-- Comment -->
                <div class="mb-3">
                    <label class="form-label">Comment</label>
                    <textarea name="comment" class="form-control" rows="3"><?= $comment ?></textarea>
                </div>

                <!-- Gender -->
                <div class="mb-3">
                    <label class="form-label">Gender *</label><br>
                    <input type="radio" name="gender" value="Male" <?= ($gender == "Male") ? "checked" : "" ?>> Male
                    <input type="radio" name="gender" value="Female" <?= ($gender == "Female") ? "checked" : "" ?>> Female
                    <input type="radio" name="gender" value="Other" <?= ($gender == "Other") ? "checked" : "" ?>> Other
                    <div class="error"><?= $genderErr ?></div>
                </div>

                <button type="submit" class="btn btn-primary w-100">
                    Submit
                </button>

            </form>

        </div>
    </div>

</body>

</html>