"use client";
import React from 'react';
import {ScrollView, Pressable, View, Text, StyleSheet,Array,ArrayList} from 'react-native';
import { useState } from 'react';
function TodoList({items}) { 
    const items_copy = items.map((item) => {
        return ( item );
      });
    return (
<ScrollView>
                {items.length > 0 ? items.map((task, index) => (
                    <Pressable key={index}>
                        <View style={styles.task}>
                            <Text style={styles.taskText}>{task}</Text>
                        </View>
                    </Pressable>
                )) : null}
                <>
                
            </>
</ScrollView>
    );
}
const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
    taskText: {
        fontSize: 16,
    },
});

export default TodoList;