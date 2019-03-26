<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">

<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
      if (isset($_POST['email'])) {$email = $_POST['email'];}
      if (isset($_POST['name'])) {$name = $_POST['name'];}
      if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
      $to = "kovarnyi@gmail.com"; /*Укажите ваш адрес электронной почты*/
      $headers = "Content-type: text/plain; charset = utf-8";
      $message = "Email: $email \n\nИмя: $name \n\nТелефон: $phone";
      mail ($to, $subject, $message, $headers);
  };
?>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>title</title>

  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
  <link rel="shortcut icon" href="icon/favicon.ico">
  <link rel="stylesheet" href="css/main.css">

  <script>(function(w,d,k){w['r7k12']=w['r7k12']||[];var s=d.createElement('script');s.async=1;s.src='https://counter.r7k12.com/scripts/'+k+'/counter.js';s.type='application/javascript';d.head.appendChild(s);})(window,document,'1db0f47f44b05a6881f0fae1b2dbf2ad');r7k12.push({hit:'pageview'});</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-131011147-2');
</script>
</head>
<body>

  <style>
    .popup__text {
      color: #ffffff
    }
    .popup__text:hover {
      margin-top: 10px;
      text-decoration: underline;
    }
  </style>

  <div class="overlay">
    <div class="popup">
      <span class="popup__icon"></span>
      <h2 class="popup__title">Ваша заявка принята</h2>
      <p class="popup__text">Мы свяжемся с вами в ближайшее время</p>
      <a class="popup__text" href="index.html">Вернуться назад</a>
    </div>
  </div>
</body>
</html>
