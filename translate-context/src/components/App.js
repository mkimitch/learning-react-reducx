import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
	state = { language: 'english', color: 'primary' };

	onLanguageChange = language => {
		this.setState({ language });
	};

	render() {
		return (
			<div className='ui container'>
				<div>
					<span>Select a language: </span>
					<i
						className='flag us'
						onClick={() => this.onLanguageChange('english')}
					/>
					<i
						className='flag in'
						onClick={() => this.onLanguageChange('hindi')}
					/>
				</div>
				<ColorContext.Provider value={this.state.color}>
					<LanguageContext.Provider value={this.state.language}>
						<UserCreate />
					</LanguageContext.Provider>
				</ColorContext.Provider>
			</div>
		);
	}
}

export default App;
