const fs = require("fs")

export class DataCampaign{
    data: JSON;
    constructor(){
        this.loadData();
    }

    loadData(){
        this.data = JSON.parse(fs.readFileSync('./src/assets/data.json', 'utf8'));
    }
    
    getData(){
        return this.data;
    }

    updateData(){
        fs.writeFileSync("./src/assets/data.json", JSON.stringify(this.data));
    }
}