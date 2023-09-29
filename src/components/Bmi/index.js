import React, { useEffect, useState } from 'react'
import './index.css'

//BMI= body mass index

const Bim = () => {
    const [Height, setHight] = useState(175)
    const [Weight, setWeight] = useState(60)
    const [BmiResult, setBmiResult] = useState(null)

    useEffect(() =>{
        const heightInMeters = Height/100
        const Bmi = Weight/(heightInMeters*heightInMeters)
        setBmiResult(Bmi.toFixed(2));
    })

    const onDecrease = ()=>{
        setHight(Height - 1)
    }

    const onIncrease = ()=>{
        setHight(Height + 1)
    }

    const onDecreaseBtn = ()=>{
        setWeight(Weight - 1)
    }

    const onIncreaseBtn = ()=>{
        setWeight(Weight + 1)
    }

  return (
    <div className='bg-container'>
        <h1 className='title'>BMI CALCULATOR</h1>
        <div className='weight-containar'>
            <div className='weight-card'>
                <div className='weight-card-details'>
                    <p className='weight-details'>Underweight</p>
                    <p className='under-weight-value'>18.5</p>
                </div>
                <div className='weight-card-details'>
                    <p className='weight-details'>Normal</p>
                    <p className='under-weight-value'>18.5-24.9</p>
                </div>
                <div className='weight-card-details'>
                    <p className='weight-details'>Overweight</p>
                    <p className='under-weight-value'>25-29.9</p>
                </div>
                <div className='weight-card-details'>
                    <p className='weight-details'>Obese</p>
                    <p className='under-weight-value'>30-34.9</p>
                </div>
                <div className='weight-card-details'>
                    <p className='weight-details'>Extremely Obese</p>
                    <p className='under-weight-value'> 35</p>
                </div>
            </div>
            <div className='weight-graph'>
                <div className='box-1'></div>
                <div className='box-2'></div>
                <div className='box-3'></div>
                <div className='box-4'></div>
                <div className='box-5'></div>
            </div>
        </div>
        <div className='weight-height-display-container'>
            <div className='multi-cards-container'>
                <div className='height-card'>
                    <p className='height-tittle'>Height</p>
                    <h1 className='height-value'>{Height}<span className='base-value'>cms</span></h1>
                    <div>
                        <button className='btn' onClick={onDecrease}>-</button>
                        <button className='btn' onClick={onIncrease}>+</button>
                    </div>
                </div>
                <div className='height-card weight-card-container'>
                    <p className='height-tittle'>weight</p>
                    <h1 className='height-value'>{Weight}<span className='base-value'>kgs</span></h1>
                    <div>
                        <button className='btn' onClick={onDecreaseBtn}>-</button>
                        <button className='btn' onClick={onIncreaseBtn}>+</button>
                    </div>
                </div>
            </div>
            <h1 className='bmi-result'>BMI : {BmiResult !== null ? BmiResult : 'Calculate BMI'}</h1>
        </div>
    </div>
  )
}

export default Bim
