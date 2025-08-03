<?php
$toEmail = 'teenitclub@gmail.com';
$subject = 'Нове повідомлення з форми зворотного звʼязку';

header('Content-Type: application/json');

$firstName = trim($_POST['first_name'] ?? '');
$phoneNumber = trim($_POST['phone_number'] ?? '');

if (empty($firstName) || empty($phoneNumber)) {
    http_response_code(400);
    echo json_encode(['status' => false, 'message' => 'Заповніть усі поля']);
    exit;
}

if (!preg_match('/^\+?[0-9\s\-()]{7,20}$/', $phoneNumber)) {
    http_response_code(400);
    echo json_encode(['status' => false, 'message' => 'Некоректний номер телефону']);
    exit;
}

$message = "Ім'я: $firstName\nТелефон: $phoneNumber\nДата: " . date('Y-m-d H:i:s');

$headers = "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($toEmail, $subject, $message, $headers);

// === Telegram ===
$botToken = '8227205420:AAHLz4E_VP3_h5l-9aJvYSmv3P2Xs9XQO_c';
$chatId = '-1002570570439'; // Замінити на свій

function sendTelegram($chatId, $text, $botToken) {
    $url = "https://api.telegram.org/bot$botToken/sendMessage";
    $data = [
        'chat_id' => $chatId,
        'text' => $text,
        'parse_mode' => 'HTML'
    ];
    file_get_contents($url . '?' . http_build_query($data));
}

if ($sent) {
    $tgMessage = "<b>Нове повідомлення з форми:</b>\n"
               . "<b>Ім’я:</b> $firstName\n"
               . "<b>Телефон:</b> $phoneNumber\n"
               . "<b>Дата:</b> " . date('Y-m-d H:i:s');
    sendTelegram($chatId, $tgMessage, $botToken);

    echo json_encode(['status' => true, 'message' => 'Дякуємо! Вашу заявку прийнято.']);
} else {
    http_response_code(500);
    echo json_encode(['status' => false, 'message' => 'Сталася помилка при надсиланні. Спробуйте пізніше.']);
}
