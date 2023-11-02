/* 58. Length of Last Word */
var lengthOfLastWord = function (s) {
    var take_away_words = s.trim().split(" ");
    var count_the_letters = take_away_words[take_away_words.length - 1];

    return count_the_letters.length;
};

const testing = lengthOfLastWord('   fly me   to   the moon  ');
console.log(testing)