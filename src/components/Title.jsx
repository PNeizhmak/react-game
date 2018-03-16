import React from 'react';
import {pathFromBezierCurve} from '../utils/formulas';

const Title = () => {
    const textStyle = {
        fontFamily: '"Joti One", cursive',
        fontSize: 110,
        fill: '#cbca62',
    };

    const amazingLineCurve = {
        initialAxis: {
            x: -190,
            y: -950,
        },
        initialControlPoint: {
            x: 95,
            y: -50,
        },
        endingControlPoint: {
            x: 285,
            y: -50,
        },
        endingAxis: {
            x: 580,
            y: 0,
        },
    };

    const gameLineCurve = {
        ...amazingLineCurve,
        initialAxis: {
            x: -250,
            y: -780,
        },
        initialControlPoint: {
            x: 125,
            y: -90,
        },
        endingControlPoint: {
            x: 375,
            y: -90,
        },
        endingAxis: {
            x: 600,
            y: 0,
        },
    };

    return (
        <g filter="url(#shadow)">
            <defs>
                <path
                    id="AmazingPath"
                    d={pathFromBezierCurve(amazingLineCurve)}
                />
                <path
                    id="GamePath"
                    d={pathFromBezierCurve(gameLineCurve)}
                />
            </defs>
            <text {...textStyle}>
                <textPath xlinkHref="#AmazingPath">
                    Amazing
                </textPath>
            </text>
            <text {...textStyle}>
                <textPath xlinkHref="#GamePath">
                    React game
                </textPath>
            </text>
        </g>
    );
};

export default Title;