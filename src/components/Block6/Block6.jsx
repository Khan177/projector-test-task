import React from 'react';
import Block6Card from '../Block6Card/Block6Card';
import './Block6.css';

export default function Block(){
	return(
		<div className="block6">
			<div className="block6heading">
				<h1>Lorem <br/> ipsum</h1>
			</div>
			<div className="block6cards">
				<Block6Card/>
				<Block6Card/>
				<Block6Card/>
				<Block6Card/>
			</div>
		</div>
	);
}