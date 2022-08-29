const arrayOfQuotes=[
    
    {'author':'Rehema',
        'quote':'Always remind yourself what you want'
    },
    {'author':'Rehema',
        'quote':' Always Keep the end in mind'
    },
    {'author':'Rehema',
        'quote':'Find things that give you joy'
    },
    {'author':'Rehema',
        'quote':'Always have someone to talk to if you are in disparate situations'
    },
    {'author':'Rehema',
        'quote':'Its not what happens in life that matters,but how you respond to it'
    },
    { 'author':'Rehema',
        'quote':'The beautiful thing about learning is that no one can take it away from you.'
    },
    { 'author':'Rehema',
        'quote':'Learn from yesterday,live for today, hope for tomorrow,The important thing is not to stop questioning'
    },
    {'author':'Rehema',
        'quote':'All the great things are simple, and many can be expressed in a single word: freedom, justice, honor, duty, mercy, hope.'
    },
    { 'author':'Maxim',
         'quote':'It is because of hope that you suffer. It is through hope that you’ll change things.'
    },
    { 'author':'Nelson Mandela',
         'quote':'May your choices reflect your hopes, not your fears.'
    },
    { 'author':'Frank',
         'quote':'The best revenge is massive success.'
    },
];
//add random
function generateQuote(){
    const random= Number.parseInt(Math.random()*arrayOfQuotes.length +1);
    document.querySelector('#quoteOutput').textContent= `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent= `--${arrayOfQuotes[random].author}--`;

}