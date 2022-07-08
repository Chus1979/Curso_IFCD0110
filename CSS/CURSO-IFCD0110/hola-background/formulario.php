<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--FavIcon el que se ve en la pestaña del navegador -->
    <link rel="icon" href="img/promotv144.png">
    <title>Hola Background</title>
    <!--Agregamos nuestro CSS-->
    <link href="css/index.css" rel="stylesheet" />
     <!--Agregamos Font Awesome desde un CDN. Tamb ién se puede hacer por @import en CSS-->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" rel="stylesheet" />
</head>

<body>
    <!-- Header. esto se insertará dinámicamente con Javascript -->
    <header>
        <!--Etiqueta semántica para añadir un menú de navegación de la página -->
        <nav>
            <a href="index.html">
                <i class="fa-solid fa-house"> </i> Inicio
            </a>
            <a href="contacto.html">
                Contacto
            </a>
            <a href="oferta.html">
                Oferta
            </a>
            <a href="alineamiento.html">
                Alineamiento v y h
            </a>
        </nav>
    </header>
    <div class="background">
        
    
    </div>
    <?php //para q funcione debemos poner en marcha, en el xampp, el apache y mysql

        echo "<br><br><br><hr><h1>Hola Mundo</h1>";
        //echo json_encode($_SERVER);
        //echo "<h2>Me has llamado por el metodo ".$_SERVER['REQUEST_METHOD']."</h2>";
        //Son dos condiciones para la variable metodo que se declara con $ y nombre de la variable.
        //Acordarse que el == es q debe ser exactamente igual a lo escrito a continuación.
        //las variables deben estar escritas igual pq son sensibles.
        //no olvidarse del ; sino no funciona
        $metodo = $_SERVER['REQUEST_METHOD'];

        if($metodo == "GET"){
            echo "<h2> Estos datos se han enviado por el método GET...<br>";
            echo "Tu nombre es ".$_GET['nombre']."<br>";
            echo "Tu edad es ".$_GET['edad']."<br>";
            echo "Tu email es ".$_GET['email']."<br>";
            echo "Tu teléfono es ".$_GET['tel']."<br>";
            echo "Tu te desplazas en ".$_GET['comoviene']."<br>";
            echo "Tu vehículo es ".$_GET['coche']."<br>";
            echo "Tu vehículo es ".$_GET['moto']."<br>";
            echo "Tu vehículo es ".$_GET['barco']."<br>";
            echo "Tu curso será ".$_GET['curso']."</h2>";
           // sleep(1);
           exit;
        }
        if($metodo == "POST"){
            echo "<h2> Estos datos se han enviado por el método POST<br>";
            echo "Tu nombre es ".$_POST['nombre']."<br>";
            echo "Tu edad es ".$_GET['edad']."<br>";
            echo "Tu email es ".$_GET['email']."<br>";
            echo "Tu teléfono es ".$_GET['tel']."<br>";
            echo "Tu te desplazas en".$_GET['comoviene']."<br>";
            echo "Tu vehículo es ".$_GET['coche']."<br>";
            echo "Tu vehículo es ".$_GET['moto']."<br>";
            echo "Tu vehículo es ".$_GET['barco']."<br>";
            echo "Tu curso será ".$_GET['curso']."</h2>";
            exit;
        }
        echo "<h2>Me has llamado por el método ".$metodo."</h2>";
        exit;
        //formulario.php?nombre=yo&edad=&email=yo%40yo.com&tel=&comoviene=vehiculo&curso=&Enviar=Enviar
        //todo lo que se manda desde el formulario
        //Para el checkbox se usaría un bucle y probar a poner el mismo name pero valor distinto
    ?>
    
</body>

</html>