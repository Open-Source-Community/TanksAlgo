var rows = [],
    tableBodyContent = document.getElementById("tableBody"),
    allRows = "",
    arrangedCols = [];


setTimeout(function()
{


/* separate colomnus and put it in 2D array */
for (var i = 0; i < rows.length; i++) {
    var cols = rows[i].split("/");
    arrangedCols.push(cols);
}

/* sort according to score */
arrangedCols.sort(sortFunction);

/* create the rows */
for (var i = 0; i < rows.length; i++){
    var newRow = "<tr><th scope='row'>" + (i+1) + "</th>";
     for(var j = 0; j<2; j++){
        newRow += "<td>" + arrangedCols[i][j] + "</td>";
    }
    newRow += "</tr>";
    allRows += newRow;
}

/* put rows in the table */
tableBodyContent.innerHTML = allRows;


/* sorting function */
function sortFunction(a, b) {
    if (parseInt(a[1]) == parseInt(b[1])) {
        return 0;
    }
    else {
        return (parseInt(a[1]) > parseInt(b[1])) ? -1 : 1;
    }
}
},5000); 