import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tip } from './Tip';

@Index('PK_TipPhoto_ID', ['id'], { unique: true })
@Entity('TipPhoto', { schema: 'dbo' })
export class TipPhoto {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'Name', length: 50 })
  name: string;

  @Column('varchar', { name: 'Description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', { name: 'Tag', nullable: true, length: 255 })
  tag: string | null;

  @Column('varchar', { name: 'Image' })
  image: string;

  @OneToMany(
    () => Tip,
    tip => tip.photo,
  )
  tips: Tip[];
}
