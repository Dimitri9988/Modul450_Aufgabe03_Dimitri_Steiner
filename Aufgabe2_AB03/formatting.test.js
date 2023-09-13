const { getLastElement, isPalindrome, capitalizeWords, lengthOfLongestWord} = require(`./formatting`)



test("last element from array(2, 5 ,90)", () => {
   
    const result = getLastElement([2, 4, 90]);
    const expected = 90;
    expect(result).toBe(expected);
});









test("Otto is Palindrom", () => {
   
    const result = isPalindrome("Lagerregal");
    const expected = "Lagerregal is an palindrom";
    expect(result).toMatch(expected);
});

test("Tomate is not Palindrom", () => {
   
    const result = isPalindrome("Tomate");
    const expected = "Tomate is not an palindrom";
    expect(result).toMatch(expected);
});

test("Make all Word Uppercase", () => {
   
    const result = capitalizeWords("ein test satzt");
    const expected = "Ein Test Satzt";
    expect(result).toMatch(expected);
});

test("Output longest word length", () => {
   
    const result = lengthOfLongestWord("ein extrem langes Wort ist Donaudampfschifffahrtselektrizitätenhauptbetriebswerkbauunterbeamtengesellschaft");
    const expected = 80;
    expect(result).toBe(expected);
});

