const monthsBySeason = {
  зима: ["декабрь", "январь", "февраль"],
  весна: ["март", "апрель", "май"],
  лето: ["июнь", "июль", "август"],
  осень: ["сентябрь", "октябрь", "ноябрь"],
};

let startTime, endTime;

function getSeason() {
  const now = new Date();
  const month = now.getMonth() + 1;
  if (month >= 3 && month <= 5) {
    return "весна";
  } else if (month >= 6 && month <= 8) {
    return "лето";
  } else if (month >= 9 && month <= 11) {
    return "осень";
  } else {
    return "зима";
  }
}

Number.prototype.isOdd = function () {
  return this % 2 !== 0;
};

function displayMonthsForSeason() {
  const season = getSeason();
  const message = `Месяцы текущей поры года: ${monthsBySeason[season].join(
    ", "
  )}`;
  document.getElementById("seasonMessage").innerText = message;
}

displayMonthsForSeason();

function calculateAge() {
  const dobInput = document.getElementById("dobInput").value;
  const dobDate = new Date(dobInput);
  const today = new Date();

  const ageDiff = today - dobDate;
  const ageDate = new Date(ageDiff);
  const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

  document.getElementById(
    "ageMessage"
  ).innerText = `Ваш возраст: ${calculatedAge} лет`;
}

function startTimer() {
  startTime = new Date();
}

function endTimer() {
  if (startTime) {
    endTime = new Date();
    const timeDiff = endTime - startTime;
    const secondsDiff = timeDiff / 1000;
    document.getElementById(
      "timeInfo"
    ).innerText = `Прошло ${secondsDiff} секунд`;
  } else {
    alert('Сначала нажмите кнопку "Start"');
  }
}

function toRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

function calculateDistance() {
  const shirota1 = document.getElementById("shirota1Input").value;
  const dolgota1 = document.getElementById("dolgota1Input").value;
  const shirota2 = document.getElementById("shirota2Input").value;
  const dolgota2 = document.getElementById("dolgota2Input").value;

  const earthRadius = 6371; //километры

  const dShirota = toRadians(shirota2 - shirota1);
  const dDolgota = toRadians(dolgota2 - dolgota1);

  const a =
    Math.sin(dShirota / 2) * Math.sin(dShirota / 2) +
    Math.cos(toRadians(shirota1)) *
      Math.cos(toRadians(shirota2)) *
      Math.sin(dDolgota / 2) *
      Math.sin(dDolgota / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;

  document.getElementById(
    "distanceInfo"
  ).innerText = `Расстояние между координатами: ${distance.toFixed(2)} км`;
}

function convertToUpperCase() {
  const inputString = document.getElementById("inputString").value;
  const upperCaseString = inputString.toUpperCase();
  document.getElementById("originalStringDisplay").innerText = inputString;
  document.getElementById("convertedStringDisplay").innerText = upperCaseString;
}

function checkOdd() {
  let inputNumber = document.getElementById("inputNumber").value;
  if (inputNumber % 1 === 0) {
    if (inputNumber % 2 === 0) {
      alert(inputNumber + " четно ");
    } else {
      alert(inputNumber + " не четно ");
    }
  } else {
    alert("Введите целое число");
  }
}

function checkIfStartsWithNumber() {
  let input = document.getElementById("inputField").value;
  let pattern = /^[0-9]/;

  if (pattern.test(input)) {
      alert("Строка начинается с цифры")
  } else {
      alert("Строка не начинается с цифры")
  }
}