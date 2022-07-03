import { Tag } from "./tag";
import { User } from "./user";

export interface Voteit {

    id: number,
    tags: Tag[],
    title: string,
    description: string,
    url: string,
    thumbnail: string,
    votesUp: number,
    votesDown: number,
    isForAdult: boolean,
    creationDate: string,
    author: User
}
