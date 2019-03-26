import styled from "styled-components"
 
export const CardCustomStyled = styled.div`
/*===============================================
 Container 
===============================================*/
font-family: Kanit;
/*===============================================
Theme 
===============================================*/
    .theme_standard {
        .direction {
            display: flex;
            justify-content: center;
            .content_size {
                max-width: 277.37px;
                .image_custom {
                    max-height: 277px;
                    max-width: 277.37px;
                }
                .direction_title {
                    padding: 16px 0px;
                    display: flex;
                    justify-content: space-between;
                    .title {
                        font-size: 24px;
                        color: #322509;
                    }
                }
                .direction_content {
                    padding-bottom: 25px;
                    color: #322509;
                }
            }
        }
    }
`