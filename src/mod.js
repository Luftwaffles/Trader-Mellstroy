const path = require('path');
const fs = require('fs');

class MellstroyTrader {
    postDBLoad(container) {
        const database = container.resolve("DatabaseServer").getTables();

        console.log("Database traders object before initialization:", database.traders);

        if (!database.traders) {
            console.log("Initializing database.traders as an empty object.");
            database.traders = {};
        }

        if (!database.traders["mellstroy"]) {
            console.log("Initializing database.traders['mellstroy'] as an empty object.");
            database.traders["mellstroy"] = {};
        }

        console.log("Database mellstroy object after ensuring initialization:", database.traders["mellstroy"]);

        const basePath = path.join(__dirname, "../src/db/traders/mellstroy/");
        
        try {
            const baseFilePath = path.join(basePath, 'base.json');
            const assortFilePath = path.join(basePath, 'assort.json');
            const dialogFilePath = path.join(basePath, 'dialog.json');
            const questAssortFilePath = path.join(basePath, 'questassort.json');

            if (!fs.existsSync(baseFilePath)) {
                console.error(`File not found: ${baseFilePath}`);
                return;
            }
            if (!fs.existsSync(assortFilePath)) {
                console.error(`File not found: ${assortFilePath}`);
                return;
            }
            if (!fs.existsSync(dialogFilePath)) {
                console.error(`File not found: ${dialogFilePath}`);
                return;
            }
            if (!fs.existsSync(questAssortFilePath)) {
                console.error(`File not found: ${questAssortFilePath}`);
                return;
            }

            const traderBase = JSON.parse(fs.readFileSync(baseFilePath, 'utf-8'));
            const traderAssort = JSON.parse(fs.readFileSync(assortFilePath, 'utf-8'));
            const traderDialog = JSON.parse(fs.readFileSync(dialogFilePath, 'utf-8'));
            const traderQuestAssort = JSON.parse(fs.readFileSync(questAssortFilePath, 'utf-8'));

            console.log("Trader files loaded successfully.");
            console.log("traderBase:", traderBase);
            console.log("traderAssort:", traderAssort);
            console.log("traderDialog:", traderDialog);
            console.log("traderQuestAssort:", traderQuestAssort);

            if (!database.traders["mellstroy"]) {
                console.error("Trader 'mellstroy' not found after initialization.");
                return;
            }

            database.traders["mellstroy"].base = traderBase;
            database.traders["mellstroy"].assort = traderAssort;
            database.traders["mellstroy"].dialog = traderDialog;
            database.traders["mellstroy"].questassort = traderQuestAssort;

            console.log("Trader 'mellstroy' data loaded successfully.");

        } catch (error) {
            console.error("Error loading trader files:", error.message);
        }
    }
}

module.exports = { mod: new MellstroyTrader() };
