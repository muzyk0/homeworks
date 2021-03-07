import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPressAddUser: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressAddUser} // деструктуризация пропсов
) => {
    const inputClass = error ? (`${s.inputClass} ${s.error}`) : (s.inputClass); // need to fix with (?:)

    return (
        <div className={s.greet}>
            <div className={s.Greeting}>
                <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onKeyPressAddUser}/>
                {<a className={s.add} onClick={addUser}>add</a>}
                <span>Add user: {totalUsers}</span>
            </div>
            <div>{error}</div>
        </div>
    );
}

export default Greeting;
