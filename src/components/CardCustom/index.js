import React from 'react'
import { CardCustomStyled } from './styled'
import cx from "classnames";
import {
    Card,
    CardDeck
} from 'react-bootstrap'
import {
    ButtonHero
} from 'components'

export class CardCustom extends React.Component {
    render() {
        const {
            theme_standard,
            title
        } = this.props
        const customClass = cx({
            "theme_standard": theme_standard
        })
        return (
            <CardCustomStyled>
                <div className={customClass}>
                    <CardDeck className="direction">
                        <Card className="content_size">
                            <Card.Img variant="top" src={require("assets/img/tomato.png")} className="image_custom" />
                            <Card.Body>
                                <Card.Title className="direction_title">
                                    <span className="title">{title}</span>
                                    <ButtonHero
                                        theme_addtocard
                                        label='เพื่อสินค้า'
                                        image={require("assets/img/icon/addcart.png")}
                                    />
                                </Card.Title>
                                <Card.Text className="direction_content">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </div>
            </CardCustomStyled>
        )
    }
}
