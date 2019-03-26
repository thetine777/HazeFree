import styled from "styled-components"

export const ButtonHeroStyled = styled.div.attrs({
    button_width: props => props.width,
    button_height: props => props.height
})`
/*===============================================
 Container 
===============================================*/
font-family: Kanit;
/*===============================================
Theme 
===============================================*/
    .theme_tea {
        .button_submit {
            font-family: Kanit;
            width: ${props => props.button_width};
            height: ${props => props.button_height};
            background: #C4A450;
            border: 1px solid #C4A450;
            border-radius: 20px;
            color: white;
            font-size: 32px;
            &:hover {
                background: 
                border: 1px solid
                transition: all 60ms ease-in;
            }
        }
    }
    .theme_category {
        .button_submit {
            font-family: Kanit;
            width: ${props => props.button_width};
            height: ${props => props.button_height};
            background: #ECEAE6;
            border: 1px solid #ECEAE6;
            border-radius: 47px;
            color: #7C6F52;
            font-size: 24px;
            &:hover {
                background: #7C6F52;
                border: 1px solid #7C6F52;
                transition: all 60ms ease-in;
                color: white;
            }
        }
    }
    .theme_addtocard {
        .button_submit {
            font-family: Kanit;
            width: ${props => props.button_width};
            height: ${props => props.button_height};
            background: #54A107;
            border: 1px solid #54A107;
            border-radius: 5px;
            color: white;
            font-size: 16px;
            padding: 7px 8px;
            &:hover {
                background:
                border: 1px solid
                transition: all 60ms ease-in;
                color: white;
            }
        }
    }
`