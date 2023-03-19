import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, UseGuards } from "@nestjs/common";
import { GetUser } from "src/auth/decorator";
import { JwtGuard } from "src/auth/guard";
import { CampaignService } from "./campaign.service";
import { CreateCampaignDto, EditCampaignDto } from "./dto";

@UseGuards(JwtGuard)
@Controller("campaigns")
export class CampaignController {
    constructor(private campaignService: CampaignService,) {}

    @Get()
    getCampaigns() {
        // console.log('ac')
        return this.campaignService.getCampaigns()
    }

    @Get(':id')
    getCampaignById(@Param('id', ParseIntPipe) campaignId: number){

    }

    @Get('my_campaigns')
    getMyCampaigns(@GetUser('id') userId: number) {

    }

    @Post()
    createCampaign(@Body() dto: any) {
        console.log(dto)
        return this.campaignService.createCampaign(dto);
    }

    @Patch(':id')
    editCampaignById(
        @Param('id', ParseIntPipe) campaignId: number,
        @Body() dto: any,
    ) {
        return this.campaignService.editCampaignById(campaignId, dto);
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    deleteCampaignById(
        @GetUser('id') userId: number,
        @Param('id', ParseIntPipe) campaignId: number,
    ) {

    }
}