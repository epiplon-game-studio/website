import React from 'react'

import "./PageTitleComponent.scss"

export default function PageTitleComponent({ title }) {
    return (
        <>
            <h1 className="pageTitle">{title}</h1>
        </>
    )
}
