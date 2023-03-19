import { DataCampaign } from 'src/assets/dataCampaigns';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CampaignService {
    private prisma;
    data: DataCampaign;
    constructor(prisma: PrismaService);
    getCampaigns(): any;
    getCampaignById(campaignId: number): void;
    getMyCampaigns(userId: number): void;
    createCampaign(dto: any): any;
    editCampaignById(campaignId: number, dto: any): any;
    deleteCampaignById(userId: number, campaignId: number): void;
}
