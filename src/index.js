module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i < bracketsConfig.length; i++) {
        while (true) {
            if (str.includes(bracketsConfig[i].join(""))) {
                str = str.replace(bracketsConfig[i].join(""), "");
                i = 0;
            } else break;
        }
    }

    return str ? false : true;
};
