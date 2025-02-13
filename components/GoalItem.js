import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function GoalItem({ itemData, onDeleteItem }) {
    return (
        <Pressable onPress={onDeleteItem.bind(this, itemData.item.id)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{`#${itemData.index + 1} ${
                    itemData.item.text
                }`}</Text>
            </View>
        </Pressable>
    )
}

export const styles = StyleSheet.create({
    goalItem: {
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e08cc',
        marginBottom: 8,
    },
    goalText: {
        color: '#fff',
    },
})
