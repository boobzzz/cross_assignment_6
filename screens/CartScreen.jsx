import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { CatalogueItem } from '../components/CatalogueItem';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { COLORS, FONTS, ICONS } from '../utils/constants';

const cartItems = [];

export function CartScreen({ navigation }) {
    return cartItems.length > 0
        ? <ScrollView contentContainerStyle={styles.fullCart}>
            {cartItems.map(({id, image, title, price}) => (
                <CatalogueItem
                    key={id}
                    image={image}
                    title={title}
                    price={price}
                />
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        padding: 8
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