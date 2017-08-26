export default function() {
    const $portfolio = $('#portfolio')
    
    $('.teaser').click(e => {
        const modalId = e.currentTarget.dataset.modal
        $(`#${modalId}`).addClass('open')
        $(window).scrollTop($portfolio.offset().top)
    })

    $('.creation-modal-close, .close-btn').click(e => {
        $(e.currentTarget).closest('.open').removeClass('open')
    })
}