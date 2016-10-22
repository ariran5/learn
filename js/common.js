'use strict';
+function () {

	var ulNames = [dataActions,domActions];

	class GeneratePage {
		constructor(json,names,list,examples,i) {
			this.json = json;
			this.createArticle(i);
			if (names) {
				this.titleButtons(json);
			}
			if (list) {
				this.listElements(json);
			}
			if (examples) {
				this.titleButtons(json);
			}
			this.appendArticle();
	
		}

		createArticle(i) {
			this.article = document.createElement('article');
			this.article.classList.add(this.json.name);
		}
	
		titleButtons(json) {
			function createNameBtn() {
				var h3 = document.createElement('h3');
				h3.innerHTML = json[i].name;
				h3.setAttribute('data-anchor',json[i].data)

				function dataAnchor() {
					var a = this.dataset.anchor;
					var scrollElem = document.querySelector('.js-' + a);

					var baseBG = window.getComputedStyle(scrollElem).backgroundColor;
					scrollElem.style.backgroundColor = 'rgba(255, 255, 255,0.2)';
					setTimeout(function() {
						scrollElem.style.backgroundColor = baseBG;
					},2000)
					
					window.scrollTo(0,scrollElem.offsetTop - 60);
				}

				h3.addEventListener('click',dataAnchor);
				return h3;
			}
			var div = document.createElement('div');
			div.className = 'propertiesNames';
	
			for (var i = 0; i < json.length; i++) {
	
				div.append(createNameBtn(json));
			}
	
			this.article.append(div);
		}
	
		listElements(json) {
			function createElem() {
		
				var div = document.createElement('div');
				div.className = 'propertiesList' + ' js-' + json[i].data;
		
				var h3 = document.createElement('h3');
				var h6 = document.createElement('h6');
				var p = document.createElement('p');
		
				h3.innerHTML = json[i].name;
				div.append(h3);
		
				h6.className = json[i].actionType;
				h6.innerHTML = json[i].actionType;
				div.append(h6);
		
				p.innerHTML = json[i].value;
				div.append(p);
		
				divListCantainer.append(div);
			}
	
			var divListCantainer = document.createElement('div');
			divListCantainer.classList.add('listContainer');
	
			this.article.append(divListCantainer);
			for (var i = 0; i < json.length; i++) {
				createElem();
			}
		}	
	
		appendArticle() {
			var preArticle = document.querySelectorAll('article');
			preArticle[ preArticle.length - 1 ].after(this.article);
		}
	}

	var div = document.createElement('div');
	div.className = 'nav';
	for (var i = 0; i < ulNames.length; i++) {
		new GeneratePage(ulNames[i],!0,!0,!1,i);
	}
}();




























// var menuClick = document.getElementsByClassName('menu');

// for (var i = 0; i < menuClick.length; i++) {
// 	menuClick[i].onclick = function(){
// 		var el = this;
// 		var d = el.dataset.filename;
// 		var script = document.createElement('script');

// 		script.src = 'js/' + d;
// 		document.body.append(script);
// 	};
// }



