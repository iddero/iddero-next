$('#menu-lang a').click(function(ev) {
    $$.setCookie('lang', $(this).data('lang'));
})
$('#select-lang').change(function(ev) {
    // Value holds "lang:url"
    $$.setCookie('lang', this.value.substring(0, 2));
    window.location.href = this.value.substring(3);
});

lightbox.option({
    'resizeDuration': 100,
    'imageFadeDuration': 100,
    'fadeDuration': 100,
    // For galleries in the references section
    'albumLabel': document.title + ': %1 / %2'
})
