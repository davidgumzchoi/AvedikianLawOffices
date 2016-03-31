$(function() {
    $('input,textarea').jqBootstrapValidation({
        filter: function() {
            return $(this).is(':visible');
        },
    });

    $('a[data-toggle=\"tab\"]').click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function() {
    $('#success').html('');
});