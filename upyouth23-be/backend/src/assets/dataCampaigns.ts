const fs = require("fs")

export class DataCampaign{
    data: JSON;
    constructor(){
        this.loadData();
    }

    loadData(){
        this.data = JSON.parse(fs.readFileSync('/home/dirii/TheOdyssey/upyouth23-be/backend/src/assets/data.json', 'utf8'));
    }
    
    getData(){
        return this.data;
    }

    updateData(){
        fs.writeFileSync("/home/dirii/TheOdyssey/upyouth23-be/backend/src/assets/data.json", JSON.stringify(this.data));
    }
}