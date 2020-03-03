module.exports = function check(str, bracketsConfig) {
    // function check(str, bracketsConfig) {
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

const config1 = [["(", ")"]];
const config2 = [
    ["(", ")"],
    ["[", "]"]
];
const config3 = [
    ["(", ")"],
    ["[", "]"],
    ["{", "}"]
];
const config4 = [["|", "|"]];
const config5 = [
    ["(", ")"],
    ["|", "|"]
];
const config6 = [
    ["1", "2"],
    ["3", "4"],
    ["5", "6"],
    ["7", "7"],
    ["8", "8"]
];
const config7 = [
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
    ["|", "|"]
];

// console.log(check("((()))()", config1));
