<?php
$name = htmlspecialchars($_REQUEST['name'], ENT_QUOTES);
$phone = htmlspecialchars($_REQUEST['phone'], ENT_QUOTES);
$email = htmlspecialchars($_REQUEST['email'], ENT_QUOTES);



if (!$errors) {
    $to = 'kovarnyi@gmail.com';
    $header = 'MIME-Version: 1.0'."\r\n";
    $header .= 'Content-type: text/html; charset=utf-8'."\r\n";
    $header .= 'From: =?utf-8?b?'.base64_encode("Макарьин Виктор Заявка от: [$email]").'?= <no-reply@'.$_SERVER['HTTP_HOST'].'>'."\r\n";
    $header .= 'Subject: Лендинг ['.$email.']';

    $subject = 'Лендинг Заявка от ['.$email.']';


    $msg = '<html>'."\n";
    $msg .= ' <head>'."\n";
    $msg .= ' <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'."\n";
    $msg .= ' </head>'."\n";
    $msg .= ' <body>'."\n";
    $msg .= ' <h2>Вам письмо</h2>'."\n";
    $msg .= ' <table cellpadding="5" cellspacing="0">'."\n";
    $msg .= ' <tr><td><strong>Имя:</strong></td><td>'.$name.' </td></tr>'."\n";
    $msg .= ' <tr><td><strong>Телефон:</strong></td><td>'.$phone.'</td></tr>'."\n";
    $msg .= ' <tr><td><strong>Почта:</strong></td><td>'.$email.'</td></tr>'."\n";
    $msg .= ' </table>'."\n";
    $msg .= ' </body>'."\n";
    $msg .= '</html>'."\n";

    if (mail($to, $subject, $msg, $header, '-fno-reply@'.$_SERVER['HTTP_HOST'])) {
        $output .= ' <h2 class="popup__title">Спасибо, Ваша заявка принята</h2>
    <img src="img/succes.svg" alt="успех" width="142px" height="130px" class="popup__succes-send">
    <a class="popup__go-back">
      <svg width="6px" height="11px" class="popup__succes-send-icon">
        <use xlink:href="#icon-arrow-left"></use>
      </svg>
      Вернуться</a>';
    } else {
        $output = '<p>Произошла ошибка, пожалуйста повторите попытку позже.</p>';
    }
}

print $output;
