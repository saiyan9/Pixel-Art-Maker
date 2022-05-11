// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function makeGrid(grid) {
    $('table tr').remove();  // remove every previous table row
    var height = $('#inputHeight').val(); //height of table or canvas
    var width = $('#inputWidth').val(); //width of table or canvas
        for (var i=1; i<=height; i++) {
            $('table').append("<tr></tr>");
            for (var j=1; j<=width; j++) {
                $('tr:last').append("<td></td>");
                $('td').attr("class", 'cells');
            }
        }
        grid.preventDefault(); 
        $('.cells').click(function(event) {    //add color to cells when clicked
            var paint=$('#colorPicker').val();
            $(event.target).css('background-color', paint);
        });
    
});

