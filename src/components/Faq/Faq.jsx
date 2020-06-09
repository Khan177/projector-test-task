import React,{useState} from 'react';
import './Faq.css';
import FaqCard from '../FaqCard/FaqCard';
import '../FaqCard/FaqCard.css';

export default function Faq(){
	return(
		<div className="faq">
			<h1>
				FAQ
			</h1>
			<div className="faq-cards">
				<div className="faq-cards-row">
					<FaqCard/>
					<FaqCard/>
					<FaqCard/>
				</div>
				<div className="faq-cards-row">
					<FaqCard/>
					<FaqCard/>
					<FaqCard/>
				</div>
			</div>
		</div>
	);
}