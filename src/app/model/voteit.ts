import { Tag } from "./tag";
import { User } from "./user";

export interface Voteit {

    id: number,
    tags: string[],
    title: string,
    description: string,
    url: string,
    picture: string,
    votesUp: number,
    votesDown: number,
    isForAdult: boolean,
    creationDate: string,
    user: string
}
