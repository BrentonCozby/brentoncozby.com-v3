export default function() {
    const $overlay = $('#overlay')
    const $menuButton = $('#menu-button')
    const $menu = $('#menu')

    $menuButton.click(e => {
        $overlay.toggleClass('revealed')
        $menuButton.toggleClass('open')
        $menu.toggleClass('revealed')
    })

    $('.menu-a:not(.contact-btn)').click(e => {
        $menuButton.removeClass('open')
        $menu.removeClass('revealed')
        $overlay.removeClass('revealed')
    })
}
