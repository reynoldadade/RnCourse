import { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'

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
                <Image
                    style={styles.image}
                    source={require('../assets/images/goal.png')}
                />
                <TextInput
                    placeholder="Your course goal"
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            onPress={onEndGoal}
                            color="#f31282"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Add Goal"
                            onPress={addGoalHandler}
                            disabled={enteredGoalText === ''}
                            color="#b180f0"
                        />
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
        flex: 1,
        padding: 16,
        backgroundColor: '#311b6b',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
        width: '100%',
        padding: 16,
        color: '#120438',
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
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
})
