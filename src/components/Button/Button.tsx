import React from 'react';

type PropType = {
    name: string

}

export const Button = ({name}: PropType) => {
    return <button>{name}</button>;
};

