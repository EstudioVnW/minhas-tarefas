import React from 'react';

class ListaDeTarefas extends React.Component {
  render(){
    return (
      <ul className='lista'>
        {this.props.listaDeTarefas.map(
        item => <li key={item.id} >{item.text} <span className='btn-apagar-item' onClick={this.props.apagarTarefa.bind(this, item.id)} >apagar</span></li>
        )}
      </ul>
    );
  }
}

export default ListaDeTarefas;