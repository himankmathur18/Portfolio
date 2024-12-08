 // Function to handle certificate downloads
 function downloadCertificate(fileName) {
    const link = document.createElement('a');
    link.href = fileName; // Ensure the file name matches the actual certificate file
    link.download = fileName;
    link.click();
  }
