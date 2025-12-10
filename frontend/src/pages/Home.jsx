"use client";
import { React, useState } from 'react'
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/Home.css';
import BannerImage from '../assets/background-image.png';
function Home() {
    const position = [43.255203, -79.84382];

    const openGoogleMaps = () => {
        const url = `https://www.google.com/maps?q=${position[0]},${position[1]}`;
        window.open(url, '_blank'); // opens in a new tab
    };
    return (
        <div>
            <div style={{ backgroundImage: `url(${BannerImage})`, color: 'white', paddingTop: '10px', paddingLeft: '10%' }}>
                <div className="headerContainer" >
                    <h1>Sites by Colin</h1>
                    <p>Building the future of your buisiness with an online presence. </p>
                    <h4>Dial +13653362629 or clik the button below to make a quote</h4>
                    <Link to="contact">
                        <button style={{ backgroundColor: "rgba(129, 127, 121, 1)" }}>contact now</button>
                    </Link>

                </div>
            </div>

            <br /><br /><br /><br /><br />
            <div style={{ backgroundColor: "rgba(129, 127, 121, 1)", color: 'white', paddingTop: '10px', paddingLeft: '10%', boxShadow: "0px 4px 10px rgba(0,0,0,0.3)" }}>
                <div className="Services" >
                    <h1>Services</h1>
                    <table style={{ width: "95%", textAlign: "left", borderCollapse: "collapse" }}>
                        <tbody>
                            <tr>
                                <td>
                                    <div><h2>Website Maintenance & Support:</h2>
                                        <ul>
                                            <li>Ongoing updates, bug fixes, and performance monitoring to keep your site secure, reliable, and up to date</li>
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <h2>Fast scalable & Mobile-freindly websites:</h2>
                                        <ul>
                                            <li>Modern, responsive designs that load quickly, adapt seamlessly to any device, and grow with your business needs.</li>
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                    <div><h2>Free Domain for the first 2 months:</h2>
                                        <ul>
                                            <li>Get started with zero hassle — I’ll provide a free domain name for the first two months of your project.</li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={3}>
                                    <div><h2>Custom features tailored to your liking:</h2> From unique layouts to specialized functionality, I build features that match your vision and your clients’ expectations.</div>
                                </td>
                            </tr>
                            <br />
                        </tbody>
                    </table>
                </div>
            </div>
            <br /><br /><br /><br /><br />

            <div className="map" style={{ width: "100%", verticalAlign: "center" }}>
                <MapContainer center={position} zoom={13} style={{ height: "50vh", width: "100%" }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            Colin's Sites <br />
                            <button onClick={openGoogleMaps}>Open in Google Maps</button>
                        </Popup>
                    </Marker>
                </MapContainer>

            </div>
        </div>
    )
}

export default Home