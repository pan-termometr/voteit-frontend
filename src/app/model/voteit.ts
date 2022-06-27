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
    author: string
}
