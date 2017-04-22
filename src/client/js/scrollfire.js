export default function() {

    $('.sf-appear').scrollfire({
        offset: 140,
        onBottomIn: function(elm, distance_scrolled) {
            $(elm).removeClass('sf-appear');
        }
    });
}
