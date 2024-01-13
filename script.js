const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

let enteredNumber = "";
let result = "";
let numberLength = 0; 
let numberArr = [];

convertBtn.addEventListener("click", checkInput);

function checkInput() {
  enteredNumber = inputNumber.value;

  if (enteredNumber === "") {
    output.innerText = "Please enter a valid number";
  } else if (enteredNumber < 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (enteredNumber > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else if (enteredNumber.length >= 5) {
    output.innerText = "Spierdalaj";
  } else {
    convertToRoman();
  }
}

function convertToRoman() {
  const numberArr = enteredNumber.split("");
  numberLength = numberArr.length;

  while (numberArr.length !== 4) {
    numberArr.unshift(0);
  } 

  const ones = numberArr[3];
  const tens = numberArr[2];
  const hundreds = numberArr[1];
  const thousands = numberArr[0];

  const fakeRomanOnes = decimalToRoman(ones);
  const fakeRomanTens = decimalToRoman(tens);
  const fakeRomanHundreds = decimalToRoman(hundreds);
  const fakeRomanThousands = decimalToRoman(thousands);

  const romanOnes = convertOnesToOther(1, fakeRomanOnes);
  const romanTens = convertOnesToOther(2, fakeRomanTens);
  const romanHundreds = convertOnesToOther(3, fakeRomanHundreds);
  const romanThousands = convertOnesToOther(4, fakeRomanThousands);

  linkAndDisplay(romanThousands, romanHundreds, romanTens, romanOnes);
}

function decimalToRoman(number) {
  switch (number) {
    case "1":
      return "I";
    case "2":
      return "II";
    case "3":
      return "III";
    case "4":
      return "IV";
    case "5":
      return "V";
    case "6":
      return "VI";
    case "7":
      return "VII";
    case "8":
      return "VIII";
    case "9":
      return "IX";
    default: 
      return "";
  }
}

function convertOnesToOther(type, number) {
  if (type === 1) {
    switch (number) {
      case "I":
        return "I";
      case "II":
        return "II";
      case "III":
        return "III";
      case "IV":
        return "IV";
      case "V":
        return "V";
      case "VI":
        return "VI";
      case "VII":
        return "VII";
      case "VIII":
        return "VIII";
      case "IX":
        return "IX";
      default:
        return "";
    }
  } else if (type === 2) {
   switch (number) {
      case "I":
        return "X";
      case "II":
        return "XX";
      case "III":
        return "XXX";
      case "IV":
        return "XL";
      case "V":
        return "L";
      case "VI":
        return "LX";
      case "VII":
        return "LXX";
      case "VIII":
        return "LXXX";
      case "IX":
        return "XC";
      default:
        return "";
    }
    } else if (type === 3) {
      switch (number) {
        case "I":
          return "C";
        case "II":
          return "CC";
        case "III":
          return "CCC";
        case "IV":
          return "CD";
        case "V":
          return "D";
        case "VI":
          return "DC";
        case "VII":
          return "DCC";
        case "VIII":
          return "DCCC";
          case "IX":
          return "CM";
        default:
          return "";
      }
      } else if (type === 4) {
        switch (number) {
          case "I":
            return "M";
          case "II":
            return "MM";
          case "III":
            return "MMM";
          default:
            return "";
        }
      } else {
          console.log("real shit happend");
      }
}

function linkAndDisplay(thousands, hundreds, tens, ones) {
  if (numberLength === 1) {
    result = ones;
  } else if (numberLength === 2) {
    result = tens + ones
  } else if (numberLength === 3) {
    result = hundreds + tens + ones;
  } else if (numberLength === 4) {
    result = thousands + hundreds + tens + ones;
  } else {
    console.log("broken");
  }

  output.innerText = result;
}