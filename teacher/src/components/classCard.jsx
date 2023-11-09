import React from 'react';
import styled from 'styled-components';


const CardWrapper = styled.div`
    width: 350px;
    height: 250px;
    background-color: #D3D3D3;
`
/*
* This is a functional component that renders a class card.
* Class card is used on homepage, when teacher clicks on a class, he is redirecter to page which controlls the class
* grades and assignments.
*/

function ClassCard({classname}) { 
    return (
        <CardWrapper>
            <div className="image-container">
                <img src={classname.image} alt="" />
            </div>
            <div className="classCard-info">
                <h3>{classname.name}</h3>
                <div className="classCard-description">
                    <p>{classname.description}</p>
                </div>
            </div>
        </CardWrapper>
    )
}

export default ClassCard;