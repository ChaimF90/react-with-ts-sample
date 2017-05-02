export interface Person {
    firstName: string;
    lastName: string;
    age: number
}

export interface ComponentState {
    person: Person;
}

export interface ComponentProps {
    person: Person;
    changeHandler: (e: any) => void;
    displayUserInfo: () => void;
}