import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as sourseActions from '../actions/sourseActions'
import ButtonCom from '../components/ButtonCom'
import ComboBox from '../components/ComboBox'
import NumOvnCom from '../components/NumOvnCom'
import SumCom from '../components/SumCom'
import SoursesList  from '../components/SoursesList'
import styles from '../css/style.css'

const MainApp = ({sourses,ovn,sum,actions}) => (
  <div>   
  <NumOvnCom ovn={ovn} actions={actions}/>
  <div className={styles.line}/>
  <h1>Введите общую сумму взноса</h1>
  <SumCom sum={sum} actions={actions}/>
  <div className={styles.line}/>
  <SoursesList sourses={sourses} actions={actions}/>
  <div className={styles.line}/>
  <ButtonCom AddSourse={actions.AddSourse}/>  
  </div>
)

MainApp.propTypes = {
  sourses: PropTypes.array.isRequired,
  ovn: PropTypes.number.isRequired,
  sum : PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  sourses: state.sourses,
   ovn: state.ovn,
    sum: state.sum,
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(sourseActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainApp)