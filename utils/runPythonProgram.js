const { exec } = require('child_process');

module.exports = (pythonScript) => {
  exec(`python ${pythonScript}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Python script: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Python script encountered an error: ${stderr}`);
      return;
    }
  });
};

