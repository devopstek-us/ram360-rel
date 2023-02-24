import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import Tooltip from "@mui/material/Tooltip";
import { Box } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import "./maps.scss";
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json";
// "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
// const geoUrl =
//   "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/south-america.json";

const markers = [
  {
    DAP: 0,
    name: "Buenos Aires",
    coordinates: [-112.1037469, 43.4926827],
  },
  {
    DAP: 10,
    name: "Newton",
    coordinates: [-71.217133, 42.341042],
  },
  {
    DAP: 24,
    name: "Newburyport",
    coordinates: [-70.893875, 42.810356],
  },
  {
    DAP: 78,
    name: "Alexandria",
    coordinates: [-92.471176, 31.284788],
  },
  { DAP: 100, name: "Ottawa", coordinates: [-75.697189, 45.421532] },
  {
    DAP: 98,
    name: "Edmonton",
    coordinates: [-113.7729143, 53.5263531],
  },
  {
    DAP: 0,
    name: "Talkeetna",
    coordinates: [-150.1763322, 62.272212],
  },
  {
    DAP: 0,
    name: "Beluga",
    coordinates: [-151.308337, 61.1748902],
  },
  {
    DAP: 2,
    name: "Sachs Harbour",
    coordinates: [-125.5466563, 71.9421897],
  },
  {
    DAP: 0,
    name: "Taloyoak",
    coordinates: [-93.6425533, 69.5419244],
  },
  {
    DAP: 35,
    name: "Great Falls",
    coordinates: [-111.3735546, 47.5047686],
  },
  {
    DAP: 0,
    name: "Denver",
    coordinates: [-104.9951957, 39.7642548],
  },
];

type Props = {};
const default_color = "#9e9e9e";
const deformed_color = "#a20000";
const TowersMap = (props: Props) => {
  const navigate = useNavigate();
  const [content, setContent] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const selectedMarker = content ? markers[content] : null;
  return (
    <>
      <Tooltip
        title={
          selectedMarker ? (
            <Box>
              <div>marker: {selectedMarker.name}</div>
              <div>DAP: {selectedMarker.DAP}</div>
            </Box>
          ) : (
            ""
          )
        }
        open={selectedMarker ? true : false}
        followCursor
      >
        <ComposableMap
          projection="geoAzimuthalEqualArea"
          projectionConfig={{
            rotate: [65, 20, 0],
            scale: 500,
            center: [-35, 60],
          }}
          // height={500}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }: any) =>
              geographies.map((geo: any) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#EAEAEC"
                  stroke="#D6D6DA"
                  // style={{
                  //   default: {
                  //     fill: "#D6D6DA",
                  //     outline: "none"
                  //   },
                  //   hover: {
                  //     fill: "#F53",
                  //     outline: "none"
                  //   },
                  //   pressed: {
                  //     fill: "#E42",
                  //     outline: "none"
                  //   }
                  // }}
                />
              ))
            }
          </Geographies>
          {markers.map(({ name, coordinates, DAP }, index) => (
            <Marker
              key={name}
              coordinates={coordinates as any}
              onMouseEnter={() => {
                setContent(index);
              }}
              onMouseLeave={() => {
                setContent(null);
              }}
              onClick={() => {
                navigate("/tower/" + Math.round(Math.random() * 10));
              }}
              className="custom-marker"
              onMouseOver={() => {
                setHovered(index);
              }}
              onMouseOut={() => {
                setHovered(null);
              }}
              // style={{ default: { background: "black" } }}
            >
              <circle
                r={8}
                fill="#ffffffff"
                stroke="#fff"
                strokeWidth={2}
                opacity={0}
              />
              <g
                style={{
                  stroke: undefined,
                  strokeWidth: 0,
                  strokeDasharray: undefined,
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: undefined,
                  fillRule: "nonzero",
                  opacity: 0.7,
                  scale: hovered === index ? "0.3" : "0.16",
                }}
                transform="translate(-45, -45)"
              >
                <path
                  d="M 48 43.274 l 37.318 21.713 C 88.309 58.964 90 52.181 90 45 C 90 21.156 71.453 1.656 48 0.111 V 43.274 z"
                  style={{
                    stroke: undefined,
                    strokeWidth: 1,
                    strokeDasharray: undefined,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: DAP > 0 ? deformed_color : default_color,
                    fillRule: "nonzero",
                    opacity: 1,
                    // transform: " matrix(1 0 0 1 0 0)",
                  }}
                  strokeLinecap="round"
                />
                <path
                  d="M 42 43.274 V 0.111 C 18.547 1.656 0 21.156 0 45 c 0 7.181 1.691 13.964 4.682 19.987 L 42 43.274 z"
                  style={{
                    stroke: undefined,
                    strokeWidth: 1,
                    strokeDasharray: undefined,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: DAP > 33.333 ? deformed_color : default_color,
                    fillRule: "nonzero",
                    opacity: 1,
                    // transform: " matrix(1 0 0 1 0 0)",
                  }}
                  // stroke-linecap="round"
                />
                <path
                  d="M 45 48.471 L 7.696 70.175 C 15.784 82.136 29.474 90 45 90 c 15.526 0 29.216 -7.864 37.304 -19.825 L 45 48.471 z"
                  style={{
                    stroke: undefined,
                    strokeWidth: 1,
                    strokeDasharray: undefined,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: DAP > 66.666 ? deformed_color : default_color,
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                  // transform=" matrix(1 0 0 1 0 0) "
                  // stroke-linecap="round"
                />
              </g>

              {/* <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text> */}
            </Marker>
          ))}
        </ComposableMap>
        {/* <div>sef</div> */}
      </Tooltip>
    </>
  );
};

export default TowersMap;
