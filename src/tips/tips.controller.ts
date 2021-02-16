import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Tip } from 'src/entities/Tip';
import { TipCategory } from 'src/entities/TipCategory';
import { TipPhoto } from 'src/entities/TipPhoto';
import { TipsService } from './tips.service';

@Controller()
export class TipsController {
  constructor(private service: TipsService) {}

  @Get('api/getTips')
  getAllTips() {
    return this.service.getAllTips();
  }

  @Get('api/getTip/:id')
  getTipById(@Param('id') id: string) {
    return this.service.getTipByID(id);
  }

  @Post('api/createTip')
  createTip(@Body() tip: Tip): void {
    this.service.addOrEditTip(tip);
  }

  @Put('api/editTip')
  editTip(@Body() tip: Tip): void {
    this.service.addOrEditTip(tip);
  }

  @Delete('api/deleteTip/:id')
  deleteTip(@Param('id') id: string): Promise<Tip[]> {
    return this.service.deleteTip(id).then(() => this.service.getAllTips());
  }

  @Get('api/getTipPhotos')
  getTipPhotos(): Promise<TipPhoto[]> {
    return this.service.getTipPhotos();
  }

  @Get('api/tipPhoto/:id')
  getTipPhotoById(@Param('id') id: number): Promise<TipPhoto> {
    return this.service.getTipPhotoById(id);
  }

  @Post('api/addTipPhoto')
  addTipPhoto(@Body() photo: TipPhoto): Promise<TipPhoto> {
    return this.service.addPhoto(photo);
  }

  @Get('api/getTipCategories')
  getTipCategories(): Promise<TipCategory[]> {
    return this.service.getCategories();
  }

  @Post('api/addTipCategory')
  addTipCategory(@Body() category: TipCategory) {
    this.service.addOrEditCategory(category);
  }
}
