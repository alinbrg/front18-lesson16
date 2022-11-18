// 1. გამოიყენეთ const currentDay = new Date().getDay(); ცვლადი;   currentDay ცვლადი გვაძლევს რეალურ კვირის დღეს რიცხვითი სახით 0 - არის კვირა, 1 - არის ორშაბათი და ასე შემდეგ.( 0 - 6 ამდე რიცხვს აბრუნებს სადაც 6 არის შაბათი) , დავწეროთ switch სადაც შევამოწმებთ currentDay-ს და 0 ის შემთხვევაში console.log ში გამოვიტანთ სიტყვას - კვირა, 1 ის შემთხვევაში - ორშაბათს და ასე შემდეგ 6 - შაბათი.
// const currentDay = new Date().getDay();
// // console.log(currentDay);
// let day;

// switch (currentDay) {
// 	case 0:
// 		day = "კვირა";
// 		break;
// 	case 1:
// 		day = "ორშაბათი";
// 		break;
// 	case 2:
// 		day = "სამშაბათი";
// 		break;
// 	case 3:
// 		day = "ოთხშაბათი";
// 		break;
// 	case 4:
// 		day = "ხუთშაბათი";
// 		break;
// 	case 5:
// 		day = "პარასკევი";
// 		break;
// 	case 6:
// 		day = "შაბათი";
// 		break;
// 	default:
// 		break;
// }

// console.log(day);

// 2. დაწერეთ for ციკლი, 0 დან 50 - მდე console.log ში დაბეჭდეთ ინდექსი i
// for (let i = 0; i < 50; i++) {
// 	console.log(i);
// }

// 3. დაწერეთ while ციკლი 0 დან 150 - მდე console.log ში დაბეჭდეთ ინდექსი i
// let a = 0;
// while (a < 150) {
// 	console.log(a);

// 	a++;
// }

// 4. დაწერეთ do while ციკლი 0 დან 100 - მდე console.log ში დაბეჭდეთ ინდექსი i
// let b = 0;
// do {
// 	console.log(b);
// 	b++;
// } while (b < 100);

// 5. შექმენით ცვლადი და მიანიჭეთ ცარიელი მასივი, შემდეგ დაწერეთ Loop ( for ან while ან do while ) 1 დან 100 - მდე ამ მასივში ჩაწერეთ ინდექსი გამრავლებული ინდექსზე (i * i); გამოიყენეთ  push მეთოდი

// let arr = [];

// for (let i = 1; i <= 100; i++) {
// 	arr.push(i * i);
// }

// console.log(arr);

// let x = 10;

// if (true) {
// 	console.log(x);
// 	// var a = 100;

// 	if (true) {
// 		let x = 15;
// 	}

// 	if (true) {
// 		let x = 100;
// 		console.log(x);
// 	}
// }

// console.log(a);

function logFromFunction() {
	console.log("hello from function");
}

// logFromFunction();
// logFromFunction();
// logFromFunction();
// logFromFunction();

function logUserInfo(name, age) {
	// let name = 'alina'
	// let age = 26

	// console.log(age);

	console.log(`hello, ${name}`);
}

let name = "nika";

// logUserInfo("alina", 26);
// logUserInfo("giorgi", 20);
// logUserInfo("tea");
// logUserInfo(name);
// console.log(sum(5, 10));

function sum(a, b) {
	// console.log(a + b);

	// let sum = a+b
	return a + b;
	// console.log(a + b);
}

// const sum1 = sum(2, 3);
// const sumFn = sum;
// console.log(sum1, sumFn);

const sumConstFn = function (a, b) {
	return a + b;
};

const sumArrowFn = (a, b) => {
	return a + b;
};

// console.log(sumArrowFn(100, 200), sumConstFn(10, 20));

const currencies = [
	{
		code: "AED",
		quantity: 10,
		rateFormated: "7.4027",
		diffFormated: "0.0223",
		rate: 7.4027,
		name: "არაბეთის გაერთიანებული საამიროების დირჰამი",
		diff: -0.0223,
	},
	{
		code: "AMD",
		quantity: 1000,
		rateFormated: "6.8714",
		diffFormated: "0.0359",
		rate: 6.8714,
		name: "სომხური დრამი",
		diff: -0.0359,
		date: "2022-11-18T17:45:03.375Z",
		validFromDate: "2022-11-19T00:00:00.000Z",
	},
	{
		code: "AUD",
		quantity: 1,
		rateFormated: "1.8284",
		diffFormated: "0.0085",
		rate: 1.8284,
		name: "ავსტრალიური დოლარი",
		diff: 0.0085,
		date: "2022-11-18T17:45:03.375Z",
		validFromDate: "2022-11-19T00:00:00.000Z",
	},
	{
		code: "AZN",
		quantity: 1,
		rateFormated: "1.6022",
		diffFormated: "0.0053",
		rate: 1.6022,
		name: "აზერბაიჯანული მანათი",
		diff: -0.0053,
		date: "2022-11-18T17:45:03.375Z",
		validFromDate: "2022-11-19T00:00:00.000Z",
	},
];

currencies.forEach((element, index, array) => {
	// console.log(element, index);
	// if (element.code === "AED") {
	// 	console.log(element.name);
	// }
});

const filteredArr = currencies.filter((currency) => {
	return currency.rate < 5;
});

// console.log(filteredArr);

const findEl = currencies.find((el) => el.rate > 5);

// console.log(findEl);

const someEl = currencies.some((currency) => {
	return currency.rate > 5;
});

// console.log(someEl);

const everyEl = currencies.every((currency) => {
	return currency.rate > 1;
});

// console.log(everyEl);

const mapCurrencies = currencies.map((el, index, arr) => {
	return el.name;
});

// console.log(mapCurrencies);
