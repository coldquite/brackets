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

        if (objOpens[char] === objCLoses[char]) {
            if (q.length > 0 && q[q.length - 1] === char)
                q.pop();
            else
                q.push(char);
        } else if (objOpens[char] === undefined) {
            if (q.length === 0 || q.pop() !== objCLoses[char])
                return false;

        } else
            q.push(char);
    }

    return (q.length === 0);
}