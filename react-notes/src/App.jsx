import React from 'react'

import ExportComponent from './Phase-01 Foundations/03.Fundamental Module/02.components/02.exports'
import * as Components from "./Phase-01 Foundations/03.Fundamental Module/02.components"
import * as Jsx from "./Phase-01 Foundations/03.Fundamental Module/01.jsx-and-elements"
import * as Props from "./Phase-01 Foundations/03.Fundamental Module/03.props"
import * as Events from "./Phase-01 Foundations/03.Fundamental Module/04.events"
import * as States from "./Phase-01 Foundations/03.Fundamental Module/05.state"
import * as Hooks from "./hooks/01.useState"



const App = () => {
  return (
    <>
      {/* <Components.ComponentsExamples/> */}
      {/* <Components.ExportExamples /> */}
      {/* <ExportComponent/> */}
      {/* <Components.CompositionExamples/> */}

      {/* <Jsx.JsxBasics/> */}
      {/* <Jsx.Fragments/> */}
      {/* <Jsx.Styling /> */}

      {/* <Props.PropsBasics/> */}
      {/* <Props.ChildrenProps/> */}
      {/* <Props.PropDrilling/> */}

      {/* <Events.OnClickBasics/> */}
      {/* <Events.EVentObject /> */}
      {/* <Events.OnChangeInputs /> */}
      {/* <Events.PassingHandlers /> */}

      {/* <States.StateBasics/> */}

      {/* <Hooks.StateString /> */}
      {/* <Hooks.StateNumber /> */}
      {/* <Hooks.StateBoolean /> */}
      {/* <Hooks.StateArray/> */}
      <Hooks.StateObject/>

    </>
  )
}

export default App

