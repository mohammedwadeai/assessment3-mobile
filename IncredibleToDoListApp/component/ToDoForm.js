"use client";
import React from 'react';
import { View, TextInput, Button, StyleSheet ,Text,} from 'react-native';
import { useState } from 'react';
function ToDoForm({onAddItem}) {
 const[task, setTask] = useState('');
    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                onChangeText={(e) => setTask(e)}
                required
            />
            <Button type="submit" title="Add" onPress={()=>{{task != '' ?onAddItem(task):alert("Please Enter a Task")}}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
});
export default ToDoForm;