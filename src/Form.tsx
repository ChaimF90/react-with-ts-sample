import * as React from 'react';
import { ComponentProps } from './interfaces';

export default function Form(props: ComponentProps) {
    return (
        <div>
            <input
                onChange={props.changeHandler}
                type="text"
                name="firstName"
                placeholder='First name'
                value={props.person.firstName} />
            <br />
            <input
                onChange={props.changeHandler}
                type="text"
                name="lastName"
                placeholder='Last name'
                value={props.person.lastName} />
            <br />
            <input
                onChange={props.changeHandler}
                type="text"
                name="age"
                placeholder='age'
                value={props.person.age} />
            <br />
            <button onClick={props.displayUserInfo}>Click me!</button>
        </div>
    )
}