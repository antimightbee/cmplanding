import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FrontPage from '../pages/FrontPage/FrontPage'
import Terms from "../pages/Terms/Terms"

const MainRouter = () => {
    return (
            <Routes>
                <Route path='/' element={<FrontPage/>}/>
                <Route path='/terms' element={<Terms/>}/>
            </Routes>
    )
}

export default MainRouter