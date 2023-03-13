import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  Relation,
  JoinTable,
} from 'typeorm';

import { Review } from './Review';
import { Author } from './Author';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  bookId: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  publishYear: number;

  @Column({ default: false })
  publicDomain: boolean;

  @ManyToOne(() => Review, (reviews) => reviews.book)
  reviews: Relation<Review>;

  @ManyToMany(() => Author, (author) => author.books, { cascade: ['insert', 'update'] })
  @JoinTable()
  authors: Relation<Book>[];
}
