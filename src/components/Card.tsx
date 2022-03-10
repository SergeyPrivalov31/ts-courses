import React from 'react'

interface CardProps {
    width?: string;
    height?: string;
    children?: React.ReactChild | React.ReactNode;
}

const Card = ({width, height, children}: CardProps) => {
  return (
    <div style={{width, height, border: '1px solid lightGray', borderRadius: '10px'}}>
       {children}
    </div>
  )
}

export default Card;
