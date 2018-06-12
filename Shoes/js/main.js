// TITLE //

// var shoeHeader = document.createElement('div');
// shoeHeader.className = "col-12 text-center mx-auto";
// shoeHeader.innerHTML =
//  "<h1 style='font-size:65px'>Josue's Footwear</h1>";
//
//  document.querySelector("#siteTitle").appendChild(shoeHeader);

$(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);

    if (scrollTop >= 100) {
      $('#global-nav').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('#global-nav').removeClass('scrolled-nav');
    }

  });

});



// $(document).ready(function(){
//   var scrollTop = 0;
//   $(window).scroll(function(){
//     scrollTop = $(window).scrollTop();
//      $('.counter').html(scrollTop);
//
//     if (scrollTop >= 100) {
//       $('#global-nav').addClass('scrolled-nav');
//     } else if (scrollTop < 100) {
//       $('#global-nav').removeClass('scrolled-nav');
//     }
//
//   });
//
// });


// SHOES FOR SALE //

var inventory = [];

function Shoe(a, b, c, d, e) {

    this.name = a;
    this.image = b;
    this.color = c;
    this.size = d;
    this.price = e;
}

inventory.push(
  new Shoe('Runners', 'img/runner.jpg', 'Cream', 'Medium', '$80.00')
)

inventory.push(
  new Shoe('Chucks', 'img/chuck.jpg', 'White', 'Extra Large', '$120.00')
)

inventory.push(
  new Shoe('Dunks', 'img/dunks.jpg', 'Red', 'Large', '$90.00')
)

inventory.push(
  new Shoe('Grapeleaves', 'img/grapeleaf.jpg', 'Black', 'Small', '$75.00')
)

inventory.push(
  new Shoe('Self-Lacers', 'img/selflacing.jpg', 'Black', 'Medium', '$80.00')
)

inventory.push(
  new Shoe('Yeezys', 'img/yeezy.jpg', 'Beige', 'Extra Small', '$250.00')
);

inventory.push(
  new Shoe('Stiletos', 'img/stiletos.jpg', 'Noir', 'Small', '$200.00')
);

inventory.push(
  new Shoe('Vans', 'img/vans.gif', 'Black', 'Extra Large', '$200.00')
);

inventory.push(
  new Shoe('Supras', 'img/supras.jpg', 'Black', 'Small', '$200.00')
);

inventory.push(
  new Shoe('Cowboy Boots', 'img/cowboy.jpg', 'Brown', 'Medium', '$300.00')
);

inventory.push(
  new Shoe('Light Ups', 'img/lightups.jpg', 'White', 'Petite', '$975.00')
);

inventory.push(
  new Shoe('Ballet', 'img/ballet.jpg', 'Beige', 'Small', '$30.00')
);

for(var i = 0; i <inventory.length; i++) {
    var newDiv = document.createElement('div');
    newDiv.className = "col-4 text-center";
        newDiv.innerHTML =
      '<h1>' + inventory[i].name + '</h1>'
      + '<img src="' + inventory[i].image + '">'
      + '<h3>' + inventory[i].color + '</h3>'
      + '<h4>' + inventory[i].size + '</h4>'
      + '<p>' + inventory[i].price + '</p>'
      + '<button type="button" style="border-radius:50px; margin-bottom:70px; color:black;background-color:grey;border:none;">Purchase</button>';

      document.querySelector("#products").appendChild(newDiv)
}
