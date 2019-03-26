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
                    <GridContainer className="Grid_custom">
                        <GridItem md={6} className="style_left">
                            <figure>
                                <Image src={require("assets/img/021.png")} fluid />;
                            </figure>
                        </GridItem>
                        <GridItem md={6} className="style_right">
                            <div className="title">
                                Hazefree Store คืออะไร
                            </div>
                            <div className="content">
                                สาเหตุหลักของหมอกควันคือการเผาไหม้บนหน้าดินซึ่งเป็นแหล่งกำเนิดควัน
                                 สาเหตุหลักในการเผาหน้าดิน คือ การเผาพื้นที่เกษตรกรรม
                                 เพื่อกำจัดวัชพืชและเป็นการเตรียมหน้าดินสำหรับการเพาะปลูกในฤดูฝนและการเผาป่าเพื่อหาของป่า
                                 ที่อาจทำให้เกิดการลุกลามของไฟป่าเป็นวงกว้างหากเป็นการเผาที่ขาดการควบคุม
                                 หรือจำกัดบริเวณ ดังนั้นการลดปัญหาหมอกควันอย่างยั่งยืน
                                 คือการลดพื้นที่การเผาด้วยการปรับเปลี่ยนรูปแบบการทำงานด้านเกษตรกรรม
                                 ด้วยการปรับเปลี่ยนเกษตรกรรมแบบพึ่งพาไฟ เป็นเกษตรกรรมที่ไม่พึ่งพาไฟ
                                 เช่น ป่าสร้างรายได้ นาแลกป่า หัตถกรรม การท่องเที่ยวชุมชนในรูปแบบของ homestay เป็นต้น
                                 ผลตอบแทนทางเศรษฐกิจ การเข้าถึงข้อมูลและหน่วยงานสนับสนุนการดำเนินงาน
                                 และความเชื่อมโยงกับตลาดยังเป็นปัจจัยที่จะทำให้อาชีพเสริมเหล่านี้ประสบความสำเร็จ
                                 ดังนั้น การเลือกนำอาชีพใดอาชีพหนึ่งไปปฏิบัติจำเป็นที่จะต้องคำนึงถึงปัจจัยเชิงพื้นที่ประกอบการตัดสินใจ
                                 อย่างไรก็ตาม โครงการประเทศไทยไร้หมอกควันได้รวบรวมอาชีพเสริมต่างๆ
                                  จากเกษตรกรตัวอย่างที่ประสบความสำเร็จในการดำเนินงาน กล่าวคือ
                                  ไม่เป็นหนี้สินในการประกอบอาชีพ มีรายได้ที่มั่นคง และที่สำคัญมีความพึงพอใจในการประกอบอาชีพ
                                  เพื่อสร้างแรงบันดาลใจให้กับเกษตรกรท่านอื่นๆ ที่กำลังมองหาทางเลือกในการประกอบอาชีพ
                                   เช่น การปลูกกาแฟ อะโวคาโด กุยช่ายขาว ฟักทองญี่ปุ่น พลับ เสาวรส เป็นต้น
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </BlockIndexStyled>
        )
    }
}
