function validateNumber(input) {
  input.value = input.value.replace(/[^0-9.]/g, '');
}



// $(document).ready(function() {
//   $('#T').DataTable({
//       dom: 'Bfrtip',
//       buttons: [
//           'copy', 'csv', 'excel', 'pdfHtml5', 'print'
//       ]
//   });
// });








window.onload = function () {
  document.getElementById("download")
    .addEventListener("click", downloadFile);
};

function downloadFile() {
  const fileNameInput = document.getElementById("fileName");
  const fileName = fileNameInput.value || "untitled";
  let fileExtension = "";

  if (document.getElementById("pdfRadio").checked) {
    downloadPDF(fileName);
  } else if (document.getElementById("xlsxRadio").checked) {
    downloadXLSX(fileName);
  } else if (document.getElementById("docxRadio").checked) {
    downloadDOCX(fileName);
  }
}

function downloadPDF(fileName) {
  const opt = {
    margin: 0,
    filename: `${fileName}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a2', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(document.getElementById("myForm")).save();
}

function downloadXLSX(fileName) {
  const table = document.getElementById("T");
  const data = [];

  // Iterate through the table rows and build the data array
  for (let i = 0; i < table.rows.length; i++) {
    const row = table.rows[i];
    const rowData = {};
    for (let j = 0; j < row.cells.length; j++) {
      const cellValue = row.cells[j].innerText; // Use innerText instead of textContent
      rowData[table.rows[0].cells[j].innerText] = cellValue; // Use innerText here as well
    }
    data.push(rowData);
  }

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Income and Expenses');
  XLSX.writeFile(workbook, `${fileName}.xlsx`);
}

function downloadDOCX(fileName) {
  // Add the logic to download a DOCX file
  alert('DOCX download is not implemented yet.');
}


















// window.onload = function () {
//   document.getElementById("download")
//     .addEventListener("click", () => {
//       const fileNameInput = document.getElementById("fileName");
//       const fileName = fileNameInput.value || "untitled";
//       let fileExtension = "";

//       if (document.getElementById("pdfRadio").checked) {
//         fileExtension = "pdf";
//       } else if (document.getElementById("xlsxRadio").checked) {
//         fileExtension = "xlsx";
//       } else if (document.getElementById("docxRadio").checked) {
//         fileExtension = "docx";
//       }

//       const opt = {
//         margin: 0,
//         filename: `${fileName}.${fileExtension}`,
//         image: { type: 'jpeg', quality: 0.98 },
//         html2canvas: { scale: 2 },
//         jsPDF: { unit: 'mm', format: 'a2', orientation: 'portrait' }
//       };

//       html2pdf().set(opt).from(document.getElementById("myForm")).save();
//     });
// }






