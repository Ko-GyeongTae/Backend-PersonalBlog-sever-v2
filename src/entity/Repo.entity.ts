import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryColumn('uuid')
    postId: string

    @Column()
    title: string

    @Column()
    content: string

    @Column()
    media: string

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    createdAt: string;
}