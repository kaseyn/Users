$(document).ready(function(){

    $('form').submit(function(){
        alert('you submitted me!');

        $('tbody').append("<tr><td>"+$("input[name='first_name'").val()+"</td><td>"+$("input[name='last_name'").val()+"</td><td>"+$("input[name='email'").val()+"</td><td>"+$("input[name='contact'").val()+"</td></tr>");
        return false;
    });

});