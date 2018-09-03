import React from 'react';

class FormCadTarefa extends React.Component {
  render(){
    return (
      <div className='form'>
        <input type='text' onChange={ this.props.handlerChangeTarefa } value={this.props.tarefa} /> 
        <button onClick={ this.props.cadastrarTarefa }>Enviar</button>
      </div>
    );
  }
}

export default FormCadTarefa;