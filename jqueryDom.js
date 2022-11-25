console.log("Let's get ready to party with jQuery!");
$('article').attr('class', '.image-center')
$('p').last().remove();
const rng = Math.random()
$('h1').css('font-size', `${rng * 100}px`)
$('ol').append('<li>list item</li>')
$('aside').text('')
$('aside').html('<p>Sorry about the list<p>')
$(".form-control").on('keyup blur change', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color",
        "rgb(" + red + "," + green + "," + blue + ")");
  });
$('img').on('click', function(){
    this.remove()
})


$('#submit').on('click', function(event){
    event.preventDefault();
    let reviewTitle = $('#filmTitle').val();
    let reviewRating = $('#rating').val();
    let newReview = $(`<li>${reviewTitle}, ${reviewRating}/10</li>`)
    $('#movieList').append(newReview)
    const delButton = $('<button>x</button>')
    delButton.on('click', function(){
        newReview.remove()
    })
    delButton.appendTo(newReview)
})