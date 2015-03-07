$(function() {
    $('input,textarea').jqBootstrapValidation({
        preventSubmit: true,
        submitSuccess: function($form, event) {
            event.preventDefault();
            var name = $('input#name').val();  
            var email = $('input#email').val(); 
            var message = $('textarea#message').val();
            var firstName = name;
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }        
            $.ajax({
                url: "../bin/contact.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {  
                    $('#success').html('<div class="alert alert-success">');
                    $('#success > .alert-success').html('<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;')
                    .append( '</button>');
                    $('#success > .alert-success')
                    .append('<strong>Your message has been sent. </strong>');
                    $('#success > .alert-success')
                    .append('</div>');

                    $('#contactForm').trigger('reset');
                },
                error: function() {
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-success').html('<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;')
                    .append( '</button>');
                    $('#success > .alert-danger').append('<strong>Sorry '+firstName+' it seems that my mail server is not responding.</strong> Could you please email me directly to <a href="mailto:liza@avelaw.com?Subject=Message from AvedikianLawOffices.com">liza@avelaw.com</a>? Sorry for the inconvenience!');
                    $('#success > .alert-danger').append('</div>');
                    $('#contactForm').trigger('reset');
                },
            })
        },
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