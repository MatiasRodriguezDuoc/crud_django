$(document).ready(function () {
   consultaAPI("500")
   consultaAPI2("500")
   canvas()




})

$("button").click(function () {

   let pokemon = $("#input").val()
   $('#input').val('');
   $("#tipo2").html(null)
   $(".imgtipo2").attr('src', '');
   consultaAPI(pokemon)
   consultaAPI2(pokemon)


})


$("#random").click(function () {

   $('#input').val('');
   $(".imgtipo2").attr('src', '');
   $("#tipo2").html(null)

   var pokemon = Math.round(Math.random() * 1010);




   consultaAPI(pokemon)
   consultaAPI2(pokemon)

})

function consultaAPI(Pokemon) {

   $.ajax({

       type: "GET",
       url: `https://pokeapi.co/api/v2/pokemon/${Pokemon}`,


       success: function (data) {

           console.log(data)

           $("#nombre").html(data.name)
           $("#numero").html(data.id)
           
           $("#peso").html(data.weight / 10)
           $("#altura").html(data.height / 10)
           $(".oficial").attr('src', data.sprites.front_default);
           $(".oficial").attr('src', data.sprites.other["official-artwork"].front_default);
           

           $("#tipo1").html(data.types[0].type.name)
           let tipo1 = data.types[0].type.name

           $("#tipo2").html(data.types[1].type.name)
           let tipo2 = data.types[1].type.name




 

           let HP = data.stats[0].base_stat
           let ataque = data.stats[1].base_stat
           let defensa = data.stats[2].base_stat
           let ataque_especial = data.stats[3].base_stat
           let defensa_especial = data.stats[4].base_stat
           let velocidad = data.stats[5].base_stat
           $(".ataque").html(ataque)
           $(".hp").html(HP)
           $(".defensa").html(defensa)
           $(".atqesp").html(ataque_especial)
           $(".defesp").html(defensa_especial)
           $(".velocidad").html(velocidad)

           canvas(HP, ataque, defensa, ataque_especial, defensa_especial, velocidad,)
       },
       dataType: 'json'
   });

}

function consultaAPI2(Pokemon) {

   $.ajax({

       type: "GET",
       url: `https://pokeapi.co/api/v2/pokemon-species/${Pokemon}`,

       success: function (pokedex) {

           console.log(pokedex)

           $("#informacion").html(null)
           $("#informacion").html(pokedex.flavor_text_entries[34].flavor_text)
           $("#informacion2").html(pokedex.genera[5].genus)
           $("#informacion3").html(pokedex.flavor_text_entries[5].flavor_text)

       },
       dataType: 'json'
   });

}





$(".formato1").css("background-color", "#A8B820");

