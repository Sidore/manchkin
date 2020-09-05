export interface Class {
    bonus: IBonus;
    title: string;
    cons: string; // недостатки класса
}
export interface Race {
    bonus: IBonus;
    title: string;
    cons: string; // недостатки расы
}

export enum Sex {
    Male,
    Female
}

export interface Bless {
    bonus: IBonus[];
    conditions: IRestriction[];
}

export interface Curse {
    conditions: IRestriction[];
    action: string;
}
export interface Monster {
    power: number;
    level: number;
    contitionsToLeave: IRestriction[];
    lewdness: string; // непотребство
    treasures: number;
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

export interface PlayerBody {
    head: Equipment;
    tors: Equipment;
    legs: Equipment;
    weapon: Equipment[];
    universal: Equipment[];
}

export interface IBonus {
    boost: string;
}

export interface IRestriction {
    requirments : IComperator[]
}

export interface ISpecialBonus extends IBonus, IRestriction {}

export interface IComperator {
    Prop: GameProps;
    Comperator: Comperators;
    Value: number | string;
}

export enum GameProps {
    Level,
    Power,
    Race,
    Sex,
    Class,
    Head,
    Tors,
    Legs,
    Weapon,
    Universal,
    HighestBonus
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

export interface ICard {
    type: CardTypes
}

export class Player {
    constructor() {
        this.level = 1;
        this.power = 1;
    }

    level: number;
    power: number;
    equipment: PlayerBody;
    temporaryBonuses: IBonus[];
    temporaryCurses: Curse[]; // curse action
    race: Race;
    class: Class;
}