'use strict';

class TableTemplate {
    static fillIn(tableId, dictionary, columnName) {

        const table = document.getElementById(tableId);
        const headerRow = table.rows[0];

        //Applies fill in function to each cell in headers row
        Array.from(headerRow.cells).forEach(cell => {
            const templateProcessor = new Cs142TemplateProcessor(cell.innerHTML);
            cell.innerHTML = templateProcessor.fillIn(dictionary);
        });


        //Applies fillIn method to all columns/ only columnName
        for (let i = 0; i < headerRow.cells.length; i++) {
            for (let j = 0; j < table.rows.length; j++) {
                if (columnName === headerRow.cells[i].innerHTML || !columnName) {
                    const cell = table.rows[j].cells[i];
                    const templateProcessor = new Cs142TemplateProcessor(cell.innerHTML);
                    cell.innerHTML = templateProcessor.fillIn(dictionary);
                }
            }
        }
    }
}