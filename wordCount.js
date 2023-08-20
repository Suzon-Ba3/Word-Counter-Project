//Select All Needed Elements
let texts = document.getElementById(`texts`);
let wordCount = document.getElementById(`words`);
let charCount = document.getElementById(`characters`);
let btn = document.getElementById(`btn`);

//Words and characters count
texts.addEventListener(`input`, function () {
    //Character Count
    let character = texts.value.trim();
    let charLength = character.length;
    charCount.innerHTML = charLength;  

    //Word Count
    let getText = texts.value;
    getText = getText.trim();
    let words = getText.split(` `);
    if (words[0] == 0) {
        wordCount.innerHTML = 0;
    }
    else {
        wordCount.innerHTML = words.length;
    }
});

//Clear All
btn.addEventListener(`click`, function () {
    texts.value = ``;
    wordCount.innerHTML = 0;
    charCount.innerHTML = 0;
});