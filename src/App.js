import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Com from './Com/Com.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      pep:[
        {name:"reza", age:"....",id:"a1"},
        {name:"kian", age:"....",id:"a2"},
        {name:"ali", age:"....",id:"a3"}
      ],
      tr:true
    };
  }
 
  changea=(event,id)=>{
    const x=this.state.pep.findIndex(c=>{return c.id===id});
    const y={
      ...this.state.pep[x]
    }
    y.age=event.target.value;
    const pep1=[
      ...this.state.pep
    ]
    pep1[x]=y;
    this.setState({pep:pep1})
  }

  Deletbox(index){
    const x=this.state.pep;
    x.splice(index,1);
    this.setState(
     { pep:x}
    )

  }
  onclk(){
    const x=this.state.tr;
    this.setState({tr:!x})
  }
  
  render(){
             
   return (
       <div className="App">
         {this.state.tr==true?
          <div>
         {this.state.pep.map((x,index)=>{return <Com name={x.name} age={x.age}  changeage={(event)=>this.changea(event,x.id)} delet={()=>this.Deletbox(index)}>DELET</Com>})}
         </div>:null
         }
         <button onClick={this.onclk} id="btn1">click</button>
       </div>
     );
  }
}

export default App;
