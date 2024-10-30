import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { BookList } from "./BookList";
import { BookDetail } from "./BookDetail";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="BookList"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#65adf1",
                },
                headerTintColor: "white",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="BookList"
                component={BookList}
                options={{
                    title: "Library Catalog"
                }}
            />
            <StackNavigator.Screen
                name="BookDetail"
                component={BookDetail}
                options={{
                    title: "Book Details"
                }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);