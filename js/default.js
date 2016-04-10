var courses = [
	{
		"name" : "Circuitos e Técnicas Digitais",
		"topic" : "hw"
	},
	{
		"name" : "POO I",
		"topic" : "sw"
	},
	{
		"name" : "Cálculo A",
		"topic" : "math"
	},
	{
		"name" : "Matemática Discreta",
		"topic" : "theory"
	},
	{
		"name" : "POO II",
		"topic" : "sw"
	},
	{
		"name" : "Probabilidade e Estatística",
		"topic" : "math"
	},
	{
		"name" : "Sistemas Digitais",
		"topic" : "hw"
	},
	{
		"name" : "CTS",
		"topic" : "misc"
	},
	{
		"name" : "Geometria Analítica",
		"topic" : "math"
	},
	{
		"name" : "Cálculo B",
		"topic" : "math"
	},
	{
		"name" : "Estruturas de Dados",
		"topic" : "sw"
	},
	{
		"name" : "Cálculo Numérico",
		"topic" : "math"
	},
	{
		"name" : "Programação Concorrente",
		"topic" : "sw"
	},
	{
		"name" : "Organização de Computadores",
		"topic" : "hw"
	},
	{
		"name" : "Álgebra Linear",
		"topic" : "math"
	},
	{
		"name" : "Sistemas Operacionais I",
		"topic" : "sw"
	},
	{
		"name" : "Sistemas Operacionais II",
		"topic" : "sw"
	},
	{
		"name" : "Grafos",
		"topic" : "theory"
	},
	{
		"name" : "Redes de Computadores I",
		"topic" : "misc"
	},
	{
		"name" : "Redes de Computadores II",
		"topic" : "misc"
	},
	{
		"name" : "Teoria da Computação",
		"topic" : "theory"
	},
	{
		"name" : "Paradigmas de Programação",
		"topic" : "sw"
	},
	{
		"name" : "Engenharia de Software I",
		"topic" : "sw"
	},
	{
		"name" : "Engenharia de Software II",
		"topic" : "sw"
	},
	{
		"name" : "Computação Gráfica",
		"topic" : "sw"
	},
	{
		"name" : "Linguagens Formais e Compiladores",
		"topic" : "theory"
	},
	{
		"name" : "Banco de Dados I",
		"topic" : "sw"
	},
	{
		"name" : "Banco de Dados II",
		"topic" : "sw"
	},
	{
		"name" : "Modelagem e Simulação",
		"topic" : "sw"
	},
	{
		"name" : "Construção de Compiladores",
		"topic" : "theory"
	},
	{
		"name" : "Planejamento e Gestão de Projetos",
		"topic" : "sw"
	},
	{
		"name" : "Informática e Sociedade",
		"topic" : "misc"
	},
	{
		"name" : "Segurança em Computação",
		"topic" : "sw"
	},
	{
		"name" : "Inteligência Artificial",
		"topic" : "sw"
	},
	{
		"name" : "Sistemas Multimídia",
		"topic" : "misc"
	},
]

$(document).ready(function(){

	var aux = 0;
	var courses_per_row = 3;
	var columns_number = courses.length / courses_per_row;
	var destiny = document.getElementById("container");

	for(var i = 0; i < columns_number; i = i + 1) {
		var row = document.createElement('div');
		row.className = "row grid";

		for(var j = 0; j < courses_per_row; j = j + 1) {
			if (aux < courses.length) {
				var grid_item = document.createElement('div');
				grid_item.className = "grid-item four columns removed " + courses[aux]["topic"];
				grid_item.dataset.tag = courses[aux]["topic"];
				grid_item.innerHTML = "<span class=\"center\">" + courses[aux]["name"] + "</span>";
				aux = aux + 1;
				row.appendChild(grid_item);
			}
		}

		$('#last').before(row).before("&nbsp;");
	}

	$('.selected').on('click', function(e) {
		$(this).toggleClass('selected removed');
	});

	$('.removed').on('click', function(){
		$(this).toggleClass('selected removed');
	});

	$('.button-tag').on('click', function(e){
		e.preventDefault();
		var etag = $('.' + $(this).data('tag'));
		// if (etag.hasClass('selected')) {
		// 	etag.removeClass('selected');
		// 	etag.addClass('removed');
		// } else {
		// 	etag.removeClass('removed');
		// 	etag.addClass('selected');
		// }
		// etag.toggleClass('selected removed');
		$(this).toggleClass('selected removed');

		if ($(this).hasClass('removed')){
			etag.removeClass('removed');
			etag.addClass('selected');
		} else {
			etag.removeClass('selected');
			etag.addClass('removed');
		}
	})
});