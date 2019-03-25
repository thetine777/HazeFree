import React from 'react'
import { BlockContentStyled } from './styled'
import cx from "classnames";

export class BlockContent extends React.Component {
    render() {
        const {
            theme_black,
            theme_cream,
            theme_white,
            title,
            content
        } = this.props
        const customClass = cx({
            "theme_black": theme_black,
            'theme_cream': theme_cream,
            'theme_white': theme_white
        })
        return (
            <BlockContentStyled>
                <div className={customClass}>
                    <div>
                        <h3 className="title">{title}</h3>
                    </div>
                    <div className="content">
                        {
                            content
                        }
                    </div>
                </div>
            </BlockContentStyled>
        )
    }
}
