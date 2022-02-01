import React from 'react';

class Form extends React.Component {
	constructor() {
		super();
		
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);

        this.state = {
			aboutYou: '',
            name: '',
		};
	}

    handleTextAreaChange (event) {
        this.setState({aboutYou: event.target.value})
    }

	render() {
		return (
			<div>
				<label>
					About you:
					<input name='aboutYou' 
                        value = {this.state.aboutYou} 
                        type='text' 
                        onChange={this.handleTextAreaChange}>
                    </input>
				</label>
                <label>
					Nome:
					<input name='name' type='text'></input>
				</label>
			</div>
		);
	}
}

export default Form;
