import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function GoalItem({ itemData, onDeleteItem }) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                onPress={onDeleteItem.bind(this, itemData.item.id)}
                android_ripple={{ color: '#dddddd' }}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{`#${itemData.index + 1} ${
                    itemData.item.text
                }`}</Text>
            </Pressable>
        </View>
    )
}

export const styles = StyleSheet.create({
    goalItem: {
        borderRadius: 6,
        backgroundColor: '#5e08cc',
        marginBottom: 8,
    },
    goalText: {
        padding: 8,
        color: '#fff',
    },
    pressedItem: {
        opacity: 0.25,
        backgroundColor: '#9787ab',
    },
})
