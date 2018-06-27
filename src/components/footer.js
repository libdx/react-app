import React, { Component } from 'react';

type Props = {
    brand: string
}

const Footer = ({ brand }: Props) => (
        <div className="footer">
            <span className="brand-label">{brand}</span>
        </div>
);

export default Footer;
