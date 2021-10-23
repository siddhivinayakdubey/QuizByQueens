import React, {useEffect, useState} from 'react';
import 'bulma/css/bulma.min.css';
import Image from './assets/bg7-01.jpg';
import logo from './assets/logo-02.png';
import axios from 'axios';


function HomeScreen() {

    const [questions, setQuestions] = useState("Loading");
    // @ts-ignore
    useEffect(() => {
        const url = "https://jservice.io/api/random";
        setTimeout(() => {
            axios.get(url).then((response: { data : any; }) => response.data)
                .then((data: {
                    }) => {
                    console.log(data)
                    // @ts-ignore
                    setQuestions(data[0].question)

                })
        }, 1000);
    }, []);

    return (

        <section className="hero is-danger is-fullheight " style={{
            backgroundImage: 'url('+Image+')',
            backgroundPosition:"center",
            backgroundSize:'cover', alignContent:'center'
        }}>

            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" style={{
                                backgroundImage: 'url('+logo+')',backgroundSize:'cover',
                                alignContent:'center',
                                height:"60px",
                                width:"150px"
                            }} href="../">

                            </a>
                            <span className="navbar-burger burger" data-target="navbarMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        </div>
                        <div id="navbarMenu" className="navbar-menu">
                            <div className="navbar-end">
                            <span className="navbar-item">
                                <a className="button is-white is-outlined"style={{
                                    backgroundColor:"#DBF1EE"
                                }} href="https://www.queensenglish.co">
                                    <span className="icon">
                                        <i className="fa fa-home"></i>
                                    </span>
                                    <span style={{
                                        color:"black",
                                        textAlign:"center"
                                    }}>Website</span>
                                </a>
                            </span>
                                <span className="navbar-item" style={{textAlign:"center"}}>
                                <a className="button is-white is-outlined" style={{
                                    backgroundColor:"#DBF1EE"
                                }}href="https://www.facebook.com/TheQueensEnglishUK/">
                                    <span className="icon">
                                        <i className="fa fa-superpowers"></i>
                                    </span>
                                    <span style={{
                                        color:"black",
                                        textAlign:"center"
                                    }}>Facebook</span>
                                </a>
                            </span>
                                <span className="navbar-item">
                                <a className="button is-white is-outlined" style={{
                                    backgroundColor:"#DBF1EE"
                                }}href="#">
                                    <span className="icon">
                                        <i className="fa fa-book"></i>
                                    </span>
                                    <span style={{
                                        color:"black",
                                        textAlign:"center"
                                    }}>LinkedIn</span>
                                </a>
                            </span>
                                <span className="navbar-item">
                                <a className="button is-white is-outlined" style={{
                                    backgroundColor:"#DBF1EE"
                                }}
                                   href="https://znap.link/siddhivinayakdubey">
                                    <span className="icon">
                                        <i className="fa fa-github"></i>
                                    </span>
                                    <span style={{
                                        color:"black",
                                        textAlign:"center"
                                    }}>Meet Sid</span>
                                </a>
                            </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="hero-body">

                    <div className="container has-text-centered ">

                            <div className="column is-6 is-offset-3">
                                <div className="box" style={{
                                    backgroundColor:'#F8D362'
                                }}>
                                    <h1 className="title" style={{
                                        color:"black"
                                    }}>
                                        Question
                                    </h1>
                                    <h2 className="subtitle" style={{
                                        color:"darkgreen"
                                    }}>
                                        {questions}
                                    </h2>
                                </div>

                                <div className="box">
                                    <div className="field is-grouped">
                                        <p className="control is-expanded">
                                            <input className="input" type="text" placeholder="Type your answer here"
                                                // value={userInput}
                                                // onChange={e => setUserInput(userInput.push(e.target.value))}
                                            />
                                        </p>
                                        <p className="control">
                                            <button className="button" style={{
                                                color:"white",
                                                backgroundColor:"#225163"
                                            }}
                                            //TODO: add on click function here
                                            >
                                                Submit
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>


                    </div>

            </div>

        </section>
    )
}

export default HomeScreen;