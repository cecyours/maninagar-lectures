<!DOCTYPE html>
<html lang="en">
<head>
    <title>Modern POST Form UI</title>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Icons -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">

    <style>
        body {
            min-height: 100vh;
            background: #f4f6f9;
            font-family: 'Segoe UI', sans-serif;
        }

        .main-card {
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }

        .left-panel {
            background: linear-gradient(180deg, #4e54c8, #8f94fb);
            color: white;
            padding: 40px;
        }

        .left-panel h2 {
            font-weight: bold;
        }

        .form-control, .form-select {
            border-radius: 12px;
        }

        .submit-btn {
            background: #4e54c8;
            border: none;
            border-radius: 30px;
            padding: 10px 35px;
            color: white;
        }

        .submit-btn:hover {
            background: #3c40a0;
        }
    </style>
</head>

<body>

<div class="container d-flex justify-content-center align-items-center">
    <div class="col-lg-9 mt-5">

        <div class="row main-card bg-white">

            <!-- LEFT PANEL -->
            <div class="col-md-4 left-panel d-flex flex-column justify-content-center">
                <h2><i class="bi bi-mortarboard-fill"></i> Student Panel</h2>
                <p class="mt-3">
                    Register to access courses, projects, and learning resources.
                </p>
                <ul>
                    <li>✔ Secure POST Form</li>
                    <li>✔ Clean UI</li>
                    <li>✔ Industry Style</li>
                </ul>
            </div>

            <!-- RIGHT PANEL -->
            <div class="col-md-8 p-4">
                <h4 class="mb-4 text-center">Student Registration</h4>

                <form method="post">

                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label>Full Name</label>
                            <input type="text" name="name" class="form-control">
                        </div>
                        <div class="col-md-6">
                            <label>Email</label>
                            <input type="email" name="email" class="form-control">
                        </div>
                    </div>

                    <div class="mb-3">
                        <label>Password</label>
                        <input type="password" name="password" class="form-control">
                    </div>

                    <div class="mb-3">
                        <label>Gender</label><br>
                        <input type="radio" name="gender" value="Male"> Male
                        <input type="radio" name="gender" value="Female" class="ms-3"> Female
                    </div>

                    <div class="mb-3">
                        <label>Course</label>
                        <select name="course" class="form-select">
                            <option>Select Course</option>
                            <option>PHP</option>
                            <option>Python</option>
                            <option>React</option>
                            <option>Flutter</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label>Skills</label><br>
                        <input type="checkbox" name="skills[]" value="HTML"> HTML
                        <input type="checkbox" name="skills[]" value="CSS" class="ms-3"> CSS
                        <input type="checkbox" name="skills[]" value="JS" class="ms-3"> JavaScript
                    </div>

                    <div class="mb-3">
                        <label>City</label>
                        <input type="text" name="city" class="form-control">
                    </div>

                    <div class="text-center">
                        <button class="submit-btn">
                            <i class="bi bi-check-circle"></i> Submit
                        </button>
                    </div>

                </form>
            </div>
        </div>

        <!-- OUTPUT -->
        <?php if (isset($_POST['name'])) { ?>
            <div class="card mt-4">
                <div class="card-header bg-success text-white text-center">
                    Submitted Data
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <tr><th>Name</th><td><?= $_POST['name'] ?></td></tr>
                        <tr><th>Email</th><td><?= $_POST['email'] ?></td></tr>
                        <tr><th>Gender</th><td><?= $_POST['gender'] ?? '' ?></td></tr>
                        <tr><th>Course</th><td><?= $_POST['course'] ?></td></tr>
                        <tr><th>Skills</th><td><?= implode(", ", $_POST['skills'] ?? []) ?></td></tr>
                        <tr><th>City</th><td><?= $_POST['city'] ?></td></tr>
                    </table>
                </div>
            </div>
        <?php } ?>

    </div>
</div>

</body>
</html>
