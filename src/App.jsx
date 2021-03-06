import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import "./App.css";


export default function App() {
    return (
        <div>
            <h1>Navbar</h1>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </div>
    );
}

function Layout() {
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
            <nav>
                <ul className="container_link">
                    <li>
                        <Link className="link" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/dashboard">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/nothing-here">
                            Nothing Here
                        </Link>
                    </li>
                </ul>
            </nav>

            <hr />

            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <Outlet />
        </div>
    );
}

function Home() {
    return (
        <div>
            <h1>
                <strong>HOME PAGE</strong>
            </h1>
            
            <div className="container">
                <section className="one">
                    <h1>first page</h1>
                </section>
                <section className="two">
                    <h1>Second page</h1>
                </section>
                <section className="three">
                    <h1>Third page</h1>
                </section>
                <section className="four">
                    <h1>Four page</h1>
                </section>
            </div>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}
