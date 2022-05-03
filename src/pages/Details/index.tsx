import {StackScreenProps} from '@react-navigation/stack';
import axios from 'axios';
import {
  Avatar,
  Divider,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {RootStackParamList} from '../../navigation';

const Details: React.FunctionComponent<
  StackScreenProps<RootStackParamList, 'Details'>
> = ({
  route: {
    params: {episode},
  },
}) => {
  const [charImages, setCharImages] = useState<string[] | undefined>([]);
  useEffect(() => {
    setCharImages([]);
    getCharImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCharImages = async () => {
    episode.characters.map(async url => {
      const res = await axios.get(url);
      //@ts-ignore
      setCharImages(old => [...old, res.data.img_url]);
    });
  };

  return (
    <ScrollView>
      <Image alt={episode.img_url} src={episode.img_url} w="100%" h={170} />
      <VStack space={2} p={5}>
        <HStack justifyContent="space-between">
          <Text fontSize="xl" bold>
            {episode.name}
          </Text>
          <Text fontSize="xl">{episode.air_date}</Text>
        </HStack>
        <Divider />
        <Text fontSize="lg">Director: {episode.director}</Text>
        <Text fontSize="lg" mb={1}>
          Characters:
        </Text>
        <HStack flexWrap="wrap">
          {charImages?.map(character => (
            <Avatar
              bgColor="primary.600"
              mb={3}
              mr={2}
              source={{
                uri: character,
              }}
            />
          ))}
        </HStack>
      </VStack>
    </ScrollView>
  );
};

export default Details;
