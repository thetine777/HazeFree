import React from 'react'
import { AaPlatformStyled } from './styled'
import cx from "classnames";

export class AaPlatform extends React.Component {
    render() {
        const { theme_standard } = this.props
        const customClass = cx({
            "theme_standard": theme_standard
        })
        return (
            <AaPlatformStyled>
                <div className={customClass}>
                    test
                </div>
            </AaPlatformStyled>
        )
    }
}
