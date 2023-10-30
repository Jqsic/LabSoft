// task 1
// Создание объекта obj1 с помощью литерала объекта
const obj1 = {
  property1: "значение 1",
  property2: 42,
  property3: true,
  property4: [1, 2, 3],
  property5: { key: "value" },
};

// Создание объекта obj2 с помощью конструктора объекта
const obj2 = new Object();
obj2.property1 = "значение 1";
obj2.property2 = 24;
obj2.property3 = false;
obj2.property4 = [4, 5, 6];
obj2.property5 = { key: "value" };

// task 2
// Вывод имен свойств объекта obj1
console.log(Object.keys(obj1));
// Вывод значений свойств объекта obj2
for (let key in obj2) {
  console.log(obj2[key]);
}

// task 3
obj1.printInfo = function () {
  console.log("Привет! Я объект obj1.");
  console.log("Мои свойства:");
  for (let key in this) {
    if (typeof this[key] !== "function") {
      console.log(`${key}: ${this[key]}`);
    }
  }
};
obj1.printInfo();

//task 5
const person = {
  name: "Павел",
  age: 18,
  gender: "мужской",
  socialStatus: "не женат",
};

console.log("Имя:", person.name);
console.log("Возраст:", person.age);
console.log("Пол:", person.gender);
console.log("Социальный статус:", person.socialStatus);
