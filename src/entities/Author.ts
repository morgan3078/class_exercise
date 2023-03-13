import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, Relation } from 'typeorm';

import { Book } from './Book';

@Entity()
export class Author {
  @PrimaryGeneratedColumn('uuid')
  authorId: string;

  @Column()
  name: string;

  @Column()
  country: string = 'unknown';

  @ManyToMany(() => Book, (book) => book.authors, { cascade: ['insert', 'update'] })
  books: Relation<Book>[];
}
