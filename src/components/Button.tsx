import { Text } from '@components/Themed';
import Colors from '@constants/Colors';
import { forwardRef } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

type ButtonsProps = {
    text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

export const Button = forwardRef<View | null, ButtonsProps>(
    ({text, ...pressableProps}, ref) => {
        return (
            <Pressable ref={ref} {...pressableProps} style={styles.container}>
                <Text style={styles.text}>{text}</Text>
            </Pressable>
        )
    }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.tint,
    padding: 15,
    alignItems: 'center',
    borderRadius: 100,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.productItem,  
  },
});
