import React, {FC, useState} from 'react'

export enum CardVariant { //перечисление enum, в котором описывам что мы ожидаем на входе в этот пропс
  outlined = 'outlined',
  primary = 'primary'
} 

interface CardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  onClick: (num: number) => void; //ничего не принимает и ничегоо не возвращает, поэтому void (number, string//)
}

const Card: FC<CardProps> =
  ({
    width, height, children, variant, onClick
  }) => {
    const [state, setState] = useState(0)
    return (
      <div style={{
        width, height,
        border: variant === CardVariant.outlined ? '1px solid lightGray' : 'none',
        backgroundColor: variant === CardVariant.primary ? 'lightGray' : '',
        borderRadius: '10px' }}
        onClick={()=> onClick(state)}
        >
        {children}
      </div>
    )
  }

export default Card;
