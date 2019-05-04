var regalos = [
    {
        name: "Gimnasio",
        class: "personal-trainer",
        description: "Mensualidad para ir juntos al gimnasio",
        precio: "$80.000"
    }, {
        name: "Maratonas",
        class: "marathona",
        description: "Tickets para correr maratonas por el mundo",
        precio: "$200.000"
    }, {
        name: "Ultimate frisbee",
        class: "ultimate",
        description: "Patrocinanos nuestros torneos de ultimate frisbee para viajar con el equuipo d" +
                "el corazón (r)Evolution",
        precio: "$500.000"
    }, {
        name: "Fiestas",
        class: "baile",
        description: "Todos saben que nos gusta bailar...",
        precio: "$100.000"
    }, {
        name: "Comidas",
        class: "comida",
        description: "Hamburguesas, milkshakes y todas las comiditas callejeras que tanto nos ",
        precio: "$50.000"
    }, {
        name: "Dog Heros",
        class: "dogs",
        description: "Ajudamos a convertirnos en los mejores dogHeros",
        precio: "$50.000"
    }
];

function getRandomRegalos() {
    var numeroDeRegalos = regalos.length;
    var randomNumber = Math.floor(Math.random() * numeroDeRegalos);
    return numeroDeRegalos[randomNumber];
}
getRandomRegalos();

regalos.forEach( function(item, i) {
    $('#select-regalos').append('<option>' + item.name + '</option>');
});


$('#select-regalos').change(function() {
    alert('desc' + regalos.precio);
});

regalos.forEach( function(item, i) {
    $('.name').html(item.name);
    $('.description').html(item.description);
    $('.image-regalo').addClass(item.class);
    $('.price').html(item.precio);
});