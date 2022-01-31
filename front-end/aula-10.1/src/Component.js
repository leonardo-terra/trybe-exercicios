import React from 'react';

class InputText extends React.Component {
    render() {
        const name = 'Leonardo';
        const description = 'Oi, sou estudante da trybe.';
        return (
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>)
    } 

}

export default InputText;