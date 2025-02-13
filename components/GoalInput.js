import { View, TextInput, Button, StyleSheet } from 'react-native'

export default function GoalInput({
    goalInputHandler,
    enteredGoalText,
    addGoalHandler,
}) {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Your course goal"
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button
                title="Add Goal"
                onPress={addGoalHandler}
                disabled={enteredGoalText === ''}
            />
        </View>
    )
}

export const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        rowGap: 5,
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        flex: 1,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '80%',
        padding: 8,
    },
})
