import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { fetchProductDetails } from '../services/api';
import { RadioButtonGroup } from '../components/RadioButtonGroup';
import { SecondaryButton } from '../components/SecondaryButton';
import { Counter } from '../components/Counter';
import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';
import { COLORS, FONTS, ICONS } from '../utils/constants';
import { images } from '../products';

export function DetailsScreen({ route }) {
    const [ details, setDetails ] = useState(null);
    const [ packageOptions, setPackageOptions ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState('');

    const coffeeOptions = [
        { id: 1, label: 'beans', icon: ICONS.BEANS },
        { id: 2, label: 'ground', icon: ICONS.GROUND }
    ];

    const setPackaging = (values) => {
        const result = values.map((value, i) => {
            return {
                id: i,
                label: `${value.toString()}g`,
            }
        });
        setPackageOptions(result);
    }

    const getPriceFormat = (value) => {
        return `${value.toFixed(2)}€`;
    }

    async function getProductDetails() {
        try {
            setError('');
            setLoading(true);

            const result = await fetchProductDetails(route.params.id);
            result.price = getPriceFormat(result.price);
            setDetails(result);
            setPackaging(result.packaging);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProductDetails();
    }, []);

    return (
        <>
            {details &&
                <View style={styles.wrapper}>
                    <View style={styles.container}>
                        <Image source={images[details.id]} style={styles.image} />
                        <View>
                            <Text style={styles.title}>
                                {details.title}
                            </Text>
                            <Text style={styles.price}>
                                {`${details.price} / kg`}
                            </Text>
                        </View>
                        <Text style={styles.desc}>
                            {details.desc}
                        </Text>
                        <RadioButtonGroup options={coffeeOptions} />
                        <View style={styles.packaging}>
                            <Text style={styles.packagingText}>
                                Choose packaging:
                            </Text>
                            <RadioButtonGroup options={packageOptions} />
                        </View>
                    </View>
                    <View style={styles.bottomContainer}>
                        <Counter
                            value={1}
                            color={COLORS.LIGHTEST}
                        />
                        <SecondaryButton
                            label={details.price}
                            icon={ICONS.CART_PLUS}
                            selectedValue={details.price}
                            onSelect={() => {}}
                        />
                    </View>
                </View>
            }
            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}
        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: COLORS.PRIMARY
    },
    container: {
        gap: 16,
        padding: 16,
        paddingBottom: 72,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: COLORS.LIGHTEST
    },
    image: {
        width: '100%',
        height: 180,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: COLORS.PRIMARY
    },
    title: {
        fontFamily: FONTS.REGULAR,
        fontSize: 24,
    },
    price: {
        fontFamily: FONTS.BOLD,
        fontSize: 24,
    },
    desc: {
        fontFamily: FONTS.REGULAR,
        fontSize: 16,
    },
    packaging: {
        gap: 8
    },
    packagingText: {
        alignSelf: 'center',
        fontFamily: FONTS.REGULAR
    },
    bottomContainer: {
        flex: 1,
        gap: 32,
        padding: 16,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: COLORS.PRIMARY
    }
});