import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class Repo {
    @ObjectIdColumn()
    _id: string

    @Column()
    id: string

    @Column()
    name: string

    @Column()
    html_url: string

    @Column()
    description: string

    @Column()
    created_at: Date

    @Column()
    clone_url: string

    @Column()
    language: string
}