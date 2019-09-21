import React, { Component } from 'react';
import {GetMenudata} from '../../Store/Actions/MenuAction';
import { Link } from 'react-router-dom';
import './Menu.css';
import {connect} from 'react-redux';

class Menu extends Component {
    render(){
        console.log(this.props);
        const boxes = this.props.cards;

        return(
            <div className="wrapper">
                    <div className="col-md-12 text-center mt-4">
                        <h1>CUISINES</h1>
                    </div>

                    <div className="col-md-12">
                            <div className="row justify-content-around">
                            {
                                boxes && boxes.map(box=>{
                                    return(
                                        <div className="menu-cards text-center col-md-3 m-3" key={box.id}>
                                            <div className="card-img">
                                                <img src={"https://food-delight-api.herokuapp.com/"+ box.img.imgurl} alt="FoodList" />
                                            </div>
                                            <div className="card-title mt-3">
                                                <h3>{box.Name}</h3>
                                            </div>
                                            <p>{box.Desc}</p>
                                            <div className="box-btn">
                                                <Link to={'/'+box.id}><button className="btn btn-secondary">Load Menu</button></Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                                </div>
                            </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cards: state.cards.cards
    }
}


export default connect(mapStateToProps, GetMenudata)(Menu);