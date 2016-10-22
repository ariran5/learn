'use strict';
// данные, дум, типы данных


//data DOM dataType
var domActions = [
{
	"name":".getElementById('elemName')",
	"data":"getElementById",
	"type":"dom",
	"actionType":"method",
	"value":"Ищет id",
	"example":[]
},{
	"name":".getElementsByClassName('elemName')",
	"data":"getElementsByClassName",
	"type":"dom",
	"actionType":"method",
	"value":"Ищет class ы",
	"example":[]
},{
	"name":".getElementsByTagName('elemName')",
	"data":"getElementsByTagName",
	"type":"dom",
	"actionType":"method",
	"value":"Ищет id",
	"example":[]
},{
	"name":".querySelector('css')",
	"data":"querySelector",
	"type":"dom",
	"actionType":"method",
	"value":"Ищет по цсс селектору",
	"example":[]
},{
	"name":".querySelectorsAll('css')",
	"data":"querySelectorsAll",
	"type":"dom",
	"actionType":"method",
	"value":"Ищет все объекты с этим css селектором",
	"example":[]
},{
	"name":".children",
	"data":"children",
	"type":"dom",
	"actionType":"property",
	"value":"Ищет id",
	"example":[]
},{
	"name":".getElementById('elemName').innerHTML",
	"data":"getElementByIdinnerHTML",
	"type":"dom",
	"actionType":"property",
	"value":"innerHTML вставляет HTML текст или возвращает имеющийся в теге",
	"example":[]
},{
	"name":"document.createElement('ul')",
	"data":"createElement",
	"type":"dom",
	"actionType":"method",
	"value":"создает тег",
	"example":[]
},{
	"name":".appendChild(A)",
	"data":"appendChild",
	"type":"dom",
	"actionType":"method",
	"value":"Вставляет A в конец this",
	"example":[]
},{
	"name":".prependChild(A)",
	"data":"prependChild",
	"type":"dom",
	"actionType":"method",
	"value":"Вставляет A в начало this",
	"example":[]
},{
	"name":".createTextNode('Тут есть еда, пятачок!')",
	"data":"createTextNode",
	"type":"dom",
	"actionType":"method",
	"value":"Создает текстовый узел",
	"example":[]
}
];

domActions.name = 'domActions';