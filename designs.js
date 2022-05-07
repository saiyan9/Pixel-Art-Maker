// Select color input

// Select size input




// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function makeGrid(grid) {
    $('table tr').remove();
    var height = $('#inputHeight').val();
    var width = $('#inputWidth').val();
        for (var i=1; i<=height; i++) {
            $('table').append("<tr></tr>");
            for (var j=1; j<=width; j++) {
                $('tr:last').append("<td></td>");
                $('td').attr("class", 'cells');
            }
        }
        grid.preventDefault();
        $('.cells').click(function(event) {
            var paint=$('#colorPicker').val();
            $(event.target).css('background-color', paint);
        });
    
});