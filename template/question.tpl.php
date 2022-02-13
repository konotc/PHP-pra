<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="questions.js" defer></script>
    <title>問題<?php echo $id; ?> | Quiz</title>
</head>
<body>
    <div id = "main">
        <h1>Quiz</h1>
        <div class="section1">
            <h2>問題<?php echo $id; ?></h2>
            <p>
                <?php echo $question; ?>
            </p>
            <h3>選択肢</h3>
            <ol id = "answers" data-id="<?php echo $id; ?>">
                <?php foreach($answers as $key => $value): ?>
                <li data-answer="<?php echo $key; ?>"><?php echo $value; ?></li>
                <?php endforeach; ?>
            </ol>
        </div>

        <div id="section-correct-answer" class ="section2">
            <h2>answer</h2>
            <p>
                <span id="correct-answer"><?php echo $correctAnswer; ?>. <?php echo $correctAnswerValue; ?></span><br>
                <?php echo $explanation; ?>

            </p>
        </div>

        <form method="POST" action="answer.php">
            <p>ID: <br><input name="id" type="text" value="1"></p>
            <p>選んだ答え: <br><input name="selectedAnswer" type="text" value="C"></p>
            <p><input type="submit" value="送信"></p>
        </form>

        <div class ="section3">
            <p><a href="index.html">戻る</a></p>
        </div>
    </div>
</body>
</html>
