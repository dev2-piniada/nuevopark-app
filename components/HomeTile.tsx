import React from 'react';
import {  Text, TouchableOpacity, Image } from 'react-native';

type HomeTileProps = {
    icon: any;
    title: string;
    subtitle: string;
};

const HomeTile: React.FC<HomeTileProps> = ({ icon, title, subtitle }) => (
    <TouchableOpacity style={{ flex: 1, margin: 4, padding: 16, backgroundColor: 'white', borderRadius: 16, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 }}>
        <Image source={icon} style={{ width: 40, height: 40, marginBottom: 8 }} resizeMode="contain" />
        <Text style={{ fontSize: 16, fontWeight: '600', textAlign: 'center', color: '#1f2937' }}>{title}</Text>
        <Text style={{ fontSize: 12, color: '#6b7280', textAlign: 'center' }}>{subtitle}</Text>
    </TouchableOpacity>
);

export default HomeTile;