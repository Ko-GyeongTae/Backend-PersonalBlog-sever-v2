import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity('profiles')
export class Profile {
    @ObjectIdColumn()
    _id: string

    @Column()
    login: string

    @Column()
    id: number

    @Column()
    avatar_url: string

    @Column()
    html_url: string

    @Column()
    name: string

    @Column()
    company: string

    @Column()
    location: string

    @Column()
    email: string

    @Column()
    bio: string

    @Column()
    created_at: Date

    @Column()
    updated_at: Date

    constructor(profiles?: Partial<Profile>) {
        Object.assign(this, profiles);
    }
}