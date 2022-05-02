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

	handleChange({ target }) {
		const { name, value } = target;
		this.setState({
			[name]: value,
		});
	}

	render() {
		return (
			<div>
				<h1>Estados e Componentes controlados</h1>
				<form className='form'>
					<label>
						Diga qual o seu Estado favorito:
						<textarea
							name='estadoFavorito'
							value={this.state.estadoFavorito}
							onChange={this.handleChange}
						/>
					</label>
					Qual a sua idade
					<input type='number' 
                        name='idade' 
                        value={this.state.idade}
                        onChange={this.handleChange} 
                    />
                </form>
			</div>
		);
	}
}

export default Form;
