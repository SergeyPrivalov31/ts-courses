import React, {FC, useState} from 'react'

export enum CardVariant { //перечисление enum, в котором описывам что мы ожидаем на входе в этот пропс
  outlined = 'outlined',
  primary = 'primary'
} 

interface CardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  onClick: () => void; //ничего не принимает и ничегоо не возвращает, поэтому void (number, string//)
}

const Card: FC<CardProps> =
  ({
    width, height, children, variant, onClick
  }) => {
    return (
      <div style={{
        width, height,
        padding: '15px',
        border: variant === CardVariant.outlined ? '1px solid lightGray' : 'none',
        backgroundColor: variant === CardVariant.primary ? 'lightGray' : '',
        borderRadius: '5px' }}
        onClick={onClick}
        >
        {children}
      </div>
    )
  }

export default Card;
