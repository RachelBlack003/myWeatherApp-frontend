import React, { useState } from "react";
import { Form, Button, Card, Alert, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BoxArrowRight } from "react-bootstrap-icons";
import Header from "./Header.js";

const Weather = () => {
    const [zip, setZip] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Function to fetch weather data (always in imperial units)
    const fetchWeatherData = async () => {
        if (!zip) {
            setError("Please enter a zip code.");
            return;
        }

        setLoading(true);
        setError("");
        setWeatherData(null); // Clear previous weather data on new request

        try {
            const token = localStorage.getItem("authToken");
            const headers = {
                Authorization: `Bearer ${token}`, // Pass token in the request header
            };

            // Always fetch in imperial units
            const url = `/api/curweather?zip=${zip}`; // No need to pass the unit anymore

            const response = await axios.get(url, { headers });

            if (response.data) {
                setWeatherData(response.data); // Set the new data after successful fetch
            }
        } catch (err) {
            setError("Failed to fetch weather data. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Handle form submit (fetch weather data)
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeatherData();
    };

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem("authToken"); // Remove the token from localStorage
        navigate("/"); // Navigate to the login page after logout
    };

    // Wind direction converter function    
    const degToCompass = (num) => {
        var val = Math.floor((num / 22.5) + 0.5);
        var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-body">
            <div className="p-4 bg-secondary-subtle rounded shadow" style={{ width: "500px" }}>
                <a href="#" onClick={handleLogout} className="d-flex align-items-center mb-3 navLink">
                    <BoxArrowRight size={20} className="me-2" />
                    Logout
                </a>
                <Header />
                <h3 className="text-center mb-4">Current Weather</h3>

                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formZip" className="mb-3">
                        <Form.Label className="text-start">Enter Zip Code</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter zip code"
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        Get Weather
                    </Button>
                </Form>

                {loading && (
                    <div className="text-center mt-3">
                        <Spinner animation="border" variant="primary" />
                    </div>
                )}

                {weatherData && (
                    <Card className="mt-4">
                        <Card.Body>
                            <Card.Title className="text-center">{weatherData.name}</Card.Title>
                            <div className="d-flex justify-content-center align-items-center">
                                <img
                                    src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                                    alt={weatherData.weather[0].description}
                                    className="weatherImg"
                                />
                                <div className="ms-3">
                                    <h4 className="mb-0">
                                        {Math.round(weatherData.main.temp)} °F
                                    </h4>
                                    <p className="mb-0"><span className="text-muted">Feels like: </span>{Math.round(weatherData.main.feels_like)} °F</p>
                                    <p className="text-muted">{String(weatherData.weather[0].description).charAt(0).toUpperCase() + String(weatherData.weather[0].description).slice(1)}</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mt-3">
                                <div>
                                    <strong>Humidity:</strong> {weatherData.main.humidity}%<br/>
                                    <strong>Wind:</strong> {weatherData.wind.speed} mph {degToCompass(weatherData.wind.deg)}
                                </div>
                                <div>
                                    <strong>Sunrise:</strong> {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}<br/>
                                    <strong>Sunset:</strong> {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </div>
    );
};

export default Weather;
