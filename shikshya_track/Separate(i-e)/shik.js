function validateNumber(input) {
  input.value = input.value.replace(/[^0-9.]/g, '');
}









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
    jsPDF: { unit: 'mm', format: 'a3', orientation: "landscape", extends: "pdfHtml5" }

  };

  html2pdf().set(opt).from(document.getElementById("myForm")).save();
}

// trial 



function downloadXLSX(fileName) {
  const table = document.getElementById("T");
  const data = [
    { 'S.No': 1, 'Income': 'Fee', 'Student Name': '', 'Program': '', 'Amount': '', 'Remarks': '' },
    { 'S.No': 2, 'Income': 'Stationeries', 'Student Name': '', 'Program': '', 'Amount': '', 'Remarks': '' },
    { 'S.No': 3, 'Income': 'Rental Activities', 'Student Name': '', 'Program': '', 'Amount': '', 'Remarks': '' },
    { 'S.No': 4, 'Income': 'Others', 'Student Name': '', 'Program': '', 'Amount': '', 'Remarks': '' },
  ];

  // // Iterate through the table rows and build the data array
  // for (let i = 0; i < table.rows.length; i++) {
  //   const row = table.rows[i];
  //   const rowData = {};
  //   for (let j = 0; j < row.cells.length; j++) {
  //     const cellValue = row.cells[j].innerText; 
  //     rowData[table.rows[0].cells[j].innerText] = cellValue;
  //   }
  //   data.push(rowData);
  // }

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Income and Expenses');
  XLSX.writeFile(workbook, `${fileName}.xlsx`);
}

function downloadDOCX(fileName) {
  // Add the logic to download a DOCX file
  alert('DOCX download is not implemented yet.');
}