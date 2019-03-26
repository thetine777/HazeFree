import React from 'react'
import { ButtonHeroStyled } from './styled'
import cx from "classnames";
import {
    Button
} from 'react-bootstrap'

export class ButtonHero extends React.Component {
    render() {
        const {
            theme_tea,
            theme_category,
            theme_addtocard,
            width,
            height,
            label,
            image
        } = this.props
        const customClass = cx({
            "theme_tea": theme_tea,
            'theme_category': theme_category,
            'theme_addtocard': theme_addtocard
        })
        return (
            <ButtonHeroStyled
                width={width}
                height={height}
            >
                <div className={customClass}>
                    <Button className="button_submit">
                        <img src={image} />
                        {label}
                    </Button>
                </div>
            </ButtonHeroStyled>
        )
    }
}