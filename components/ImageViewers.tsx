import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet } from "react-native";

type ImageViewerProps = {
  imgSource: ImageSourcePropType;
  selectedImage?: string | null;
};

export default function ImageViewer({
  imgSource,
  selectedImage,
}: ImageViewerProps) {
  const source = selectedImage ? { uri: selectedImage } : imgSource;
  return <Image source={source} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 400,
    borderRadius: 18,
  },
});
