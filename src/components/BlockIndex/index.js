import React from 'react'
import { BlockIndexStyled } from './styled'
import cx from "classnames";
import {
    Image
} from 'react-bootstrap'

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

export class BlockIndex extends React.Component {
    render() {
        const { theme_standard } = this.props
        const customClass = cx({
            "theme_standard": theme_standard
        })
        return (
            <BlockIndexStyled>
                <div className={customClass}>
                    <GridContainer>
                        <GridItem md={6}  >
                            <figure>
                                <Image src={require("assets/img/021.png")} fluid />;
                            </figure>
                        </GridItem>
                        <GridItem md={6} className="style_right">
                            <div>
                                Hazefree Store คืออะไร
                            </div>
                            <div>
                                content
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </BlockIndexStyled>
        )
    }
}
