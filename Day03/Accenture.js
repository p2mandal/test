var Accenture = {
				changeColor : function(elem,color){
					var elements = document.getElementsByTagName(elem);
					for(var i=0;i<elements.length;i++){
						elements[i].style.color = color;
					}
				},
				changeFont : function(elemId,weight){
					var id = elemId.substring(1);
					var elem = document.getElementById(id);
					elem.style.fontWeight = weight;
				}
			};