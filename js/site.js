$('#menu-lang a').click(function(ev) {
    $$.setCookie('lang', $(this).data('lang'));
})
$('#select-lang').change(function(ev) {
    // Value holds "lang:url"
    $$.setCookie('lang', this.value.substring(0, 2));
    window.location.href = this.value.substring(3);
});