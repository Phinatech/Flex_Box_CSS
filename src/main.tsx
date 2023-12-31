import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from "react-router-dom"
import { element } from './Routes/MainRoutes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <RouterProvider router={element}/>
  </React.StrictMode>,
)
