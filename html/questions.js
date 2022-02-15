const answersList = document.querySelectorAll('ol#answers li');
//これ一回answersって名前つけてるのにまたanswersListって名前つけないといけないの？
answersList.forEach(li => li.addEventListener('click', checkClickedAnswer));

//正しい答え
const correctAnswers = {
    1: 'C',
    2: 'A',
    3: 'D',
    4: 'B',
};

function checkClickedAnswer(event) {
    //イベント発生時の詳細な情報を取得することができる
    const clickAnswerElement = event.currentTarget;
    //クリックされた答えの要素,クリックされた箇所のコード(idタグを拾ってくる)
    //イベント発生元の要素の情報を取得したい
    //-はset??
    //alert('clicked!');

    //選択した答え(A,B,C,D)
    const selectedAnswer = clickAnswerElement.dataset.answer;
    //すべてのdata属性を含むobject。
    //data以降の名前をもとになんのデータを参照するかを探してくる

    const questionId = clickAnswerElement.closest('ol#answers').dataset.id;
    //closest：親の要素を取得することができるメソッド。
    //このJSフォルダを引っ張ってきているそれぞれのファイルでdate-idを探してきている
    //親から('ol#answers').dataset.idはなにかを探してきている
    //正しい答え(A,B,C,D)
    const correctAnswer = correctAnswers[questionId];

    //フォームのデータの入れ物を作る
    const formData = new FormData();

    //送信したい値を追加
    formData.append('id', questionId);
    formData.append('selectedAnswer',selectedAnswer);

    //答えが正しいかを判定
    const result = selectedAnswer === correctAnswer;

    // xhr = XMLHttpRequestの頭文字です
    const xhr = new XMLHttpRequest();

    // HTTPメソッドをPOSTに指定、送信するURLを指定
    xhr.open('POST', 'answer.php');

    // フォームデータを送信
    xhr.send(formData);




    displayResult(result);
}

//document.querySelectorAll('ol#answers li').forEach(li => li.addEventListener('click', function(){
//    alert('clicked');
//}))


function displayResult(result) {
        //メッセージを入れる変数を用意
    let message;
    //カラーコードを入れる変数を用意
    let answerColorCode;

    //答えが正しいか判定
    if (result) {
        //正しい答えのとき
        message = 'あってるよ';
        answerColorCode = 'green';
        } else {
    //間違った答えの場合
    message = '間違ってるよ';
    answerColorCode = 'red';
    }
    //色を変更
    alert(message);
    document.querySelector('span#correct-answer').style.color = answerColorCode;
    //答え全体を表示
    document.querySelector('div.section2').style.display = 'block';

}
