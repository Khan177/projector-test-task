import React from 'react';
import './Block7.css';
import leftArrow from '../../images/left.png';
import rightArrow from '../../images/right.png';
import Block7Card from '../Block7Card/Block7Card';


export default function Block(){
	return(
		<div className="block7">
			<div className="heading-arrows">
				<h1>
					Lorem ipsum dolor
				</h1>
				<div className="arrows">
					<img src={leftArrow} alt=""/>
					<img src={rightArrow} alt=""/>
				</div>
			</div>
			<div className="block7-cards">
				<div className="block7-cards-row">
					<Block7Card/>
					<Block7Card/>
					<Block7Card/>
					<Block7Card/>
				</div>
				<div className="block7-cards-row">
					<Block7Card/>
					<Block7Card/>
					<Block7Card/>
					<Block7Card/>
				</div>
			</div>
		</div>
	);
}