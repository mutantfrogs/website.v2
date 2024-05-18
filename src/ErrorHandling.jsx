// src/errorHandling.js
process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
  });
  