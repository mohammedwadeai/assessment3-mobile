/**
 * My To Do List App
 *
 * @format
 */
"use client";
import React from 'react';
import TodoList from './component/ToDoList.js';
import TodoForm from './component/ToDoForm.js';
import {SafeAreaView,StatusBar} from 'react-native';
import {useState} from 'react';
function App() {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
      ]);
    const handleAddTask = (task) => {
        setTasks([...tasks, task]);
    }
    return (
        
        <SafeAreaView>
            <TodoList items={tasks}/>
            <TodoForm onAddItem={handleAddTask}/>
            <StatusBar style="auto" />
        </SafeAreaView>
        
    );
};

export default App;