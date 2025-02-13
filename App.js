import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState('')
    const [courseGoals, setCourseGoals] = useState([])

    function goalInputHandler(value) {
        setEnteredGoalText(value)
    }

    function addGoalHandler() {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            enteredGoalText,
        ])
        // clear content of entered goals test
        // setEnteredGoalText('')
    }
    return (
        <View style={styles.appContainer}>
            <GoalInput
                addGoalHandler={addGoalHandler}
                goalInputHandler={goalInputHandler}
                enteredGoalText={enteredGoalText}
            />
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    keyExtractor={(item, index) => item + index}
                    renderItem={(itemData) => <GoalItem itemData={itemData} />}
                />
            </View>

            <StatusBar style="auto" />
        </View>
    )
}

export const styles = StyleSheet.create({
    appContainer: {
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
    },

    goalsContainer: {
        flex: 5,
    },
})
