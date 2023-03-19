import { CampaignService } from "./campaign.service";
export declare class CampaignController {
    private campaignService;
    constructor(campaignService: CampaignService);
    getCampaigns(): any;
    getCampaignById(campaignId: number): void;
    getMyCampaigns(userId: number): void;
    createCampaign(dto: any): any;
    editCampaignById(campaignId: number, dto: any): any;
    deleteCampaignById(userId: number, campaignId: number): void;
}
