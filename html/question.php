<?php

require __DIR__.'/../lib/functions.php';

$id = escape($_GET['id'] ?? '');

$data = fetchById($id);

if (!$data) {
    error404();
}

$formattedData = generateFormattedData($data);

$question = $formattedData['question'];
$answers = $formattedData['answers'];

$assignData = [
    'id' => $formattedData['id'],
    'question' => $formattedData['question'],
    'answers' => $formattedData['answers'],
];
loadTemplate('question', $assignData);
?>
