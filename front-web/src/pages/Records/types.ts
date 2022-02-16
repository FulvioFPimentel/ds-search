export type RecordResponse = {
    content: RecordItem[];
    totalPages: number;
}

export type RecordItem = {
    id: number;
    moment: string;
    name: string;
    age: number;
    gameTitle: string;
    gamePlatform: PlatForm;
    genreName: string;
}

export type PlatForm = 'XBOX' | 'PC' | 'PLAYSTATION'