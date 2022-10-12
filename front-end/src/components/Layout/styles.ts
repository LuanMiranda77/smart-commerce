import styled from "styled-components";

/** grid siglas
*Layout
*MH = MainHeader
*AS = Aside
*CT = Content
*/
export const Grid  = styled.div`

    display: grid;
    /* grid-template-columns: 200px auto; */
    grid-template-rows: 50px auto;
    transition: grid-template-columns 3s;
    grid-template-areas:
    'MH MH'
    'AS CT';

    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;



@media screen and (max-width: 40em) {
    //adicionar o stylo responsivo
    grid-template-columns: 0px auto;
}

`;

