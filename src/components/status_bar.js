import React, { Component } from 'react'
import '../styles/common.css'

type Props = {
    title: string
}

const StatusBar = ({title}: Props) => {
    return (
        <div className="status-bar">
            <div className="row">
                <span className="col-6">{title}</span>
                <span className="col-2">Sort by</span>
                <span className="col-2">release date</span>
                <span className="col-2">rating</span>
            </div>
        </div>
    )
}

export default StatusBar
