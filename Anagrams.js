function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\W]/g, "").toLowerCase().split("").sort().join("");
}

console.log(anagrams("rail safety", "fairy tales"));