import React from 'react'

import ExportComponent from './Phase-01 Foundations/03.Fundamental Module/02.components/02.exports'
import * as Components from "./Phase-01 Foundations/03.Fundamental Module/02.components"
import * as Jsx from "./Phase-01 Foundations/03.Fundamental Module/01.jsx-and-elements"
import * as Props from "./Phase-01 Foundations/03.Fundamental Module/03.props"
import * as Events from "./Phase-01 Foundations/03.Fundamental Module/04.events"
import * as States from "./Phase-01 Foundations/03.Fundamental Module/05.state"
import * as StateHooks from "./hooks/01.useState"
import * as Conditional from "./Phase-01 Foundations/03.Fundamental Module/06.conditional-rendering"
import * as List from "./Phase-01 Foundations/03.Fundamental Module/07.rendering-lists.jsx"
import * as Effects from "./Phase-01 Foundations/04.Intermediate Module/01.user-effect"
import * as UseEffectHooks  from "./hooks/02.useEffect"



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

      {/* <StateHooks.StateString /> */}
      {/* <StateHooks.StateNumber /> */}
      {/* <StateHooks.StateBoolean /> */}
      {/* <StateHooks.StateArray/> */}
      {/* <StateHooks.StateObject/> */}

      {/* <Conditional.Ternary/>
      <Conditional.LogicalAnd/> */}
      {/* <Conditional.EarlyReturn/> */}
      {/* <Conditional.MultipleConditions/> */}
      
      {/* <List.Keys/> */}
      {/* <Effects.UseEffect/> */}
      <UseEffectHooks.DataFetch/>
    </>
  )
}

export default App

