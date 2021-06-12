let productos =	[[0, "Alpura", 16],
				 [1, "Sabritas", 12],
				 [2, "Triki Trakets", 10],
				 [3, "Jamon", 25],
				 [4, "Queso", 20]];

window.addEventListener("load",cargar);

function cargar()
{
	for (i = 0; i < productos.length; i++)
	{
		document.querySelector('section').innerHTML+=	"<div id='" + productos[i][0] + "'>"	+
															"<h1>" + productos[i][1] +"</h1>"	+
															"<p>$ " + productos[i][2] +"</p>"	+
															"<button onclick='agregar(" + productos[i][0] +")'>+</button>" +
														"</div>";
	}
}


let carrito = [];
function agregar(id)
{
	carrito.push(id);
	//document.querySelector('s').innerHTML = carrito.length;
}

function mostrarCarrito()
{
	let listaProductos = "";
	for (i = 0; i < carrito.length; i++)
	{
		for (j = 0; j < productos.length; j++)
		{
			if (productos[j][0] == carrito[i])
			{
				listaProductos += productos[j][1] + " 	$" + productos[j][2] +"\n";
			}
		}
	}

	
	
		document.querySelector('#carrito').innerHTML = "<p>" + listaProductos +"</p>";
	


	//alert ("Lista de productos: \n" + listaProductos);

	document.querySelector('#carrito').classList.remove('carrito_oculto');
	document.querySelector('#carrito').classList.add('carrito_visible');
}

function ocultarCarrito()
{
	document.querySelector('#carrito').classList.remove('carrito_visible');
	document.querySelector('#carrito').classList.add('carrito_oculto');
}