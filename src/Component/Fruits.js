import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import dataJson from '../data-test/setData.json'

//Import Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Fruits() {
    
    useEffect(() => {
        console.log(dataJson.data);
    });

    return (
        <div>
            
        </div>
    )
}
