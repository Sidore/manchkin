

export interface Monster {
    level: number;
    restrictions: IRestriction[];
    lewdness: string; // непотребство
}

export interface Equipment {
    bodyPart: BodyParts;
    bonus: IBonus[];
    specialBonus: ISpecialBonus[];
    restrictions: IRestriction[];
}

export enum BodyParts {
    Head,
    Tors,
    Legs,
    Weapon,
    Universal
}

export interface IBonus {
    boost: string;
}

export interface IRestriction {
    requirments : IComperator[]
}

export interface ISpecialBonus extends IBonus, IRestriction {}

export interface IComperator {
    Prop: string;
    Comperator: Comperators;
    Value: number | string;
}

export enum Comperators {
    Eq,
    Lower,
    LowerEq,
    Grater,
    GraterEq,
    NotEq
}

export enum CardTypes {
    Door,
    Treasure
}

export interface Card {
    type: CardTypes
}