'use strict';
// данные, дум, типы данных
//data DOM dataType
var dataActions = [
{
	"name":".length",
	"data":"length",
	"type":"data",
	"actionType":"property",
	"value":"вычисление длины строки и массива",
	"example":[
		{
			"name":"Узнать длинну строки и массива",
			"value":"a.length;"
		},
		{
			"name":"Узнать длинну объекта",
			"value":"Object.keys(a).length; "
		}
	]
},
{
	"name":".toUpperCase()",
	"data":"toUpperCase",
	"type":"data",
	"actionType":"method",
	"value":"Делает все букввы в строке заглавными",
	"example":[
		{
			"name":"Делает все букввы в строке заглавными",
			"value":"a.toUpperCase();"
		}
	]
},
{
	"name":".toFixed(n)",
	"data":"toFixed",
	"type":"data",
	"actionType":"method",
	"value":"Округление числа после точки, где n число знаков после запятой. Если знаков у примера нет - ошибка.",
	"example":[
		{
			"name":"Округлить a = 6.33",
			"value":"a.toFixed(0); /6"
		}
	]
},
{
	"name":"isNaN(a)",
	"data":"isNaN",
	"type":"data",
	"actionType":"function",
	"value":"проверка на NaN",
	"example":[
		{
			"name":"Проверка на Нан",
			"value":"isNaN(a); да/нет"
		},
		{
			"name":"Проверка на NaN другая",
			"value":"если (a !== a) то это NaN "
		}
	]
},
{
	"name":"isFinite(a)",
	"data":"isFinite",
	"type":"data",
	"actionType":"function",
	"value":"Проверка на отсутствие NaN,Infinity,-Infinity",
	"example":[
		{
			"name":"Проверка на отсутствие NaN,Infinity,-Infinity",
			"value":"isFinite(a); да/нет"
		}
	]
},
{
	"name":"parseInt(a)",
	"data":"parseInt",
	"type":"data",
	"actionType":"function",
	"value":"Преобразует деликатно из строки в число",
	"example":[
		{
			"name":"Перевод строки в число",
			"value":"parseInt(a); '5gdf67gd7' -> 5 "
		},{
			"name":"Перевод строки в число",
			"value":"parseInt(a); 'dfse7865' -> NaN "
		},{
			"name":"Перевод строки в число",
			"value":"parseInt(a,2); '5' -> 101 где 2 - система исчесления"
		},{
			"name":"Перевод строки в число",
			"value":" +a; '5gdf67gd7' -> NaN "
		}
	]
},
{
	"name":"parseFloat(a)",
	"data":"parseFloat",
	"type":"data",
	"actionType":"function",
	"value":"Преобразует деликатно из строки в число с ДРОБЬЮ",
	"example":[
		{
			"name":"Перевод строки в число",
			"value":"parseInt(a); '643.345кв.ваыа43' -> 643.345 "
		},{
			"name":"Перевод строки в число",
			"value":" +a; '5gdf67gd7' -> NaN, true -> NaN "
		}
	]
},
{
	"name":"isNumberic(a)",
	"data":"isNumberic",
	"type":"data",
	"actionType":"function",
	"value":"Проверить, число ли это? Cоставная!!! Смотреть в интернете",
	"example":[
		{
			"name":"Число ли это?",
			"value":"isNumberic(a); да/нет"
		}
	]
},
{
	"name":".toString()",
	"data":"toString",
	"type":"data",
	"actionType":"method",
	"value":"Преобразует число в строку, можно перевести в другую систему исчесления, .toString(n), где n число от 2 до 36",
	"example":[]
},
{
	"name":"Math.floor",
	"data":"mathFloor",
	"type":"data",
	"actionType":"function",
	"value":"Округляет вниз",
	"example":[]
},
{
	"name":"Math.ceil",
	"data":"mathCeil",
	"type":"data",
	"actionType":"function",
	"value":"Округляет вверх",
	"example":[]
},
{
	"name":"Math.round",
	"data":"mathRound",
	"type":"data",
	"actionType":"function",
	"value":"Округляет куда ближе",
	"example":[]
},
{
	"name":".toLocaleString()",
	"data":"toLocaleString",
	"type":"data",
	"actionType":"method",
	"value":"Делает число с пробелами каждые 3 цифры",
	"example":[]
}

];

dataActions.name = 'dataActions';




