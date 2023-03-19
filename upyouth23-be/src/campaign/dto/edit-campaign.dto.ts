import {
    IsDate,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
  } from 'class-validator';
  
  export class EditCampaignDto {
    pId: number;

    title: string;
  
    category: string;

    image: string;

    description: string;

    owner: string;

    target: number;

    amountCollected: number; // 0

    deadline: number;

    donators: [];

    status: string;
  }
  