export default function() {
    const $overlay = $('#overlay');
    const $menuButton = $('#menu-button');
    const $menu = $('#menu');

    $menuButton.click(() => {
        $overlay.fadeToggle(200);
        $menuButton.toggleClass('open');
        $menu.toggleClass('revealed');
    });

    $('.menu-a').click(() => {
        $menuButton.removeClass('open');
        $menu.removeClass('revealed');
        $overlay.fadeOut(200);
    });
}
