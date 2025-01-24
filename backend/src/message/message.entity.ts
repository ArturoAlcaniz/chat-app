// backend/src/message/message.entity.ts
import { User } from 'src/user/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToOne(() => User, (user) => user.messages)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  timestamp: Date;

  @Column()
  username: string;
}