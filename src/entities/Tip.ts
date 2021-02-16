import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TipCategory } from './TipCategory';
import { TipPhoto } from './TipPhoto';

@Index('PK_Tip_ID', ['id'], { unique: true })
@Entity('Tip', { schema: 'dbo' })
export class Tip {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'Title', length: 40 })
  title: string;

  @Column('varchar', { name: 'Description', length: 400 })
  description: string;

  @Column('varchar', { name: 'Status', length: 10 })
  status: string;

  @Column('date', { name: 'Created', default: () => 'getdate()' })
  created: Date;

  @Column('date', { name: 'Expiration', nullable: true })
  expiration: Date | null;

  @Column('date', { name: 'Published' })
  published: Date;

  @Column('varchar', { name: 'Link', length: 255 })
  link: string;

  @Column('varchar', { name: 'Site', length: 30 })
  site: string;

  @Column('bit', { name: 'Highlighted', default: () => '(0)' })
  highlighted: boolean;

  @Column('bit', { name: 'departmentsAll', nullable: true })
  departmentsAll: boolean | null;

  @Column('bit', { name: 'audit', nullable: true })
  audit: boolean | null;

  @Column('bit', { name: 'consulting', nullable: true })
  consulting: boolean | null;

  @Column('bit', { name: 'tax', nullable: true })
  tax: boolean | null;

  @Column('bit', { name: 'fas', nullable: true })
  fas: boolean | null;

  @Column('bit', { name: 'risk', nullable: true })
  risk: boolean | null;

  @Column('bit', { name: 'is', nullable: true })
  is: boolean | null;

  @Column('bit', { name: 'seniorityAll', nullable: true })
  seniorityAll: boolean | null;

  @Column('bit', { name: 'practitioner', nullable: true })
  practitioner: boolean | null;

  @Column('bit', { name: 'manager', nullable: true })
  manager: boolean | null;

  @Column('bit', { name: 'partner', nullable: true })
  partner: boolean | null;

  @Column('bit', { name: 'countryAll', nullable: true })
  countryAll: boolean | null;

  @Column('bit', { name: 'albania', nullable: true })
  albania: boolean | null;

  @Column('bit', { name: 'bosnia_herzegovina', nullable: true })
  bosniaHerzegovina: boolean | null;

  @Column('bit', { name: 'bulgaria', nullable: true })
  bulgaria: boolean | null;

  @Column('bit', { name: 'croatia', nullable: true })
  croatia: boolean | null;

  @Column('bit', { name: 'czech_republic', nullable: true })
  czechRepublic: boolean | null;

  @Column('bit', { name: 'estonia', nullable: true })
  estonia: boolean | null;

  @Column('bit', { name: 'hungary', nullable: true })
  hungary: boolean | null;

  @Column('bit', { name: 'italy', nullable: true })
  italy: boolean | null;

  @Column('bit', { name: 'kosovo', nullable: true })
  kosovo: boolean | null;

  @Column('bit', { name: 'latvia', nullable: true })
  latvia: boolean | null;

  @Column('bit', { name: 'lithuania', nullable: true })
  lithuania: boolean | null;

  @Column('bit', { name: 'moldova', nullable: true })
  moldova: boolean | null;

  @Column('bit', { name: 'montenegro', nullable: true })
  montenegro: boolean | null;

  @Column('bit', { name: 'north_macedonia', nullable: true })
  northMacedonia: boolean | null;

  @Column('bit', { name: 'poland', nullable: true })
  poland: boolean | null;

  @Column('bit', { name: 'republika_srpska', nullable: true })
  republikaSrpska: boolean | null;

  @Column('bit', { name: 'romania', nullable: true })
  romania: boolean | null;

  @Column('bit', { name: 'serbia', nullable: true })
  serbia: boolean | null;

  @Column('bit', { name: 'slovakia', nullable: true })
  slovakia: boolean | null;

  @Column('bit', { name: 'slovenia', nullable: true })
  slovenia: boolean | null;

  @Column('bit', { name: 'ssc_rzeszow', nullable: true })
  sscRzeszow: boolean | null;

  @Column('bit', { name: 'service_centre', nullable: true })
  serviceCentre: boolean | null;

  @ManyToOne(
    () => TipPhoto,
    tipPhoto => tipPhoto.tips,
  )
  @JoinColumn([{ name: 'Photo', referencedColumnName: 'id' }])
  photo: TipPhoto;

  @ManyToMany(
    () => TipCategory,
    tipCategory => tipCategory.tips,
    { onDelete: 'CASCADE' },
  )
  @JoinTable({
    name: 'TipCategoryJunction',
    joinColumns: [{ name: 'TipId', referencedColumnName: 'id' }],
    inverseJoinColumns: [{ name: 'CategoryId', referencedColumnName: 'id' }],
    schema: 'dbo',
  })
  tipCategories: TipCategory[];
}
