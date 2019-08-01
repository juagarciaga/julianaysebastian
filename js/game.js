// var regalos = [
//     {
//         name: "Gimnasio",
//         class: "personal-trainer",
//         description: "Mensualidad para ir juntos al gimnasio",
//         precio: "$80.000"
//     }, {
//         name: "Maratonas",
//         class: "marathona",
//         description: "Tickets para correr maratonas por el mundo",
//         precio: "$200.000"
//     }, {
//         name: "Ultimate frisbee",
//         class: "ultimate",
//         description: "Patrocinanos nuestros torneos de ultimate frisbee para viajar con el equuipo d" +
//                 "el corazón (r)Evolution",
//         precio: "$500.000"
//     }, {
//         name: "Fiestas",
//         class: "baile",
//         description: "Todos saben que nos gusta bailar...",
//         precio: "$100.000"
//     }, {
//         name: "Comidas",
//         class: "comida",
//         description: "Hamburguesas, milkshakes y todas las comiditas callejeras que tanto nos ",
//         precio: "$50.000"
//     }, {
//         name: "Dog Heros",
//         class: "dogs",
//         description: "Ajudamos a convertirnos en los mejores dogHeros",
//         precio: "$50.000"
//     }
// ];

// function getRandomRegalos() {
//     var numeroDeRegalos = regalos.length;
//     var randomNumber = Math.floor(Math.random() * numeroDeRegalos);
//     return numeroDeRegalos[randomNumber];
// }
// getRandomRegalos();

// regalos.forEach( function(item, i) {
//     $('#select-regalos').append('<option>' + item.name + '</option>');
// });


// $('#select-regalos').change(function() {
//     alert('desc' + regalos.precio);
// });

// regalos.forEach( function(item, i) {
//     $('.name').html(item.name);
//     $('.description').html(item.description);
//     $('.image-regalo').addClass(item.class);
//     $('.price').html(item.precio);
// });

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Dec 22, 2019 10:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)