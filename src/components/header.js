// @flow

import * as React from 'react';

type HeaderProps = {
    brand: string,
    children?: React.Node
}

const Header = (props: HeaderProps) => (
        <div className="header">
            <p className="brand-label">
                {props.brand}
            </p>
            <p className="title">
                Find Your Movie
            </p>
            {props.children}
        </div>
);

export default Header;
