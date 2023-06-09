import { SizeScheme } from '@19sth/react-native-pieces';
import React from 'react';
import { ScrollView, View } from 'react-native';

export enum ViewType {
    SCROLLVIEW,
    VIEW
}

export default function ContentView({ viewType, children }: { viewType?: ViewType, children: React.ReactNode }) {
    const height = SizeScheme.get().screen.height.min - 145;
    let view;
    if (viewType === ViewType.SCROLLVIEW) {
        view = (
            <ScrollView style={{height}}>
                {children}
            </ScrollView>
        );
    } else {
        view = (
            <View style={{minHeight: height}}>
                {children}
            </View>
        );
    }

    return view;
}