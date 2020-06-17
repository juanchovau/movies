import React, { Component } from 'react';
import './card.css';

export default function App({url, title, year, last, description, kind }) {
  return (
    <div className="card">
        <img src={url} alt="portada" />
        <div className="info">
            <h1>{title}</h1>
            <h2>({year})</h2>
            <p>
            Duración: <span>{last}</span>
            </p>
            <p>
            Género: <span>{kind}</span>
            </p>
            <p>
            Descripción: <span>{description}</span>
            </p>
        </div>
    </div>
  );
}