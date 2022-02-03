import React, {useEffect, useState} from "react"
import "./styles.css"
import data from "../assets/questGraph.json"

export default function Quests() {
    const [questIndex, setQuestIndex] = useState(0)

    const [currentQuest, setCurrentQuest] = useState({
        graphPosition: data.graph[questIndex],
        location: data.graph[questIndex].name,
        southExists: false,
        northExists: false,
        eastExists: false,
        westExists: false,
    })

    // check whether east/west/north/south exist in current quest location and update currentQuest state
    // use questIndex dependency to call effect whenever user moves to a new room 
    useEffect(() => {
        if ("west" in currentQuest.graphPosition) {
            console.log("West Exists")
            setCurrentQuest(prevQuestData => {
                return {
                    ...prevQuestData,
                    westExists: true
                }
            })
        } else {
            console.log("West Doesn't Exist")
            setCurrentQuest(prevQuestData => {
                return {
                    ...prevQuestData,
                    westExists: false
                }
            })
        }

        if ("east" in currentQuest.graphPosition) {
            console.log("East Exists")
            setCurrentQuest(prevQuestData => {
                return {
                    ...prevQuestData,
                    eastExists: true
                }
            })
        } else {
            console.log("East Doesn't Exist")
            setCurrentQuest(prevQuestData => {
                return {
                    ...prevQuestData,
                    eastExists: false
                }
            })
        }

        if ("north" in currentQuest.graphPosition) {
            console.log("North Exists")
            setCurrentQuest(prevQuestData => {
                return {
                    ...prevQuestData,
                    northExists: true
                }
            })
        } else {
            console.log("North Doesn't Exist")
            setCurrentQuest(prevQuestData => {
                return {
                    ...prevQuestData,
                    northExists: false
                }
            })
        }

        if ("south" in currentQuest.graphPosition) {
            console.log("South Exists")
            setCurrentQuest(prevQuestData => {
                return {
                    ...prevQuestData,
                    southExists: true
                }
            })
        } else {
            console.log("South Doesn't Exist")
            setCurrentQuest(prevQuestData => {
                return {
                    ...prevQuestData,
                    southExists: false
                }
            })
        }
    }, [questIndex])

    // update questIndex and currentQuest when direction button is clicked
    const handleDirectionChange = (event) => {
        console.log(event.target.id)
        const choice = event.target.id
        const newID = currentQuest.graphPosition[`${choice}`].id
        
        // console.log(newID)
        // console.log(data.graph[newID].name)

        setQuestIndex(newID)

        setCurrentQuest(prevQuestData => {
            return {
                ...prevQuestData,
                graphPosition: data.graph[newID],
                location:  data.graph[newID].name
            }
        })
    }


    return (
        <div className="quests-container">
            <p className="title">Quests</p>

            <p>Quest Area: {currentQuest.location}</p>
            {/* <p>current: {JSON.stringify(data.graph[0])}</p> */}

            

            <div className="direction-buttons-container"> 
                {currentQuest.westExists && 
                                <div>
                                    <button 
                                        id="west"
                                        className="direction-buttons"
                                        onClick={(event) => handleDirectionChange(event)}
                                    >
                                        West
                                    </button>
                                </div>
                            }

                            {currentQuest.eastExists && 
                                <div>
                                    <button 
                                        id="east"
                                        className="direction-buttons"
                                        onClick={(event) => handleDirectionChange(event)}
                                    >
                                        East
                                    </button>
                                </div>
                            }

                            {currentQuest.southExists && 
                                <div>
                                    <button 
                                        id="south"
                                        className="direction-buttons"
                                        onClick={(event) => handleDirectionChange(event)}
                                    >
                                        South
                                    </button>
                                </div>
                            }

                            {currentQuest.northExists && 
                                <div>
                                    <button 
                                        id="north"
                                        className="direction-buttons"
                                        onClick={(event) => handleDirectionChange(event)}
                                    >
                                        North
                                    </button>
                                </div>
                            }
            </div>
            
        </div>
    )
}