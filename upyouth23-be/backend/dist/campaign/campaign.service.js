"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignService = void 0;
const common_1 = require("@nestjs/common");
const dataCampaigns_1 = require("../assets/dataCampaigns");
const prisma_service_1 = require("../prisma/prisma.service");
let CampaignService = class CampaignService {
    constructor(prisma) {
        this.prisma = prisma;
        this.data = new dataCampaigns_1.DataCampaign();
    }
    getCampaigns() {
        console.log(this.data);
        return this.data.data["campaigns"];
    }
    getCampaignById(campaignId) {
    }
    getMyCampaigns(userId) {
    }
    createCampaign(dto) {
        dto["pId"] = this.data.data["campaigns"].length;
        dto["amountCollected"] = 0;
        dto["donators"] = [],
            this.data.data["campaigns"].push(dto);
        console.log(this.data);
        this.data.updateData();
        return dto;
    }
    editCampaignById(campaignId, dto) {
        this.data.data["campaigns"][campaignId] = dto;
        this.data.updateData();
        return dto;
    }
    deleteCampaignById(userId, campaignId) {
    }
};
CampaignService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CampaignService);
exports.CampaignService = CampaignService;
//# sourceMappingURL=campaign.service.js.map