import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardWrapper = styled.div`
    width: 350px;
    background-color: #D3D3D3;
    padding: 10px;
`

const ClassImg = styled.img`
    height: 100%;
    width: 100%;
`

const classLink = {
    color: 'black', 
    textDecoration: 'none',
  }

/*
* This is a functional component that renders a class card.
* Class card is used on homepage, when teacher clicks on a class, he is redirecter to page which controlls the class
* grades and assignments.
*/

export const ClassCard = ({classroom}) => {
    return (
        <CardWrapper>
            <div className="image-container">
                <ClassImg src={ classroom.image } alt="" />
            </div>
            <div className="classCard-info">
                <Link style={ classLink } to={`/${classroom.id}`} > { classroom.name } </Link>
                <div className="classCard-description">
                    <p>{ classroom.description }</p>
                </div>
            </div>
        </CardWrapper>
    )
}

