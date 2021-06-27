import { Button, Text, View } from 'react-native'
import React,{useState} from 'react'

const TodoList = () => {
    const {title,setTitle} = useState("");
    return (
        <View>
            <Text >TodoList</Text>
            <Button title="nut" onPress={() =>setTitle("aloalo")}/>
        </View>
    )
}

export default TodoList
