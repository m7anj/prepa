import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({})

interface MainButtonProps {
  onPress: () => void;
}

export const MainButton = ({
   onPress }: MainButtonProps) =>
    (<button
      className="bg-primary-dark text-text-dark rounded-full px-4 py-2 font-bold"
      onClick={onPress}
    />
);

export default MainButton;