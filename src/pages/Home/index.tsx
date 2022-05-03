import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {FlatList} from 'native-base';
import React, {useEffect, useState} from 'react';
import Config from 'react-native-config';
import {RootStackParamList} from '../../navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {Card} from '../../components';
type Episode = {
  id: number;
  name: string;
  air_date: string;
  director: string;
  writer: string;
  characters: string[];
  img_url: string;
};
const baseUrl = Config.BASE_URL;
const Home: React.FC = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();
  const [episodes, setEpisodes] = useState<Episode[]>();
  const getEpisodes = async () => {
    console.log(baseUrl);
    const result = await axios.get<Episode[]>(`${baseUrl}/episode`);
    setEpisodes(result.data);
  };
  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <FlatList
      data={episodes}
      renderItem={({item}) => (
        <Card
          key={item.id}
          onPress={() => navigation.navigate('Details', {episode: item})}
          name={item.name}
          airDate={item.air_date}
          imageURL={item.img_url}
        />
      )}
      p={5}
    />
  );
};

export default Home;
