import { Gallery } from "src/gallery/entity/gallery.entity";
import { Member } from "src/member/entity/member.entity";
import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Like extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Gallery, (gallery) => gallery.likes, { onDelete: "CASCADE" })
  gallery: Gallery;

  @ManyToOne(() => Member, (member) => member.likes, { onDelete: "CASCADE" })
  @JoinColumn()
  member: Member;
}
