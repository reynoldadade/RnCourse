import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
    const [courseGoals, setCourseGoals] = useState([])

    function addGoalHandler(enteredGoalText) {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { id: Date.now(), text: enteredGoalText },
        ])
    }

    function deleteGoalHandler(id) {
        setCourseGoals((currentCourseGoals) => {
            return currentCourseGoals.filter(
                (currentCourseGoal) => currentCourseGoal.id !== id
            )
        })
    }
    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={addGoalHandler} />
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    keyExtractor={(item, index) => item.id + index}
                    renderItem={(itemData) => (
                        <GoalItem
                            itemData={itemData}
                            onDeleteItem={deleteGoalHandler}
                        />
                    )}
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
