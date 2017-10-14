export default function() {
    const $overlay = $('#overlay')
    const $menuButton = $('#menu-button')
    const $menu = $('#menu')
    const $contact = $('#contact')

    function hideEverything() {
        $menuButton.removeClass('open')
        $menu.removeClass('revealed')
        $contact.removeClass('revealed')
        $overlay.removeClass('revealed')
    }

    $overlay.click(hideEverything)

    $menuButton.click(function() {
        $overlay.toggleClass('revealed')
        $menuButton.toggleClass('open')
        $menu.toggleClass('revealed')
    })

    $('.menu-a:not(.contact-btn)').click(function() {
        $menuButton.removeClass('open')
        $menu.removeClass('revealed')
        $overlay.removeClass('revealed')
    })
}
