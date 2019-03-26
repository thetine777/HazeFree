import styled from "styled-components"
 
export const CardFarmerStyled = styled.div`
/*===============================================
 Container 
===============================================*/
    
/*===============================================
Theme 
===============================================*/
    .theme_standard {
        .direction {
            display: flex;
            justify-content: center;
            .content_size {
                max-width: 340px;
                .image_custom {
                    max-height: 500px;
                    max-width: 340px;
                }
                .direction_title {
                    padding: 16px 0px;
                    display: flex;
                    justify-content: space-between;
                    .title {
                        font-size: 24px;
                        color: white;
                        text-align: left;
                    }
                }
                .direction_content {
                    padding-bottom: 25px;
                    color: white;
                    text-decoration: underline;
                }
            }
        }
    }
`