import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import './index.scss';
import NavBar from '../../common/components/navbar';


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={carBrand:"Audi",carType:"",fullName:""};
    }
    handleChange(event){
        this.setState({
            carBrand:event.target.value
        })
    }
    handleTypeChange(event){
        this.setState({
            carType:event.target.value
        })
    }
    /*findCarType(carData){
        for (var i=0; i<carData.size(); i++ ){
            if(carItem.carBrand == this.state.carBrand) {
                return (<option key={carItem} value={carItem}>{carItem}</option>);
            }
        }
        return  null;
    }*/
  render() {
      const carData=[
          {
              carBrand:'Audi',
              carType:['A1','X1','Z1']
          },
          {
              carBrand:'Volvo',
              carType:['M1','C1','W1']
          },
          {
              carBrand:'Charade',
              carType:['A1','B1','D1']
          }
        ];
      //const tmpData = this.findCarType(carData);
      const brandData = carData.map((carItem) =>
          <option key={carItem.carBrand} value={carItem.carBrand}>
              {carItem.carBrand}
          </option>
      );
    return (
      <div className="SignUp">
          <NavBar hasLoggedIn="false"/>
          <div className="InputBox">
              <div className="InputText"><h3>品牌</h3></div>
              <div className="InputSelect"><select onChange={this.handleChange} placeholder="请选择">
                {brandData}
              </select></div>
          </div>
          <div className="InputBox">
              <div className="InputText"><h3>车型</h3></div>
              <div className="InputSelect"><select onChange={this.handleTypeChange} placeholder="请选择">
              {
                carData.forEach((carItem) => {
                  if(carItem.carBrand === this.state.carBrand){
                    carItem.carType.forEach((typeItem) => {
                      return(<option value={typeItem}>
                        {typeItem}
                      </option>)
                    })
                }})
              }
              </select></div>
          </div>
          <div className="InputBox">
              <div className="InputText"><h3>姓名</h3></div>
              <div className="InputName"><input placeholder="请输入真实姓名" type="text"/></div>
          </div>
          <div className="Submit" href="/login/a"><h2>注册</h2></div>
      </div>
    );
  }
}

