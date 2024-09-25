import styled from "styled-components";

const MainSide = props =>{
    return(
        <Container>
            <ShareBox>
                Share
            </ShareBox>
            <div>
                <img src="/images/user.svg" alt="" />
            </div>
        </Container>
    )
}

const Container = styled.div`
    grid-area: main;
`
const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: white;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgba(0 0 0 / 15% ), 0 0 0 rgb(0 0 0 /20%);

`

const ShareBox = styled.div`
    display: flex;
    flex-direction: column;
    color: #958b7b;
    margin: 0 0 8px;
    background: white; 
`
export default MainSide;