/** Variables available in all js files:
 * all the exported constants from globals.js
 */

/** Directories available as aliases
 * all the paths within Dir in globals.js
 */
import 'picturefill'
import 'lazysizes'
import 'utils/helpers'
import 'utils/errors'
import 'utils/scroll-animations'
import 'whatwg-fetch'

import './contact-me'

// eslint-disable-next-line no-console
console.log(`NODE_ENV: ${process.env.NODE_ENV}`)

const $overlay = $('#overlay')
const $menuButton = $('#menu-button')
const $menu = $('#menu')
const $contact = $('#contact')

function hideEverything() {
    $menuButton.classList.remove('open')
    $menu.classList.remove('revealed')
    $contact.classList.remove('revealed')
    $overlay.classList.remove('revealed')
}

$overlay.on('click', hideEverything)

$menuButton.on('click', function() {
    $overlay.classList.toggle('revealed')
    $menuButton.classList.toggle('open')
    $menu.classList.toggle('revealed')
})

$('.menu-a:not(.contact-btn)').on('click', function() {
    $menuButton.classList.remove('open')
    $menu.classList.remove('revealed')
    $overlay.classList.remove('revealed')
})
