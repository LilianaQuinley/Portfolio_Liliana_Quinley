import "./works.scss";
import {SettingsCell, ShoppingCartTwoTone, EmojiTransportationTwoTone} from "@material-ui/icons";
import { useState } from 'react';


export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: '1',
            icon: <SettingsCell/>,
            title: 'Mobile Application',
            desc:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            img: 
                "https://rockcontent.com/wp-content/uploads/2021/02/stage-en-what-is-web-design.png.webp",
        },
        {
            id: '2',
            icon: <ShoppingCartTwoTone/>,
            title: 'Shopping Application',
            desc:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            img: 
                'https://image.shutterstock.com/image-illustration/3d-rendering-smartphone-online-shopping-600w-1896887080.jpg',
        },
        {
            id: '3',
            icon: <EmojiTransportationTwoTone/>,
            title: 'Transportation App',
            desc:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            img: 
                'https://image.shutterstock.com/image-vector/vector-low-poly-modern-urban-600w-767488036.jpg',
        },
    ]

    const handleClick = (way) => {
        way === 'left' 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) 
        : setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0);

    }

    return (
        <div className='works' id= 'works'>
            <div className="slider" style = {{transform: `translateX(-${currentSlide *100}vw)` }}>
                {data.map((d)=> ( 
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <div className="icon">
                                    {d.icon}
                                    </div>              
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>             
                </div>
                ))}
            </div>
           <img src="assets/arrow.png" className="arrow left" alt="" 
                onClick ={()=>handleClick('left')}/>
           <img src="assets/arrow.png" className="arrow right" alt=""
                onClick ={()=>handleClick()} />  
        </div>
    )
}
