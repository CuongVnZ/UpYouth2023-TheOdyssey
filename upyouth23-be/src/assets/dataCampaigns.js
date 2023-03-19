var fs = require("fs");
var DataCampaign = /** @class */ (function () {
    function DataCampaign() {
        this.loadData();
    }
    DataCampaign.prototype.loadData = function () {
        this.data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    };
    DataCampaign.prototype.getData = function () {
        return this.data;
    };
    DataCampaign.prototype.updateData = function (newData) {
        this.data = newData;
        fs.writeFile("data.json", JSON.stringify(this.data));
    };
    return DataCampaign;
}());
var tmp = new DataCampaign();
// tmp.data["campaigns"].push(tmp.data["campaigns"][0])
var data = tmp.getData();
console.log(tmp.data["campaigns"]);
