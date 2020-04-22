window.$$ = window.$$ || {};

(function() {
    var d = document;

    $$.queryParam = function(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
        var results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    $$.setCookie = function(name, val, days) {
        days = days || (10 * 365);
        var age = days * (24 * 60 * 60 * 1000);
        var date = new Date();
        date.setTime(date.getTime() + age);
        d.cookie = name + '=' + val + '; expires=' + date.toGMTString() + '; path=/';
    }

    $$.email = function(lhs, rhs) {
        d.write('<a href="mai');
        d.write('lto:' + lhs + '&#64;');
        d.write(rhs + '">' + lhs + '&#64;' + rhs + '</a>');
    }

    // No-jQuery helpers

    function get(id) {
        return d.getElementById(id);
    }

    $$.hide = function(id) {
        get(id).style.display = 'none';
    }

    $$.removeClass = function(id, cls) {
        get(id).classList.remove(cls);
    }

    $$.val = function(id, value) {
        get(id).value = value;
    }
})();
