 // Resume download functionality
 document.getElementById('downloadResume').addEventListener('click', function () {
  // Path to the resume file
  const resumePath = 'Resume.pdf'; // Ensure this matches the actual file location

  // Create a hidden link element
  const link = document.createElement('a');
  link.href = resumePath;
  link.download = 'My_Resume.pdf'; // Desired name for the downloaded file

  // Programmatically click the link
  link.click();
});