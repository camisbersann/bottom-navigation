import { View, Text } from "react-native";
import styles from './styles';

const Title = ({texto}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{texto}</Text>
        </View>
    )
}
export default Title;