// function autoDownloadAndCloseTab(fileUrl, fileName) {
//   // Create hidden anchor element
//   const a = document.createElement('a');

//   // Set appropriate attributes to trigger download and close tab
//   a.href = fileUrl;
//   a.download = fileName;
//   a.target = '_blank'; // Open download link in new tab

//   // Use reliable event listener for download completion
//   a.addEventListener('click', () => {
//     a.addEventListener('load', () => {
//       window.setTimeout(() => window.close(), 500); // Close tab after 500ms delay
//     });
//   });

//   // Trigger the download
//   a.click();
// }

// // Call the function with your desired file details
// autoDownloadAndCloseTab('https://uploads-ssl.webflow.com/5f7ae188ef1b6b55e708dbdb/60447a132cf1ba50737f2d83_A-practical-guide-to-data-driven-approach-for-feature-discovery-by-Apxor.pdf', 'A practical guide to data driven approach for feature discovery by Apxor.pdf');
