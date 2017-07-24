$(document).ready(function() {
    $("#the-textarea").keyup(function() {
        console.log($("#the-textarea").text().length);
    });
});