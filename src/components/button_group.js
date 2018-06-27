// @flow

import React from 'react';
import Button from './button';

export type ButtonRecord = {
    id: string,
    title: string
}

type Props = {
    title: string,
    buttons: Array<ButtonRecord>,
    selectedButtonId: string,
    onClick?: (id: any) => void
}

const ButtonGroup = ({
  title, buttons, selectedButtonId, onClick,
}: Props) => {
  const recordToButton = ({ id, title }: ButtonRecord) => (
            <Button
                key={id}
                title={title}
                selected={id === selectedButtonId}
                onClick={e => onClick && onClick(id) }
            />
  );

  return (
        <div className="button-group">
            <span>{title}</span>
            {buttons.map(recordToButton)}
        </div>
  );
};

export default ButtonGroup;
