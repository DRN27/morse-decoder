const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result; 
    let decodingStr = '';
    for (let i = 0; i < expr.length; i += 10){
        str = expr.slice(i, i + 10);
        result = '';
        for (let j = 0; j < 10; j += 2){
            let letter = str[j] + str[j + 1];
            if (letter == 10) {
                result += '.';
            } else if (letter == 11){
                result += '-';
            } else if (letter == '**'){
                result = '**';
                break;
            }
        } 
        if (result in MORSE_TABLE){
            decodingStr += MORSE_TABLE[result];
        } else {
            decodingStr += ' ';
        }
    }
    return decodingStr;
}

module.exports = {
    decode
}