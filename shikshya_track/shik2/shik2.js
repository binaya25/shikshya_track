function validateNumber(input) {
    input.value = input.value.replace(/[^0-9.]/g, '');
  }
  
  

// // Get the form and the radio inputs
// const form = document.querySelector('form');
// const downloadOptions = document.querySelectorAll('input[name="download"]');

// // Add submit event listener to the form
// form.addEventListener('submit', handleDownload);

// function handleDownload(event) {
//   // Prevent the default form submission
//   event.preventDefault();

//   // Get form data
//   const name = document.getElementById('name').value;
//   const amount = document.getElementById('amount').value;
//   const select = document.getElementById('select').value;
//   const program = document.getElementById('program').value;
//   const textwrite = document.getElementById('textwrite').value;

//   // Determine the download type based on the selected radio input
//   let downloadType = null;
//   downloadOptions.forEach(option => {
//     if (option.checked) {
//       downloadType = option.value;
//     }
//   });

//   if (downloadType === 'pdf') {
//     // Create and save the PDF
//     const { jsPDF } = window.jsPDF;
//     const doc = new jsPDF();

//     doc.text("Form Data", 20, 20);
//     doc.text(`Student Name: ${name}`, 20, 30);
//     doc.text(`Program: ${select}`, 20, 40);
//     doc.text(`Amount: ${amount}`, 20, 50);
//     doc.text(`Remarks: ${textwrite}`, 20, 60);

//     doc.save("form_data.pdf");
//   } else if (downloadType === 'xlsx') {
//     // Create and save the Excel file
//     const wb = XLSX.utils.book_new();
//     const ws_data = [
//       ["Student Name", "Program", "Amount", "Remarks"],
//       [name, select, amount, textwrite]
//     ];
//     const ws = XLSX.utils.aoa_to_sheet(ws_data);

//     XLSX.utils.book_append_sheet(wb, ws, "Form Data");
//     XLSX.writeFile(wb, "form_data.xlsx");
//   }
// }





  
  
  
  
  
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
      jsPDF: { unit: 'mm', format: 'a2', orientation:"portrait"}
      
    };
  
    html2pdf().set(opt).from(document.getElementById("myForm")).save();
  }
  
  function downloadXLSX(fileName) {
    const table = document.getElementById("T");
    const data = [
        { 'S.No': 1, 'Income':'Fee', 'Student Name': '', 'Program':'', 'Amount':'', 'Remarks': '' },
        { 'S.No': 2, 'Income':'Stationeries'},
        { 'S.No': 3, 'Income':'Rental Activities'},
        { 'S.No': 4, 'Income':'Others'},
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