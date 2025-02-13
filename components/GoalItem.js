import { View, Text, StyleSheet } from 'react-native'

export default function GoalItem({ itemData }) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{`#${itemData.index + 1} ${
                itemData.item
            }`}</Text>
        </View>
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
