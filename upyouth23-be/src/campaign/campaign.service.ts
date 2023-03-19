import { Injectable } from '@nestjs/common';
import { DataCampaign } from 'src/assets/dataCampaigns';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCampaignDto, EditCampaignDto } from './dto';

@Injectable()
export class CampaignService {
    data: DataCampaign;

    constructor(private prisma: PrismaService) {
        this.data = new DataCampaign();
    }

    getCampaigns() {
        console.log(this.data)
        return this.data.data["campaigns"];
    }

    getCampaignById(campaignId: number){

    }

    getMyCampaigns(userId: number) {

    }

    createCampaign(
        dto: any
    ) {
        dto["pId"] = this.data.data["campaigns"].length
        dto["amountCollected"] = 0;
        dto["donators"] = [],
        this.data.data["campaigns"].push(dto)
        console.log(this.data);
        this.data.updateData();

        return dto
    }

    editCampaignById(
        campaignId: number,
        dto: any,
    ) {
        
        this.data.data["campaigns"][campaignId] = dto;
        this.data.updateData();
        return dto
    }

    deleteCampaignById(
        userId: number,
        campaignId: number,
    ) {

    }
}
