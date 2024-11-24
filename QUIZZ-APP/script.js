const quebank =[{
    'que': 'Which type of JavaScript language is ___',
    'a':'a. Object-Oriented',
    'b':'b. Object-Based',
    'c':'c. High-level',
    'd':'d. low-level',
    'corect':'b',
},
{
    'que': 'The "function" and " var" are known as:',
    'a':'Object-Oriented',
    'b':'Object-Based',
    'c':'High-level',
    'd':'low-level',
    'corect':'b',
},
{
    'que': 'Which of the following type of a variable is volatile?',
    'a':'Object-Oriented',
    'b':'Object-Based',
    'c':'High-level',
    'd':'low-level',
    'corect':'b',
}
]

let index=0;
let total =quebank.length;
let right=0,wrong=0;
const question=document.getElementById('question');
const option =document.querySelectorAll('.option');

const mcq =()=>{
    if(index===total){
        return finish()
    }else{
        reset()
    }
    const data =quebank[index]
    question.innerText= `${index+1} ${data.que}`;
    option[0].nextElementSibling.innerText=data.a
    option[1].nextElementSibling.innerText=data.b
    option[2].nextElementSibling.innerText=data.c
    option[3].nextElementSibling.innerText=data.d
}

const submit =()=>{
    const data =quebank[index]
    const ans = getans()
    if(ans === data.corect){
        right++
    }else{
        wrong++
    }
    index++;
    mcq()
    return;
}

const getans =()=>{
    let answer;
    option.forEach((input)=>{
        if(input.checked){
            answer= input.value 
        }
    })
    return answer;
}

const reset =()=>{
    option.forEach(
        (input)=>{
        input.checked=false
    })
}

const finish =()=>{
    document.getElementById('box').innerHTML=`
    <h1> QUIZZ OVER !</h1>
    <h2> SCOR ${right}/${total} CORRECT </h2>`
}

// initial call 
mcq()