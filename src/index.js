module.exports = function check(str, bracketsConfig) {
    let tmp = str.split("");
    if (str.length % 2 === 1) {
        console.log(false);
        return false;
    }

    let q = [];
    let objOpens = {};
    let objCLoses = {};

    for (let i = 0, len = bracketsConfig.length; i < len; i++) {
        objOpens[bracketsConfig[i][0]] = bracketsConfig[i][1];
        objCLoses[bracketsConfig[i][1]] = bracketsConfig[i][0];
    }


    while (tmp.length > 0) {
        let char = tmp.shift();

        if (objOpens[char] !== undefined && objCLoses[char] !== undefined) {
            if (q.length > 0 && q[q.length - 1] === char)
                q.pop();
            else
                q.push(char);
        } else if (objOpens[char] === undefined) {
            if (q.length === 0 || q.pop() !== objCLoses[char]) {
                console.log(false);
                return false;
            }
        } else
            q.push(char);
    }

    console.log(true);
    return true;
}
function check(str, bracketsConfig) {
    let tmp = str.split("");
    if (str.length % 2 === 1) {
        console.log(false);
        return false;
    }

    let q = [];
    let objOpens = {};
    let objCLoses = {};

    for (let i = 0, len = bracketsConfig.length; i < len; i++) {
        objOpens[bracketsConfig[i][0]] = bracketsConfig[i][1];
        objCLoses[bracketsConfig[i][1]] = bracketsConfig[i][0];
    }


    while (tmp.length > 0) {
        let char = tmp.shift();

        if (objOpens[char] !== undefined && objCLoses[char] !== undefined) {
            if (q.length > 0 && q[q.length - 1] === char)
                q.pop();
            else
                q.push(char);
        } else if (objOpens[char] === undefined) {
            if (q.length === 0 || q.pop() !== objCLoses[char]) {
                console.log(false);
                return false;
            }
        } else
            q.push(char);
    }

    console.log(true);
    return true;
}

check('()', [['(', ')']]) // -> true
check('((()))()', [['(', ')']]) // -> true
check('())(', [['(', ')']]) // -> false
check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
check('[(])', [['(', ')'], ['[', ']']]) // -> false
check('[]()', [['(', ')'], ['[', ']']]) // -> true
check('[]()(', [['(', ')'], ['[', ']']]) // -> false

// special case: opening and closing bracket can be the same :)

console.log();

check('||', [['|', '|']]) // -> true
check('|()|', [['(', ')'], ['|', '|']]) // -> true
check('|(|)', [['(', ')'], ['|', '|']]) // -> false
check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true);
