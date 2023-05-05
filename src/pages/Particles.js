import React from 'react';
import ParticleField from 'react-particles-webgl';

const config = {
    showCube: false,
    dimension: '3D',
    velocity: 0.5,
    boundaryType: 'passthru',
    antialias: false,
    direction: {
        xMin: -0.6,
        xMax: 0.3,
        yMin: -1,
        yMax: -0.6,
        zMin: -0.6,
        zMax: 0.3
    },
    lines: {
        colorMode: 'solid',
        color: '#ff0000',
        transparency: 0.5,
        limitConnections: true,
        maxConnections: 20,
        minDistance: 150,
        visible: false
    },
    particles: {
        colorMode: 'solid',
        color: '#ff0000',
        transparency: 0.9,
        shape: 'square',
        boundingBox: 'canvas',
        count: 2500,
        minSize: 1,
        maxSize: 25,
        visible: true
    },
    cameraControls: {
        enabled: true,
        enableDamping: true,
        dampingFactor: 0.2,
        enableZoom: true,
        autoRotate: false,
        autoRotateSpeed: 0.3,
        resetCameraFlag: true
    }
}

export default () => <ParticleField config={config} />;