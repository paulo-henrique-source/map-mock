"use client";

import React, { useEffect, useState } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";

const OpenLayersMap = () => {
    const [lonLat, setLonLat] = useState<number[]>([-51.9275533, -23.4473893]);
    const [vectorSource, setVectorSource] = useState<VectorSource | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const source = new VectorSource();
            setVectorSource(source);
            const vectorLayer = new VectorLayer({
                source: source,
                style: new Style({
                    image: new CircleStyle({
                        radius: 6,
                        fill: new Fill({ color: "blue" }),
                        stroke: new Stroke({ color: "white", width: 2 }),
                    }),
                }),
            });

            const map = new Map({
                target: "map",
                layers: [
                    new TileLayer({
                        source: new XYZ({
                            url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
                        }),
                    }),
                    vectorLayer,
                ],
                view: new View({
                    center: [0, 0],
                    zoom: 2,
                }),
            });
            return () => {
                map.setTarget(undefined);
            };
        }
    }, []);

    useEffect(() => {
        if (
            typeof window !== "undefined" &&
            lonLat.length > 0 &&
            vectorSource
        ) {
            const point = new Point(fromLonLat(lonLat));
            const feature = new Feature({
                geometry: point,
            });

            vectorSource.clear();
            vectorSource.addFeature(feature);
        }
    }, [lonLat, vectorSource]);

    useEffect(() => {
        if (typeof window !== "undefined" && "geolocation" in navigator) {
            navigator.geolocation.watchPosition((position) => {
                setLonLat([
                    position.coords.longitude,
                    position.coords.latitude,
                ]);
            });
        }
    }, []);

    const handleMove = () => {
        setLonLat([lonLat[0] + 0.05, lonLat[1] + 0.05]);
    };

    return (
        <>
            <button style={{ border: "1px solid red" }} onClick={handleMove}>
                Se mexer
            </button>

            <div>Lat: {lonLat[0]}</div>
            <div>Long: {lonLat[1]}</div>
            <div id="map" style={{ width: "100%", height: "80vh" }} />
        </>
    );
};

export default OpenLayersMap;
