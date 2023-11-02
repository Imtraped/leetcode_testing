/* 58. Length of Last Word */
var lengthOfLastWord = function (s) {
    var take_away_words = s.trim().split(" ");
    var count_the_letters = take_away_words[take_away_words.length - 1];

    return count_the_letters.length;
};

/* 1108. Defanging an IP Address */
var defangIPaddr = function(address) {
   const defanged = address.replaceAll(/\D/g, `[.]`);
   return defanged;

};

/* 2469. Convert the Temperature */
var convertTemperature = function(celsius) {
    let k_f = [];

    const kelvin = celsius + 273.15;
    const fahrenheit = celsius * 1.80 + 32.00;

    k_f.push(kelvin, fahrenheit);

    return k_f;
};