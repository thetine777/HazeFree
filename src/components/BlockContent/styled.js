import styled from "styled-components"

export const BlockContentStyled = styled.div`
/*===============================================
 Container 
===============================================*/
    font-family: kanit-regular;
/*===============================================
Theme 
===============================================*/
    .theme_black {
        padding-top: 80px;
        padding-bottom: 115px;
        background: black;
       .title {
            text-align: center;
            font-size: 44px;    
            color: #F3F3F5; 
       } 
       .content {
           padding: 0px 126px;
       }
    }
    .theme_cream {
        padding-top: 80px;
        padding-bottom: 115px;
        background: #EDDCA2;
       .title {
            text-align: center;
            font-size: 44px;    
            color: #5E4C24;
       } 
    }
    .theme_white {
        padding-top: 80px;
        padding-bottom: 115px;
        background: white;
    }
`