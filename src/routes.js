import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Wizard from './components/Wizard/Wizard'
import Step1 from './components/Wizard/Step1/Step1'
import Step2 from './components/Wizard/Step2/Step2'
import Step3 from './components/Wizard/Step3/Step3'

export default(
  <Switch>
    <Route exact path='/' component={Dashboard}/>
    <Route path='/wizard' component={()=>(
      <Wizard>
        <Switch>
          <Route path='/wizard/step1' component={Step1} />
          <Route path='/wizard/step2' component={Step2} />
          <Route path='/wizard/step3' component={Step3} />
        </Switch>
      </Wizard>
    )} />
  </Switch>
)