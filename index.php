<?php 
$username = "root";
$password = "";
$database = "Homelessness";

try {
    $pdo = new PDO("mysql:host=localhost;database=$database", $username, $password);
    // Set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch(PDOException $e){
    die("ERROR: Could not connect. " . $e->getMessage());
  }
  
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="assets/css/styles.css">

        <!-- =====BOX ICONS===== -->
        <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>

        <title>Data Analysis of Homelessness</title>
    </head>
    <body>

        <?php 
            // Attempt select query execution
            try{
            $sql = "SELECT * FROM averages.averages";   
            $result = $pdo->query($sql);
            if($result->rowCount() > 0) {
                while($row = $result->fetch()) {
                    
                    echo $row["Total homelessness decisions"];
                }
            unset($result);
            } else {
                echo "No records matching your query were found.";
            }
            } catch(PDOException $e){
            die("ERROR: Could not able to execute $sql. " . $e->getMessage());
            }
            
            // Close connection
            unset($pdo);
        ?>
        <!--===== HEADER =====-->
        <header class="l-header">
            <nav class="nav bd-grid">
                <div>
                    <a href="#" class="nav__logo">Data Analysis of Homelessness</a>
                </div>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="#home" class="nav__link active">Home</a></li>
                        <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                        <li class="nav__item"><a href="#Total" class="nav__link">Total </a></li>
                        <li class="nav__item"><a href="#race" class="nav__link">Race</a></li>
                    </ul>
                </div>

                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-menu'></i>
                </div>
            </nav>
        </header>

        <main class="l-main">
            <!--===== HOME =====-->
            <section class="home bd-grid" id="home">
                <div class="home__data">
                    <h1 class="home__title">Data Analysis <br>of</br> <span class="home__title-color">Homelessness</span></h1>

                </div>

                <div class="home__social">
                    <a href="" class="home__social-icon"><i class='bx bxl-github' ></i></a>
                </div>

                <div class="home__img">
                    <svg class="home__blob" viewBox="0 0 480 437" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <mask id="mask0" mask-type="alpha">
                            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                            <image class="home__blob-img" x="50" y="60" href="assets/img/home.png"/>
                        </g>
                    </svg>
                </div>
            </section>

            <!--===== ABOUT =====-->
            <section class="about section " id="about">
                <h2 class="section-title">About</h2>

                <div class="about__container bd-grid">
                    <div class="about__img">
                        <img src="assets/img/Homeless.png" alt="">
                    </div>
                    
                    <div>
                        <h2 class="about__subtitle">Aim</h2>
                        <p class="about__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.</p>           
                    </div>                                   
                </div>
            </section>

            <!--Total-->
            <section class="Total section" id="Total">
                <h2 class="section-title">Toatal Homelessness Decisions</h2>

                <div class="Total__container bd-grid">          
                    <div>
                        <h2 class="Total__subtitle">Total Homelessness Decisions</h2>
                        <p class="Total__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.</p>
                        <div class="Total__chart">
                            <div>
                                <canvas id="myChart"></canvas>
                              </div>
                                   
                        </div>    
                    </div>
                    
                    <div>              
                        <img src="assets/img/work3.jpg" alt="" class="skills__img">
                    </div>
                </div>
            </section>

            <!--===== WORK =====-->
            <section class="work section" id="work">
                <h2 class="section-title">Work</h2>

                <div class="work__container bd-grid">
                    
                </div>
            </section>

        <!--FOOTER-->
        <footer class="footer">
            <p class="footer__title">Data Analysis of Homelessness</p>
            <div class="footer__social">
                <a href="#" class="footer__icon"><i class='bx bxl-github' ></i></a>
            </div>
        </footer>


        <!--SCROLL REVEAL-->
        <script src="https://unpkg.com/scrollreveal"></script>

        <!--MAIN JS-->
        <script src="assets/js/main.js"></script>
        <!--CHART JS-->
        <script src="https://cdn.jsdelivr.net/npm/chart.js@3.7.1/dist/chart.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    </body>
</html>
