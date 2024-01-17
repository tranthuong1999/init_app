import { Redirect } from 'expo-router';
import { useState } from 'react';



export default function index() {

    return (
        <Redirect href="/(home)" />
    );
}