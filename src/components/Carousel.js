import React from 'react';

import Card from '../components/Card';


import bot from '../assets/images/FS2BOT.png';
import wongwong from '../assets/images/WongWong.png';
import PHPMYSQL from '../assets/images/PHPMYSQL.png';
import MONGODB from '../assets/images/MongoDB.png';
import themask from '../assets/images/themask.png';
import { Container,Row } from 'react-bootstrap';

class Carousel extends React.Component {

    constructor(props){
        super(props);

        this.state={
            items:[
                {
                    id: 0,
                    title: 'Cocktail Recipe Finder',
                    subTitle: 'Written in PHP and MySQL',
                    description: 'A program written with PHP and Ajax, linked to a MySQL database. It takes in user ingredients, and outputs recipes that uses the user inputted ingredients',
                    imgSrc: PHPMYSQL,
                    demoLink: 'https://swiss1.hunter.cuny.edu/students/dev7/',
                    link: 'https://github.com/matter13311/PHP-MYSQL-PROJECT',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Cocktail Recipe Finder - Python',
                    subTitle: 'Written in Python-Flask and MySQL',
                    description: 'This program is similar to the PHP Cocktail Recipe Finder, except it is coded in Python using Flask framework. It has the same MySQL table structure as the previous one.',
                    imgSrc: PHPMYSQL,
                    link: 'https://github.com/matter13311/Cocktail_Finder',
                    selected: false
                },
                {
                    id: 2,
                    title: 'CRUD MongoDB Project',
                    subTitle: 'Written in Node.js and MongoDB',
                    description: 'A project written in Node.js and connects to a Mongo database. It allows users to perform CRUD operations on the MongoDB.',
                    imgSrc: MONGODB,
                    link: 'https://github.com/matter13311/NodeJs-MongoDB-project',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Python Auto AFK',
                    subTitle: 'Made with Python, PyautoGUI and OpenCV',
                    description: 'A program written in Python. It was made for a game to automate matchmaking. It scans the users screen for a specific picture, and then moves the cursor to automatically click it.',
                    imgSrc: bot,
                    link: 'https://github.com/matter13311/FS2AutoAFK',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Wong Wong Noodle Soup',
                    subTitle: 'Project website for noodle Restaurant',
                    description: 'A project website for one of my favorite restaurants. It is made with vanilla HTML,CSS and Javascript. This website is not deployed and is just a mockup. ',
                    imgSrc: wongwong,
                    demoLink: 'https://fmundergrad.hunter.cuny.edu/~Liangm/medp285/WongWong/index.html',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Sprite animation',
                    subTitle: 'Javascript and sprite sheet project',
                    description: 'A simple project that involves sprite sheets. It uses sprite sheets from the Mask, and allows for some specific actions. It is coded in javascript.',
                    imgSrc: themask,
                    link: 'https://github.com/matter13311/The-Mask-animation-sprite',
                    demoLink: 'https://fmundergrad.hunter.cuny.edu/~Liangm/assignment3/index.html',
                    selected: false
                },

            ]
        }
    }



    makeItems = (items) =>{
        return items.map(item =>{
            return <Card item={item} key={item.id}/>
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );

    }

}


export default Carousel;