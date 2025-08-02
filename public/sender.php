<?php
// sender.php

// Налаштування
$toEmail = 'feedbacktoanti@gmail.com'; // Заміни на свою пошту
$subject = 'Нове повідомлення з форми зворотного звʼязку';

// Відповідь у форматі JSON
header('Content-Type: application/json');

// Валідація
$firstName = trim($_POST['first_name'] ?? '');
$phoneNumber = trim($_POST['phone_number'] ?? '');

if (empty($firstName) || empty($phoneNumber)) {
    http_response_code(400);
    echo json_encode(['status' => false, 'message' => 'Заповніть усі поля']);
    exit;
}

// Додаткова валідація телефону (опційно)
if (!preg_match('/^\+?[0-9\s\-()]{7,20}$/', $phoneNumber)) {
    http_response_code(400);
    echo json_encode(['status' => false, 'message' => 'Некоректний номер телефону']);
    exit;
}

// Текст повідомлення
$message = "Ім'я: $firstName\nТелефон: $phoneNumber\nДата: " . date('Y-m-d H:i:s');

// Надсилання листа
$headers = "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($toEmail, $subject, $message, $headers);

if ($sent) {
    echo json_encode(['status' => true, 'message' => 'Дякуємо! Вашу заявку прийнято.']);
} else {
    http_response_code(500);
    echo json_encode(['status' => false, 'message' => 'Сталася помилка при надсиланні. Спробуйте пізніше.']);
}
