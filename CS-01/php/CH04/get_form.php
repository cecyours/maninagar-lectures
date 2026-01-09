<!DOCTYPE html>
<html lang="en">

<head>
    <title>Attractive Bootstrap Form</title>

    <!-- Bootstrap 5 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Icons -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    

    <style>
        body {
            min-height: 100vh;
            background: linear-gradient(135deg, #667eea, #764ba2);
        }

        .glass-card {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(12px);
            border-radius: 20px;
            color: white;
        }

        .form-control,
        .form-select {
            border-radius: 12px;
        }

        label {
            font-weight: 500;
        }

        .btn-custom {
            background: linear-gradient(to right, #00c6ff, #0072ff);
            border: none;
            border-radius: 30px;
            padding: 10px 40px;
        }

        .btn-custom:hover {
            opacity: 0.9;
        }
    </style>
</head>

<body>

    <div class="container d-flex justify-content-center align-items-center">
        <div class="col-md-8 col-lg-7 mt-5">

            <div class="card glass-card shadow-lg p-4">
                <h2 class="text-center mb-4">
                    <i class="bi bi-person-circle"></i> Student Registration
                </h2>

                <form method="get">

                    <!-- Name & Email -->
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label>Full Name</label>
                            <input type="text" name="name" class="form-control" placeholder="Enter your name">
                        </div>

                        <div class="col-md-6">
                            <label>Email</label>
                            
                            <input type="email" name="email" class="form-control" placeholder="example@gmail.com">
                        </div>
                    </div>

                    <!-- Password -->
                    <div class="mb-3">
                        <label>Password</label>
                        <input type="password" name="password" class="form-control">
                    </div>

                    <!-- Gender -->
                    <div class="mb-3">
                        <label>Gender</label><br>
                        <input type="radio" name="gender" value="Male"> Male
                        <input type="radio" name="gender" value="Female" class="ms-3"> Female
                    </div>

                    <!-- Course -->
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

                    <!-- Skills -->
                    <div class="mb-3">
                        <label>Skills</label><br>
                        <input type="checkbox" name="skills[]" value="HTML"> HTML
                        <input type="checkbox" name="skills[]" value="CSS" class="ms-3"> CSS
                        <input type="checkbox" name="skills[]" value="JS" class="ms-3"> JavaScript
                    </div>

                    <!-- Address -->
                    <div class="mb-3">
                        <label>Address</label>
                        <textarea name="address" rows="3" class="form-control"></textarea>
                    </div>

                    <!-- City -->
                    <div class="mb-4">
                        <label>City</label>
                        <input type="text" name="city" class="form-control">
                    </div>

                    <!-- Button -->
                    <div class="text-center">
                        <button class="btn btn-custom text-white">
                            <i class="bi bi-send"></i> Submit
                        </button>
                    </div>

                </form>
            </div>

            <!-- Output -->
            <?php
            // if (isset($_GET['name'])) {
            //     echo "<div class='alert alert-light mt-4'>";
            //     echo "<b>Welcome:</b> " . $_GET['name'];
            //     echo "</div>";
            // }
            ?>
            
            <?php
            if (isset($_GET['name'])) {
            ?>
                <div class="card mt-4 shadow-lg">
                    <div class="card-header bg-success text-white text-center">
                        <h4 class="mb-0">Submitted Student Data</h4>
                    </div>

                    <div class="card-body bg-light text-dark">
                        <table class="table table-bordered table-hover">
                            <tr>
                                <th>Name</th>
                                <td><?= $_GET['name'] ?></td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td><?= $_GET['email'] ?></td>
                            </tr>
                            <tr>
                                <th>Password</th>
                                <td><?= $_GET['password'] ?></td>
                            </tr>
                            <tr>
                                <th>Gender</th>
                                <td><?= $_GET['gender'] ?? 'Not selected' ?></td>
                            </tr>
                            <tr>
                                <th>Course</th>
                                <td><?= $_GET['course'] ?></td>
                            </tr>
                            <tr>
                                <th>Address</th>
                                <td><?= $_GET['address'] ?></td>
                            </tr>
                            <tr>
                                <th>City</th>
                                <td><?= $_GET['city'] ?></td>
                            </tr>
                            <tr>
                                <th>Skills</th>
                                <td>
                                    <?php
                                    if (!empty($_GET['skills'])) {
                                        echo implode(", ", $_GET['skills']);
                                    } else {
                                        echo "No skills selected";
                                    }
                                    ?>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            <?php
            }
            ?>

        </div>
    </div>

</body>

</html>