import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
	constructor() {
		super();

		this.handleChange = this.handleChange.bind(this);

		this.state = {
			estadoFavorito: '',
		};
	}

	handleChange(event) {
		this.setState({
			estadoFavorito: event.target.value,
		});
	}

	render() {
		return (
			<div>
				<h1>
				Estados e Componentes controlados
				</h1>
				<form className='form'>
					<label>
						Diga qual o seu Estado favorito:
						<textarea
							name='estadoFavorito'
							value={this.state.estadoFavorito}
							onChange={this.handleChange}
						/>
					</label>
					<input type='number' name='idade' />
					<input type='checkbox' name='vaiComparecer' />
				</form>
			</div>
		);
	}
}

export default Form;
