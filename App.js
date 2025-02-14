import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
    const [courseGoals, setCourseGoals] = useState([])
    const [modalIsVisible, setModalIsVisible] = useState(false)

    function startAddGoalHandler() {
        setModalIsVisible(true)
    }
    function endAddGoalHandler() {
        setModalIsVisible(false)
    }

    function addGoalHandler(enteredGoalText) {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { id: Date.now(), text: enteredGoalText },
        ])
        endAddGoalHandler()
    }

    function deleteGoalHandler(id) {
        setCourseGoals((currentCourseGoals) => {
            return currentCourseGoals.filter(
                (currentCourseGoal) => currentCourseGoal.id !== id
            )
        })
    }
    return (
        <>
            <StatusBar style="light" />
            <View style={styles.appContainer}>
                <Button
                    title="Add New Goal"
                    color="#a065ec"
                    onPress={startAddGoalHandler}
                />

                <GoalInput
                    onAddGoal={addGoalHandler}
                    visible={modalIsVisible}
                    onEndGoal={endAddGoalHandler}
                />
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
            </View>
        </>
    )
}

export const styles = StyleSheet.create({
    appContainer: {
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
        rowGap: 16,
        backgroundColor: '#1e085a',
    },

    goalsContainer: {
        flex: 5,
    },
})
