<?php
/**
 * CRM Connector
 *
 * Використання:
 *   require 'crm-connector.php';
 *   $result = sendToCRM('API_TOKEN', $_POST);
 *   // або для SPA (JSON-бек):
 *   $result = sendToCRM('API_TOKEN', json_decode(file_get_contents('php://input'), true));
 */

define('CRM_ENDPOINT', 'https://admin.case-crm.pro/backend/public/api/leads');

/**
 * Відправляє дані форми в CRM.
 *
 * @param string $apiToken  API-токен з адмінки CRM
 * @param array  $formData  Дані форми
 * @return array ['status' => bool, 'message' => string, 'data' => array|null]
 */
function sendToCRM(string $apiToken, array $formData): array
{
    $formData['_source_url'] = $_SERVER['HTTP_REFERER'] ?? '';
    $formData['_client_ip']  = $_SERVER['HTTP_X_FORWARDED_FOR']
        ? trim(explode(',', $_SERVER['HTTP_X_FORWARDED_FOR'])[0])
        : ($_SERVER['REMOTE_ADDR'] ?? '');

    $ch = curl_init(CRM_ENDPOINT);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => http_build_query($formData),
        CURLOPT_HTTPHEADER     => [
            'Authorization: Bearer ' . $apiToken,
            'Accept: application/json',
        ],
        CURLOPT_TIMEOUT        => 10,
        CURLOPT_SSL_VERIFYPEER => true,
    ]);

    $body     = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error    = curl_error($ch);
    curl_close($ch);

    if ($error) {
        return ['status' => false, 'message' => 'Connection error: ' . $error, 'data' => null];
    }

    $decoded = json_decode($body, true);
    if (!is_array($decoded)) {
        return ['status' => false, 'message' => 'Invalid CRM response (HTTP ' . $httpCode . ')', 'data' => null];
    }

    return $decoded;
}
