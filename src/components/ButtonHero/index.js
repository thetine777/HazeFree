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
            width,
            height,
            label,
        } = this.props
        const customClass = cx({
            "theme_tea": theme_tea,
            'theme_category': theme_category
        })
        return (
            <ButtonHeroStyled
                width={width}
                height={height}
            >
                <div className={customClass}>
                    <Button className="button_submit">{label}</Button>
                </div>
            </ButtonHeroStyled>
        )
    }
}