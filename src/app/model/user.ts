import { Voteit } from "./voteit";

export interface User {
    id: number,
    username: string,
    email: string,
    voteits: Voteit[]
}
