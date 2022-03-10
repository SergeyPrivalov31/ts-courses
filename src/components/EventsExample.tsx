import React, { FC, useRef, useState } from 'react'

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef= useRef<HTMLInputElement>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value) //current может быть null, поэтому делаем необязательным ==> /current?/
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG')
    }

    const dragWithPreventHendler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()//что-бы предотвратить действия браузера по умолчанию
        setIsDrag(true)
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()//что-бы предотвратить действия браузера по умолчанию
        setIsDrag(false)
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()//что-бы предотвратить действия браузера по умолчанию
        setIsDrag(false)
        console.log('DROP');
    }

  return (
    <div>
        <input type='text' value={value} onChange={changeHandler} placeholder='Управляемый'/>
        <input ref={inputRef} type='text' placeholder='Неуправляемый'/>
        <button onClick={clickHandler}>Выполнить!</button>
        <div onDrag={dragHandler} draggable style={{width: '200px', height: '200px', background: 'red', marginTop: '15px'}}></div>
        <div
            onDrop={dropHandler}
            onDragLeave={leaveHandler}
            onDragOver={dragWithPreventHendler}
            style={{width: '200px', height: '200px', background: isDrag?'blue':'red', marginTop: '15px'}}></div>
    </div>
  )
}

export default EventsExample