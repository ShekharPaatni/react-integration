/**
 * Created by chandra on 21/9/17.
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class Node extends Component {
    constructor(props){
        super(props);
        this.state = {
            description : ''
        }
    }
    componentWillMount(){
        fetch(`http://mig.com/node/1?_format=json`,
            {
                method: 'get'
            }).then(res => {
            return res.json()
            }).then((response) => {
            this.setState({description: response.body[0].value})
        })
    }
    render(){
      console.log('hello');
        return (
            <div>
    <h1> Hello World</h1>
            {this.state.description}
             </div>
        )
    }
}
console.log('hello');
ReactDOM.render(<Node />, document.getElementById('cont'));