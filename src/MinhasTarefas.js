import React from 'react';

import FormCadTarefa from './FormCadTarefa';
import ListaDeTarefas from './ListaDeTarefas';

class MinhasTerefas extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tarefa: '',
      listaDeTarefas: []
    };
    this.handlerChangeTarefa = this.handlerChangeTarefa.bind(this);
    this.cadastrarTarefa = this.cadastrarTarefa.bind(this);
    this.apagarTarefa = this.apagarTarefa.bind(this);
  }
  handlerChangeTarefa(event){
    this.setState({ tarefa: event.target.value });
  }
  cadastrarTarefa(event){
    let tempListaDeTarefas = this.state.listaDeTarefas;
    tempListaDeTarefas.push({ text: this.state.tarefa, id: new Date().getTime() });
    this.setState({ listaDeTarefas: tempListaDeTarefas, tarefa: '' });
  }
  apagarTarefa(id){
    let tempListaDeTarefas = this.state.listaDeTarefas;
    let tarefaIndex = tempListaDeTarefas.findIndex(item => item.id === id);
    tempListaDeTarefas.splice(tarefaIndex, 1);
    this.setState({listaDeTarefas: tempListaDeTarefas });
  }
  render(){
    let style = {
      color: '#f00',
      textAlign: 'center'
    };
    let template = (
      <div className='container'>
      <h3 style={ style }>Minhas Tarefas</h3>
        
        <FormCadTarefa 
          handlerChangeTarefa={this.handlerChangeTarefa}
          tarefa={this.state.tarefa}
          cadastrarTarefa={this.cadastrarTarefa} />

        <ListaDeTarefas
          listaDeTarefas={this.state.listaDeTarefas}
          apagarTarefa={this.apagarTarefa} />

      </div>
    );
    return template;
  }
}

export default MinhasTerefas;