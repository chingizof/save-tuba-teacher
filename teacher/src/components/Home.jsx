// import { ForumView } from './ForumView';
import ClassCard from "./ClassCard";
import styled from 'styled-components';

const HomeWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px 20px 60px 60px;
    border: 1px solid black;
`

function Home({username}) {
    return(
        <HomeWrapper>
            <h1>Welcome {username}</h1>
            <ClassCard classname={"8 A grade"} />
        </HomeWrapper>
    );
}

export default Home;