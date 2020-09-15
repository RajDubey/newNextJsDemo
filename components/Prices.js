class Prices extends React.Component {
    state = {
        currency: 'USD'
    }

    render (props) {

        let list = '';
        if(this.state.currency === 'USD'){
            list = <li class="list-group-item">
            Bitcoin rate for {this.props.bpi.bpi.USD.description} 
            :<span class="badge badge-primary">{this.props.bpi.bpi.USD.code}</span> <strong>
                {this.props.bpi.bpi.USD.rate}
            </strong>
        </li>
        } else if (this.state.currency === 'GBP') {
            list = <li class="list-group-item">
            Bitcoin rate for {this.props.bpi.bpi.GBP.description} 
            :<span class="badge badge-primary">{this.props.bpi.bpi.GBP.code}</span> <strong>
                {this.props.bpi.bpi.GBP.rate}
            </strong>
        </li>
        } else if (this.state.currency === 'EUR'){
            list = <li class="list-group-item">
            Bitcoin rate for {this.props.bpi.bpi.EUR.description} 
            :<span class="badge badge-primary">{this.props.bpi.bpi.EUR.code}</span> <strong>
                {this.props.bpi.bpi.EUR.rate}
            </strong>
        </li>
        }

        return (
        <div>
           <ul class="list-group">
                {list}
           </ul>

           <br/>
           <select onChange= {e => this.setState({currency: e.target.value})}
           class="form-control">
               <option value="USD">USD</option>
               <option value="GBP">GBP</option>
               <option value="EUR">EUR</option>
           </select>
        </div>);
    }
}

export default Prices;