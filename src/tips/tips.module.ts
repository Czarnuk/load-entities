import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tip } from 'src/entities/Tip';
import { TipCategory } from 'src/entities/TipCategory';
import { TipPhoto } from 'src/entities/TipPhoto';
import { TipsController } from './tips.controller';
import { TipsService } from './tips.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tip, TipPhoto, TipCategory])],
  controllers: [TipsController],
  providers: [TipsService],
})
export class TipsModule {}
