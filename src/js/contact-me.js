import sanitizeHTML from 'sanitize-html'

function submitContactForm() {
    var name = sanitizeHTML($('input#name').value)
    var email = sanitizeHTML($('input#email').value)
    var phone = sanitizeHTML($('input#phone').value)
    var message = sanitizeHTML($('textarea#message').value)

    fetch('/contact_me.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message }),
    })
        .then(data => data.json())
        .then(response => {
            $('#success').innerHTML = "<div class='alert alert-success'>"
            $('#success > .alert-success').innerHTML =
                "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times</button>"
            $('#success > .alert-success').innerHTML +=
                "<strong style='color:green'>Your message has been sent. </strong>"
            $('#success > .alert-success').innerHTML += '</div>'
            $('#contact-form').reset()
        })
        .catch(error => {
            $('#success').innerHTML = "<div class='alert alert-danger'>"
            $('#success > .alert-danger').innerHTML =
                "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times</button>"
            $('#success > .alert-danger').innerHTML +=
                "<strong style='color:red'>Sorry " +
                name +
                ', it seems that my mail server is not responding. Please try again later!'
            $('#success > .alert-danger').innerHTML += '</div>'
            $('#contact-form').reset()
        })
}

window.ready(function() {
    // $('#contact-form').on('submit', e => {
    //     e.preventDefault()
    //     submitContactForm(e)
    // })

    /*When clicking on Full hide fail/success boxes */
    // $('#name').focus(function() {
    //     $('#success').innerHTML = ''
    // })
    // $('#email').focus(function() {
    //     $('#success').innerHTML = ''
    // })
    // $('#message').focus(function() {
    //     $('#success').innerHTML = ''
    // })
    // $('#phone').focus(function() {
    //     $('#success').innerHTML = ''
    // })

    const $contact = $('#contact')
    const $overlay = $('#overlay')
    const $menuButton = $('#menu-button')
    const $menu = $('#menu')

    $('.contact-btn').on('click', function() {
        var mailLink = document.createElement('a')
        mailLink.setAttribute('href', 'mailto:brentoncozby@gmail.com')
        mailLink.setAttribute('target', '_blank')
        mailLink.setAttribute('rel', 'noopener')
        mailLink.click()
    })

    // $('.contact-btn').on('click', function() {
    //     $contact.classList.add('revealed')
    //     $overlay.classList.add('revealed')
    //     $menuButton.classList.remove('open')
    //     $menu.classList.remove('revealed')
    // })

    // $('#close').on('click', function() {
    //     $contact.classList.remove('revealed')
    //     $overlay.classList.remove('revealed')
    // })

    // $("a[data-toggle=\"tab\"]").click(function(e) {
    //     e.preventDefault()
    //     $(this).tab("show")
    // })
})
