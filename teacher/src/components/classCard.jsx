

function classCard(classname) {
    return (
        <div className="classCard">
            <div className="image-container">
                <img src={classname.image} alt="" />
            </div>
            <div className="classCard-info">
                <h3>{classname.name}</h3>
                <div className="classCard-description">
                    <p>{classname.description}</p>
                </div>
            </div>
        </div>
    )
}