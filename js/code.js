$(document).ready(function () {
    


    var resultList = "#myList li";
    var size_li = $(resultList).size();
    console.log(size_li);
    x = 8;
    $(resultList + ':lt(' + x + ')').show();

    $('#loadMore').click(function () {
        x = (x + 8 <= size_li) ? x + 8 : size_li;
        $(resultList + ':lt(' + x + ')').show();
    });
    $('#showLess').click(function () {
        x = (x - 8 < 0) ? 3 : x - 8;
        $(resultList).not(':lt(' + x + ')').hide();
    });

  
});
$('.owl-carousel').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:1,
    margin:35,
    autoplay:true,
    stagePadding:30,
    smartSpeed:300
})