"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataCampaign = void 0;
const fs = require("fs");
class DataCampaign {
    constructor() {
        this.loadData();
    }
    loadData() {
        this.data = JSON.parse(fs.readFileSync('/home/dirii/TheOdyssey/upyouth23-be/backend/src/assets/data.json', 'utf8'));
    }
    getData() {
        return this.data;
    }
    updateData() {
        fs.writeFileSync("/home/dirii/TheOdyssey/upyouth23-be/backend/src/assets/data.json", JSON.stringify(this.data));
    }
}
exports.DataCampaign = DataCampaign;
//# sourceMappingURL=dataCampaigns.js.map