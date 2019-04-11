export interface CardDeck {
    name: string;
    types: string[];
}

export interface Card{
    cardID: string;
    cardSet: string;
    img: string;
    imgGold: string;
    name: string;
    text: string;

    cost: number;
    attack: number;
    health: number;
    rarity: string;
    type: string;

    dbfId: string;
    faction: string;
    playerClass: string;
    locale: string;

}