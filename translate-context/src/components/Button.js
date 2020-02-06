import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
	// Using a static context
	static contextType = LanguageContext;

	renderButton(color, text) {
		return <button className={`ui button ${color}`}>{text}</button>;
	}

	render() {
		console.log(this.context);
		// Obviously you wouldn't really want to hard code text like this, but I am for the purpose of learning the basics of React Context
		const text = this.context === 'english' ? 'Submit' : 'प्रस्तुत';
		return (
			// Using a context consumer
			<ColorContext.Consumer>
				{color => this.renderButton(color, text)}
			</ColorContext.Consumer>
		);
	}
}

export default Button;
