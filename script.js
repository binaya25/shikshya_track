function validateNumber(input) {
    input.value = input.value.replace(/[^0-9.]/g, '');
}





window.onload = function() {
    document.getElementById("download")
      .addEventListener("click", () => {
        const myForm = document.getElementById("myForm");
        const fileNameInput = document.getElementById("fileName");
        const fileName = fileNameInput.value || "form";

        const opt = {
          margin: 0,
          filename: `${fileName}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'mm', format: 'a2', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(myForm).save();
      });
  }












// window.onload = function(){
//     document.getElementById("download")
//     .addEventListener("click",()=>{
//         const myForm = this.document.getElementById("myForm")
//         const styles = getComputedStyle(document.body);
//         console.log(myForm);
//         console.log(window);
//         html2pdf().from(myForm).save();
//     })
// }






















// function downloadFile() {
//     const myForm = document.getElementById('myForm').outerHTML || "";
//     const tableElements = document.querySelectorAll('#myForm td');
//     let tableHTML = '';
//     tableElements.forEach(td => {
//         tableHTML += td.outerHTML;
//     });
//     const fileName = document.getElementById('fileName').value || 'Enter file name';
//     const fileType = document.querySelector('input[name="fileType"]:checked').value;
//     const styles = getComputedStyle(document.body);
//     const css = Array.from(styles).map(style => `${style}: ${styles.getPropertyValue(style)};`).join('\n');

//     if (fileType === 'pdf') {
//         downloadPDF(myForm, tableHTML, css, fileName);
//     } else if (fileType === 'xlsx') {
//         downloadXLSX(myForm, tableHTML, css, fileName);
//     } else if (fileType === 'docx') {
//         downloadDOCX(myForm, tableHTML, css, fileName);
//     }
// }

// function downloadPDF(myForm, tableHTML, css, fileName) {
//     var pdf = new jsPDF();
//     pdf.addHTML(myForm, function () {
//         pdf.addHTML(tableHTML, function () {
//             pdf.addPage();
//             pdf.setFontSize(10);
//             pdf.fromHTML(css, 10, 10);
//             pdf.save(`${fileName}.pdf`);
//         });
//     });
// }

// function downloadXLSX(myForm, tableHTML, css, fileName) {
//     var data = [
//         ['Form Content', 'Table Content'],
//         [myForm, tableHTML]
//     ];
//     var ws = XLSX.utils.aoa_to_sheet(data);
//     var wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Form Content');
//     XLSX.writeFile(wb, `${fileName}.xlsx`);
// }

// function downloadDOCX(myForm, tableHTML, css, fileName) {
//     var content = `<style>${css}</style>${myForm}${tableHTML}`;
//     var doc = new docxtemplater();
//     doc.loadZip(file);
//     doc.setData({ content: content });
//     doc.render();
//     doc.getZip().generateAsync({ type: 'blob' })
//         .then(function (blob) {
//             saveAs(blob, `${fileName}.docx`);
//         });
// }





















// function downloadFile() {
//     const fileName = document.getElementById('fileName').value || 'file';
//     const fileType = document.querySelector('input[name="fileType"]:checked').value;

//     // Create a new blob with the content of the HTML form
//     const formData = new FormData(document.getElementById('myForm'));
//     const blob = new Blob([formData], { type: 'text/html' });

//     // Create a temporary link element and trigger the download
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `${fileName}.${fileType}`;
//     document.body.appendChild(a);
//     a.click();

//     // Clean up
//     window.URL.revokeObjectURL(url);
//     document.body.removeChild(a);
// }


















// function downloadFile(downloadUrl, fileName) {
//     // Get the form data
//     const formData = new FormData(document.querySelector('form'));

//     // Convert the form data to a JSON object
//     const data = Object.fromEntries(formData);

//     // Convert the PDF object to a string
//     const jsonData = JSON.stringify(data, null, 2);

//     // Create a new Blob with the JSON data
//     const blob = new Blob([jsonData], { type: 'application/JSON' });

//     // Create a download link
//     const downloadLink = document.createElement('a');
//     downloadLink.href = URL.createObjectURL(blob);
//     downloadLink.download = 'form_data.json';

//     // Append the download link to the document and click it
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     document.body.removeChild(downloadLink);
// }


// function chooseFileToDownload() {
//     const fileType = prompt("Would you like to download an XLSX or PDF file?", "XLSX");

//     let downloadUrl;
//     let fileName;

//     if (fileType.toUpperCase() === "XLSX") {
//         downloadUrl = "https://example.com/your-xlsx-file.xlsx";
//         fileName = prompt("Please enter a filename for the XLSX file:", "your-file.xlsx");
//     } else {
//         downloadUrl = "https://example.com/your-pdf-file.pdf";
//         fileName = prompt("Please enter a filename for the PDF file:", "your-file.pdf");
//     }






//     function downloadFileToLocalStorage(downloadUrl, fileName) {
//         fetch(downloadUrl, fileName)
//             .then(response => response.blob())
//             .then(blob => {
//                 const blobUrl = URL.createObjectURL(blob);
//                 const link = document.createElement('a');
//                 link.href = blobUrl;
//                 link.download = fileName;
//                 document.body.appendChild(link);
//                 link.click();
//                 document.body.removeChild(link);
//                 URL.revokeObjectURL(blobUrl);
//             })
//             .catch(error => console.error('Error downloading file:', error));
//     }