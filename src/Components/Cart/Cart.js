import React, { Component } from 'react';
import './Cart.css';
import Swal from 'sweetalert2';

class Cart extends Component {
    state = {
        pros : []
    }

    componentDidMount(){
         this.props.info.map(item =>{
            //  let crum = this.state.pros.push(this.props.info[item]);
            let crum = [...this.state.pros, item];
            //  console.log(crum);
            this.setState(() => {
                return { pros: crum }
            });
        })
    }

    handleclick = (id) => {
        console.log(id);
        let cros = this.state.pros.filter(crod => {
            return crod.d !== id
        })
        this.setState({
            pros: cros
        })
    }

    handlesubmit = () => {
        Swal.fire({title:'Order Placed',text:'Dummy Website',type:'success'});
        this.setState({
            pros: []
        });
    }

    render() {
        console.log(this.props);
        console.log(this.state);
        return(
            this.state.pros.map(product=>{
                return(
                    <div>
                        <div className="d-flex justify-content-around py-4" key={product.d}>
                            <h1>{product.n}</h1>
                            <button onClick={() => { this.handleclick(product.d) }} className="btn btn-danger">Delete</button>
                        </div>
                        <button onClick={this.handlesubmit} className="btn btn-primary">Submit</button>
                    </div>
                )
        })
        )
    }
}

export default Cart;