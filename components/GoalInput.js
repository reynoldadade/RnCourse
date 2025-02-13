import { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

export default function GoalInput({ onAddGoal, visible, onEndGoal }) {
    const [enteredGoalText, setEnteredGoalText] = useState('')
    function goalInputHandler(value) {
        setEnteredGoalText(value)
    }
    function addGoalHandler() {
        onAddGoal(enteredGoalText)
        goalInputHandler('')
    }

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Your course goal"
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Add Goal"
                            onPress={addGoalHandler}
                            disabled={enteredGoalText === ''}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={onEndGoal} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        rowGap: 5,
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        flex: 1,
        padding: 16,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8,
    },
    buttonContainer: {
        marginTop: 10,
        flexDirection: 'row',
        rowGap: 16,
        justifyContent: 'center',

        width: '100%',
    },
    button: {
        padding: 10,
    },
})
