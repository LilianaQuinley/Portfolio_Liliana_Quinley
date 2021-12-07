import "./works.scss"

export default function Works() {
    return (
        <div className='works' id= 'works'>
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/mobile.jpeg" alt="" />
                                </div>
                                <h2>Tile 1</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="https://rockcontent.com/wp-content/uploads/2021/02/stage-en-what-is-web-design.png.webp" alt="" />

                        </div>
                    </div>
                </div>
            </div>
           <img src="assets/arrow.png" className="arrow left" alt="" />
           <img src="assets/arrow.png" className="arrow right" alt="" />  
        </div>
    )
}
