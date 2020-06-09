import React from 'react';
import './Footer.css';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import m from '../../images/m.png';
import telegram from '../../images/telegram.png';
import twitch from '../../images/twitch.png';
import twitter from '../../images/twitter.png';
import vk from '../../images/vk.png';
import youtube from '../../images/youtube.png';


export default function Footer(){
	return(
		<footer>
			<div className="footer-text">
				<h1>Lorem <br/> ipsum dolor</h1>
			</div>
			<div className="footer-social">
				<div className="footer-social-row">
					<img src={telegram} alt=""/>
					<img src={twitter} alt=""/>
					<img src={youtube} alt=""/>
					<img src={instagram} alt=""/>
				</div>
				<div className="footer-social-row">
					<img src={facebook} alt=""/>
					<img src={m} alt=""/>
					<img src={twitch} alt=""/>
					<img src={vk} alt=""/>
				</div>
			</div>
		</footer>
	);
}