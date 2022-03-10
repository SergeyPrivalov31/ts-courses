import React, {FC} from 'react'

export enum CardVariant { //перечисление enum, в котором описывам что мы ожидаем на входе в этот пропс
  outlined = 'outlined',
  primary = 'primary'
} 

interface CardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
}

const Card: FC<CardProps> =
  ({
    width, height, children, variant
  }) => {
    return (
      <div style={{
        width, height,
        border: variant === CardVariant.outlined ? '1px solid lightGray' : 'none',
        backgroundColor: variant === CardVariant.primary ? 'lightGray' : '',
        borderRadius: '10px' }}>
        {children}
      </div>
    )
  }

export default Card;
