import React, { useState } from "react";
import "../Styles/App.css";
import axios from "axios";
import Widget from "../components/widget/Widget";
import Card from "../components/card/Card";
const jsURL = 'https://render-si4e.onrender.com/mmtData';

const Home = () => {
    const [results, setResults] = useState([]);
    const [category, setCategory] = useState([]);

    const makeAJAXcall = (category, searchQuery) => {
        let results = [];
        let categoryStates = [];
        let categoriesList = ["Buses", "Flights", "Hotels"];
        axios
            .get(jsURL)
            .then((response) => {
                if (category !== "All") {
                    var bmtServices = response.data[category];
                    bmtServices.forEach((elem) => {
                        if (elem.serviceName.toLowerCase().includes(searchQuery.toLowerCase())) {
                            results.push(elem);
                            categoryStates.push(category);
                        }
                    });
                    setResults(results);
                    setCategory(categoryStates);
                } else {
                    categoriesList.forEach((cate) => {
                        var bmtServices = response.data[cate];
                        bmtServices.forEach((elem) => {
                            if (elem.serviceName.toLowerCase().includes(searchQuery.toLowerCase())) {
                                results.push(elem);
                                categoryStates.push(cate);
                            }
                        });
                        setResults(results);
                        setCategory(categoryStates);
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleSubmit = () => {
        setResults([]);
        let category = document.querySelector("input[type=radio]:checked").value;
        let searchQuery = document.querySelector("#search").value;
        makeAJAXcall(category, searchQuery);
    };
    return (
        <React.Fragment>
            <header>
                <div className="grid1200">
                    <Widget onSubmit={handleSubmit} />
                </div>
            </header>
            <main>
                <div className="grid1200">
                    {results && results.map((res, index) => (
                        <Card
                            key={res.serviceID}
                            stype={category[index]}
                            sname={res.serviceName}
                            sloc={res.locations}
                            serviceID={res.serviceID}
                        />
                    ))}
                </div>
            </main>
        </React.Fragment>
    )
}

export default Home;