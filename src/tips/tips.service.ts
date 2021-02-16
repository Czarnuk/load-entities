import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { Tip } from '../entities/Tip';
import { TipCategory } from '../entities/TipCategory';
import { TipPhoto } from '../entities/TipPhoto';
@Injectable()
export class TipsService {
  private tipPhotoRepository: Repository<TipPhoto>;
  private categoryRepository: Repository<TipCategory>;
  constructor(
    @InjectRepository(Tip)
    private tipRepository: Repository<Tip>,
  ) {
    this.categoryRepository = getConnection().getRepository(TipCategory);
    this.tipPhotoRepository = getConnection().getRepository(TipPhoto);
  }

  getAllTips(): Promise<Tip[]> {
    return this.tipRepository.find({ relations: ['photo', 'tipCategories'] });
  }

  getTipByID(tipId: string): Promise<Tip> {
    return this.tipRepository.findOne(tipId, {
      relations: ['photo', 'tipCategories'],
    });
  }

  addOrEditTip(tip: Tip) {
    this.categoryRepository
      .createQueryBuilder('tipCategories')
      .where('tipCategories.name  IN (:...name)', {
        name: tip.tipCategories.map((cat) => cat['name']),
      })
      .getMany()
      .then((res) => {
        tip.tipCategories = res;
        return this.tipRepository.save(tip);
      });
  }

  deleteTip(tipId: string) {
    return this.tipRepository.delete(tipId);
  }

  getTipPhotos(): Promise<TipPhoto[]> {
    return this.tipPhotoRepository.find();
  }

  getTipPhotoById(photoId: number): Promise<TipPhoto> {
    return this.tipPhotoRepository.findOne(photoId);
  }

  addPhoto(photo: TipPhoto): Promise<TipPhoto> {
    return this.tipPhotoRepository.save(photo);
  }

  getCategories(): Promise<TipCategory[]> {
    return this.categoryRepository.find();
  }

  addOrEditCategory(category: TipCategory): Promise<TipCategory> {
    return this.categoryRepository.save(category);
  }
}
