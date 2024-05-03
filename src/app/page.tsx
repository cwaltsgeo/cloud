"use client";
import "./globals.css";
import React, { use, useEffect, useRef } from 'react';
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";

export default function Home() {
  const mapDiv = useRef(null);
  useEffect(() => {
    const map = new Map({
      basemap: "streets-navigation-vector",
    });
    const view = new MapView({
      map,
      container: mapDiv.current,
      center: [-118.805, 34.027],
      zoom: 13,
    });

    return () => {
      if (view) {
        // destroy the map view
        view.destroy();
      }
    }
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <div ref={mapDiv} style={{ height: "90vh" }}></div>
    </div>
  );
}