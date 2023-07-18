const getAllFiles = require("../utils/getAllFiles");
const path = require('path');
const runPythonProgram = require("../utils/runPythonProgram");

module.exports = () => {
    runPythonProgram(path.join(__dirname, 'changeJsonFormat.py'));
    const aovFolderPath = path.join(__dirname, '../AOV');
    const heroFolders = getAllFiles(aovFolderPath, true);
    const heroFolderData = [];

    for (const heroFolder of heroFolders) {
        const heroFiles = getAllFiles(heroFolder);
        for (const heroFile of heroFiles) {
            const { heroName, heroCategory } = require(heroFile);
            const folderData = {
                name: `${heroCategory}-${heroName}`,
                value: heroFile
            };
            heroFolderData.push(folderData);
        }
    }

    return heroFolderData;
};
