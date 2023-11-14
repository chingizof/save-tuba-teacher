// import { ForumView } from './ForumView';
import { ClassCard } from "./ClassCard.jsx";
import styled from 'styled-components';

const HomeWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px 20px 60px 60px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 16px;
    box-sizing: border-box;
`



export const Home = ({username}) => {

    const sample_grade = {
        name: "8 A grade",
        description: "Environmental Science",
        image: "/classroom_pic.png",
    }

    return(
        <>
            <HomeWrapper>
                <ClassCard classroom={sample_grade}/>
                <ClassCard classroom={sample_grade}/>
                <ClassCard classroom={sample_grade}/>
                <ClassCard classroom={sample_grade}/>
                <ClassCard classroom={sample_grade}/>
                <ClassCard classroom={sample_grade}/>

            </HomeWrapper>
        </>

    );
}
