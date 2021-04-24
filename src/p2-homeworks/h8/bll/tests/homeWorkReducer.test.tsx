import React from 'react';
import {homeWorkReducer} from "../homeWorkReducer";
import {initialStateType} from '../../HW8';

let initialState: initialStateType;

beforeEach(() => {
    initialState = [
        {_id: 0, name: "Кот", age: 3},
        {_id: 1, name: "Александр", age: 66},
        {_id: 2, name: "Коля", age: 16},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55},
    ]
});

test("sort name up", () => {
    const newState = homeWorkReducer(initialState, {type: "sort", payload: "up"});

    console.log(newState);
    expect(newState[0].name).toBe('Александр');
    expect(newState[1].name).toBe('Виктор');

    const result = [
        1,3,4,5,2,0
    ].filter((el, i) => el === newState[i]._id)
    expect(result.length).toBe(newState.length)
});
test("sort name down", () => {
    const newState = homeWorkReducer(initialState, {type: "sort", payload: "down"});

    expect(newState[0].name).toBe('Кот');
    expect(newState[1].name).toBe('Коля');
});
test("check age 18", () => {
    const newState = homeWorkReducer(initialState, {type: "check", payload: 18});

    expect(newState[0].age).toBe(66);
    expect(newState[1].age).toBe(44);
    expect(newState.length).toBe(4);
});
