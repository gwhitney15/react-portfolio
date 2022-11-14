import React from 'react';
import passwordgen from '../passwordgen.PNG';
import workday from "../work-day-scheduler.PNG"
export default function Portfolio() {
    return (<div className='vh-300'><h1 className='mt-5'>Portfolio</h1>
        <div className="container d-inline">
            <ul className='row mt-5'>
                <ul className="col" >
                    <a href="https://gwhitney15.github.io/Password-Generator/"><img className="h-75 w-40" src={passwordgen} alt='passwordgenerator'></img></a>
                </ul>
                <ul className="col" >
                    <a href="https://gwhitney15.github.io/Workday-Scheduler/"> <img className="h-75 w-40" src={workday} alt='passwordgenerator'></img></a>
                </ul>
                <div className='m-5'></div>
                <ul className="col">
                    <img className="h-75 w-40" src={passwordgen} alt='passwordgenerator'></img>
                </ul>
                <ul className="col" >
                    <img className="h-75 w-40" src={passwordgen} alt='passwordgenerator'></img>
                </ul>
            </ul></div>

    </div>)
}