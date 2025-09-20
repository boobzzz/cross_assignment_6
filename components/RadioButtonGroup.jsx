import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SecondaryButton } from './SecondaryButton';

export function RadioButtonGroup({ options }) {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <View style={styles.container}>
            {options.map((option) => (
                <SecondaryButton
                    key={option.id}
                    label={option.label}
                    icon={option.icon}
                    selectedValue={selectedOption}
                    onSelect={setSelectedOption}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 8
    }
});
