import {Text, Pressable, Image, HStack} from 'native-base';
import React from 'react';

type CardProps = {
  onPress: () => void;
  imageURL: string;
  name: string;
  airDate: string;
};

const Card: React.FC<CardProps> = ({onPress, imageURL, name, airDate}) => {
  return (
    <Pressable onPress={onPress} mb={5} borderRadius={16}>
      <Image
        borderRadius={16}
        position="relative"
        src={imageURL}
        w="100%"
        h={180}
        alt={imageURL}
      />
      <HStack
        justifyContent="space-between"
        w="100%"
        p={2}
        borderBottomRadius={16}
        bgColor="#00000060"
        position="absolute"
        bottom={0}>
        <Text color="white" bold fontSize="lg">
          {name}
        </Text>
        <Text color="white" bold fontSize="lg">
          {airDate}
        </Text>
      </HStack>
    </Pressable>
  );
};

export default Card;
