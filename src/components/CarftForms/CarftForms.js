import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import classes from './CarftFroms.module.css';
import CraftItems from './CarftItems/CarftItems';
import CraftDes from './CraftDes/CarftDes';
import * as actionCreator from '../../store/actionCreator';

const CarftFroms = (props) => {

    useEffect( () => {
        props.getCarftData()
    },[props]) 

    
    return (
        <div className={classes.Background}>
            <div className={classes.Container}>
                <CraftDes 
                    Title={props.CarftForm ? props.CarftForm.carftForm.title : ''}
                    Paragraph={props.CarftForm ? props.CarftForm.carftForm.para : ''}/>
                <CraftItems 
                     Items={props.CarftForm ? props.CarftForm.carftForm.items : ''}/>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return  {
        CarftForm: state.CraftForms,
    }
  }
  
const mapDispatchToProps = dispatch => {
    return  {
        getCarftData : () =>  dispatch(actionCreator.getCarftData()),
    }
}
  

export default connect(mapStateToProps,mapDispatchToProps)(CarftFroms)