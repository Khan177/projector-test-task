import React,{useState} from 'react';
import icon from '../../images/aa.png';
import './FaqCard.css';

export default function FaqCard(){
	const [active,setActive] = useState(0);
	return(
		<div className="faq-card" onMouseOver={() => setActive(1)} onMouseLeave={() => setActive(0)}>
			<div className="faq-card-top">
				<div className="faq-card-icon">
					<img src={icon} alt=""/>
				</div>
				<div>
					<h3>Lorem ipsum</h3>
					<p>Lorem ipsum dolor sit amet,<br/> consectetur adipliscing el</p>
				</div>
			</div>
			<div className={active === 1 ? "active" : "blocked"}>
				<div className="abs-box">
					<br/>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id mauris massa. Phasellus ex sem, tristique ut arcu sit amet, molestie lacinia nunc. Nullam semper consequat dui, sed luctus est ultricies eget. Proin ac sagittis quam. In ut sem hendrerit, ornare justo sit amet, dictum libero. Vivamus at sollicitudin lectus. Pellentesque egestas metus vel fringilla blandit.
					</p>
				</div>
				<div className="empty">
					
				</div>
			</div>
		</div>
	);
}