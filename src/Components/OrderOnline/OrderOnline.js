import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cart from '../Cart/Cart';
import './OrderOnline.css';

export class OrderOnline extends Component {
    state = {
        id: null,
        product: [],
        proid : []
    }
    componentDidMount(){
        console.log(this.props);
        let id = this.props.match.params.id;
        this.setState(()=>{
           return {
               ...this.state,
               id : id
            }
        });
    }

    render() {
        console.log(this.props);
        let value = this.state.id;
        return (
            <div>
                {
                    this.props.items.map((ite)=>{
                    if(value === ite.id){
                        return (
                    <div className="col-md-12 surrounder">
                        <div className="row">
                            <div className="col-md-8" key={ite.id}>{ite.Category.map(i=>{
                                return(
                                            <div key={i._id} className="col-md-12 holds">
                                                <div className="row">
                                                    <div className="col-md-5 left-pane">
                                                <img src={'https://food-delight-api.herokuapp.com/' + i.cat_img.url} alt="img" />
                                                    </div>
                                                    <div className="col-md-7 right-pane">
                                                        <span className="box-head"><h1>{i.Cate_name}</h1></span>
                                                        <p>{'Rs.'+i.price}</p>
                                                    <button onClick={() => 
                                                    {
                                                    let item = [...this.state.product, { n: i.Cate_name, p: i.price, d:i._id }];
                                                    this.setState({
                                                        product: item,
                                                    })
                                                    }
                                                    } className="btn btn-success">Add To Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                )
                            })}
                            </div>
                            <div className="cart col-md-4 text-center">
                                <Cart key={Math.random(0,10)} info={this.state.product}/>
                            </div>
                        </div>
                    </div>
                        )
                    }
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        items: state.cards.cards
    })
}


export default connect(mapStateToProps)(OrderOnline);
