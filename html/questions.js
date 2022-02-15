const answersList = document.querySelectorAll('ol#answers li');
//これ一回answersって名前つけてるのにまたanswersListって名前つけないといけないの？
answersList.forEach(li => li.addEventListener('click', checkClickedAnswer));


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

    //フォームのデータの入れ物を作る
    const formData = new FormData();

    //送信したい値を追加
    formData.append('id', questionId);
    formData.append('selectedAnswer',selectedAnswer);


    // xhr = XMLHttpRequestの頭文字です
    const xhr = new XMLHttpRequest();

    // HTTPメソッドをPOSTに指定、送信するURLを指定
    xhr.open('POST', 'answer.php');

    // フォームデータを送信
    xhr.send(formData);

    // loadendはリクエストが完了したときにイベントが発生する
    xhr.addEventListener('loadend', function(event) {
        /** @type  {XMLHttpRequest}*/
        const xhr = event.currentTarget;


        //リクエストが成功したかステータスコードで確認
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.response);

            //答えが正しいかを判定
            const result = response.result;
            const correctAnswer = response.correctAnswer;
            const correctAnswerValue = response.correctAnswerValue;
            const explanation = response.explanation;

            //画面表示
            displayResult(result, correctAnswer, correctAnswerValue, explanation);

        } else {
            //エラー
            alert('Error:回答データの取得に失敗しました');
        }
    });



}

//document.querySelectorAll('ol#answers li').forEach(li => li.addEventListener('click', function(){
//    alert('clicked');
//}))


function displayResult(result, correctAnswer, correctAnswerValue, explanation) {
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

    //正解の内容をHTMLに組み込む
    document.querySelector('span#correct-answer').innerHTML = correctAnswer + '.  ' + correctAnswerValue;
    document.querySelector('span#explanation').innerHTML = explanation;
    //間違っていたときだけ色を変更
    document.querySelector('span#correct-answer').style.color = answerColorCode;
    //答え全体を表示
    document.querySelector('div.section2').style.display = 'block';

}
