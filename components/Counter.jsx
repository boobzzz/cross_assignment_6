import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { COLORS, FONTS, ICONS } from '../utils/constants';

export function Counter({ value, setValue, color }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <MaterialDesignIcons
                    name={ICONS.MINUS}
                    size={28}
                    color={color} />
            </TouchableOpacity>
            <Text style={[styles.text, color === COLORS.LIGHTEST && styles.textAlt]}>
                {value}
            </Text>
            <TouchableOpacity>
                <MaterialDesignIcons
                    name={ICONS.PLUS}
                    size={28}
                    color={color} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        height: 40,
        backgroundColor: 'transparent'
    },
    text: {
        fontFamily: FONTS.REGULAR,
        fontSize: 20,
        color: COLORS.PRIMARY,
        textTransform: 'capitalize'
    },
    textAlt: {
        color: COLORS.LIGHTEST
    }
});