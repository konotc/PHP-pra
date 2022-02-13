function calculateBmi(height,weight) {
    return weight/(height**2);
}

function handan()
{
    const bmi = (calculateBmi(1.80,67));
    let message = 'わかりません';
    if(bmi<18.50){
        message = '体重低いよ';
    } else if (bmi >= 25.0){
        message = '体重重いよ';
    } else {
        message = 'ふつうすぎる';
    }
    return message;
}

console.log(handan());
