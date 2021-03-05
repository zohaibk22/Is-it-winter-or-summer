import React from 'react'
import ReactDOM from 'react-dom'
import "./Stylesheet/SeasonDisplay.css"


const getSeason = (lat, month) => {

   if(month > 2 && month < 9){
       return lat > 0 ? 'Summer': 'Winter'
   } else {
       return lat > 0 ? 'Winter' : 'Summer'
   }

}

const seasonConfig = {
    Summer: {
        text: "Its soo nice and hot ou",
        iconName: "sun"
    },
    Winter: {
        text: "Burr, its Chilly",
        iconName: "snowflake"
    }
}
const SeasonDisplay = (props) => {
    // console.log(props.latitude)
    const season = getSeason(props.latitude, new Date().getMonth())
    // console.log(season)

    const { text, iconName } = seasonConfig[season]


    // const text = season === 'Winter' ? seasonConfig.winter.text : seasonConfig.summer.text
    // const icon = season === 'Winter' ? 'snowflake icon' : 'sun icon' 

    

  return (
      <>
      <div className={`season-display ${season}`}>
        <i class={`icon-left massive ${iconName} icon`}></i>
        <h1>{text}</h1>
        <i class={`icon-right massive ${iconName} icon`}></i>
        </div>
      </>
  )
}

export default SeasonDisplay