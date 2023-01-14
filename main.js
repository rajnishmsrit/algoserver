/**
 * @param {string[]} sentences
 * @return {number}
 */

// [2,3,5] => [4, 9, 25]
const sentences = [
    "alice and bob love leetcode", 
    "i think so too", 
    "this is great thanks very much"
    ]
var mostWordsFound = function(sentences) {
    const data = sentences.map((s)=> s.split(" ").length)
    return Math.max(...data);
};

console.log(mostWordsFound(sentences));
