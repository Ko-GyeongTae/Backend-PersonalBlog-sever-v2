import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity('repos')
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

    constructor(repos?: Partial<Repo>) {
        Object.assign(this, repos);
    }
}
