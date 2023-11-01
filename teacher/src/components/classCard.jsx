import React from 'react';
import styled from 'styled-components';


const CardWrapper = styled.div`
    width: 350px;
    height: 250px;
    background-color: #D3D3D3;
`

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