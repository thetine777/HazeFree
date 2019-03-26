import React from 'react'
import { LogoBrandStyled } from './styled'
import cx from "classnames";

export class LogoBrand extends React.Component {
    render() {
        const {
            theme_standard,
            brand
        } = this.props
        const customClass = cx({
            "theme_standard": theme_standard
        })
        return (
            <LogoBrandStyled>
                <div className={customClass}>
                    <div className="logo_style">
                        <img  src={brand} />
                    </div>
                </div>
            </LogoBrandStyled>
        )
    }
}
