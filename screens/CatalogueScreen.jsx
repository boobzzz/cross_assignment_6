import { FlatList, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import { CatalogueItem } from '../components/CatalogueItem';
import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';
import { images } from '../products';

export function CatalogueScreen() {
    const [ products, setProducts ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState('');

    async function getProducts() {
        try {
            setError('');
            setLoading(true);
            const result = await fetchProducts();
            setProducts(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            {products.length > 0 &&
                <FlatList
                    data={products}
                    renderItem={({ item }) =>
                        <CatalogueItem
                            id={item.id}
                            image={images[item.id]}
                            title={item.title}
                            price={item.price}
                        />
                    }
                    keyExtractor={item => item.id}
                    numColumns={2}
                    key={2}
                    columnWrapperStyle={{
                        justifyContent: 'center',
                        gap: 8
                    }}
                    contentContainerStyle={styles.container}
                />
            }
            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 8,
        padding: 8
    }
});