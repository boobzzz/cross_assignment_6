import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { CartItem } from '../components/CartItem';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { COLORS, FONTS, ICONS } from '../utils/constants';

const cartItems = [
    { id: 1, title: 'Hazelnut', packaging: 500, quantity: 1, format: ICONS.BEANS, total: 100 },
    { id: 2, title: 'Caramel', packaging: 100, quantity: 1, format: ICONS.BEANS, total: 500 },
    { id: 3, title: 'Espresso deluxe', packaging: 300, quantity: 1, format: ICONS.GROUND, total: 300 },
];

export function CartScreen() {
    return cartItems.length > 0
        ? <ScrollView contentContainerStyle={styles.fullCart}>
            {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
        </ScrollView>
        : <View style={styles.emptyCart}>
            <Text style={styles.emptyText}>
                Nothing here. For now
            </Text>
            <MaterialDesignIcons
                name={ICONS.NO_IMG}
                size={160}
                color={COLORS.SECONDARY}
            />
        </View>
}

const styles = StyleSheet.create({
    fullCart: {
        gap: 8,
        padding: 16
    },
    emptyCart: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16
    },
    emptyText: {
        fontFamily: FONTS.BOLD,
        fontSize: 28
    }
});