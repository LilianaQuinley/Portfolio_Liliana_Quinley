import './testimonials.scss'
import {YouTube, AccountBalanceRounded, ChildCareOutlined} from '@material-ui/icons'
import { Accordion } from '@material-ui/core'

export default function Testimonials() {

    const data = [
        {
            id: 1,
            name: 'Carlos Cuellar',
            title: "Co-Founder of QueBerraquera LLC",
            img:'assets/CarlosJ1.jpeg',
            icon: <YouTube/>,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur quas libero consequatur, quisquam animi tempore nulla provident!',
        },
        {
            id: 2,
            name: 'Carolina Cuellar',
            title: "CEO of Caro Disenos and Deco",
            img:'assets/DianaC.jpg',
            icon: <AccountBalanceRounded/>,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur quas libero consequatur',
            featured: true,
        },
        {
            id: 3,
            name: 'Ines Pacasira',
            title: "Mother of the Year",
            img:'assets/Ines.jpeg',
            icon: <ChildCareOutlined/>,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        }

    ]

    return (
        <div className='testimonials' id='testimonials'>
            <h1>Testimonials</h1>
            <div className="container">
            {data.map((d)=>(  
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/arrowRight.png" className="left" alt="" />
                        <img src={d.img} className = 'photo'alt="" />
                        <div className ='icon'>
                            {d.icon}
                        </div>
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>))}
            </div>
            
        </div>
    )
}
