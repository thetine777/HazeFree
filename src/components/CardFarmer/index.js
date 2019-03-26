import React from 'react'
import { CardFarmerStyled } from './styled'
import cx from "classnames";
import {
    Card,
    CardDeck,
} from 'react-bootstrap'
import {
    ButtonHero
} from 'components'
import NavLink from 'react-bootstrap/NavLink';

export class CardFarmer extends React.Component {
    render() {
        const {
            theme_standard,
            image,
            name,
            job
        } = this.props
        const customClass = cx({
            "theme_standard": theme_standard
        })
        return (
            <CardFarmerStyled>
                <div className={customClass}>
                    <CardDeck className="direction">
                        <Card className="content_size">
                            <Card.Img variant="top" src={image} className="image_custom" />
                            <Card.Body>
                                <Card.Title className="direction_title">
                                    <span>
                                        <div className="title">{name}</div>
                                        <div className="title">{job}</div>
                                    </span>
                                    <ButtonHero
                                        theme_addtocard
                                        label='เพื่อสินค้า'
                                        image={require("assets/img/icon/addcart.png")}
                                    />
                                </Card.Title>
                                <Card.Text className="direction_content">
                                    <NavLink>
                                        ดูข้อมูลเพิ่มเติม
                                    </NavLink>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </div>
            </CardFarmerStyled>
        )
    }
}
