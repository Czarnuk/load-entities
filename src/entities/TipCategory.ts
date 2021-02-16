import {
  Column,
  Entity,
  Index,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tip } from './Tip';

@Index('PK_Category_ID', ['id'], { unique: true })
@Entity('TipCategory', { schema: 'dbo' })
export class TipCategory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'Name', length: 50 })
  name: string;

  @Column('varchar', { name: 'Description', nullable: true, length: 500 })
  description: string | null;

  @ManyToMany(
    () => Tip,
    tip => tip.tipCategories,
    { onDelete: 'CASCADE' },
  )
  tips: Tip[];
}
