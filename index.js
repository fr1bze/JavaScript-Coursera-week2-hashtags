/**
 * @param {String} tweet
 * @returns {String[]}
 */
 module.exports = function (tweet) {
     var result = [];
var tweetArr = tweet.split(" ");
for (let i = 0; i < tweetArr.length; ++i)
{ 
    var tmp = tweetArr[i];
    if (tmp[0] === "#")
    result.push(tmp.slice(1));
}
    return result;
}
