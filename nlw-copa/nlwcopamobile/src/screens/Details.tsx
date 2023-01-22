import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Share } from 'react-native';
import { VStack, useToast, HStack } from "native-base";
import { Header } from "../components/Header";
import { useRoute } from '@react-navigation/native';
import { Loading } from '../components/Loading';
import { PoolPros } from '../components/PoolCard';
import { Option } from '../components/Option';
import { Guesses } from '../components/Guesses';
import { PoolHeader } from '../components/PoolHeader';
import { EmptyPoolList } from '../components/EmptyPoolList';
import { EmptyMyPoolList } from '../components/EmptyMyPoolList';



interface RouteParams {
  id: string;
}

export function Details() {
  const [isLoading, setIsLoading] = useState(true);
  const [poolDetails, setPoolDetails] = useState<PoolPros>({} as PoolPros);
  const route = useRoute();
  const { id } = route.params as RouteParams;
  const toast = useToast();
  const [optionSelected, setOptionSelected] = useState<'Seus palpites' | 'Ranking do grupo'>('Seus palpites');


  async function fetchPoolDetail() {




    try {
      setIsLoading(true);
      const response = await api.get(`/pools/${id}`);
      setPoolDetails(response.data.pool);

    } catch (error) {
      console.log(error);

      toast.show({
        title: 'Não foi possivel carregar os detalhes do bolão',
        placement: 'top',
        bgColor: 'red.500'
      });


    } finally {
      setIsLoading(false);

    }
  }

  async function handleCodeShare() {
    await Share.share({
      message: poolDetails.code
    });
  }
  useEffect(() => {
    fetchPoolDetail();
  }, [id]
  );


  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <VStack flex={1} bgColor="gray.900">

      <Header
        title={poolDetails.title} showBackButton showShareButton
        onShare={handleCodeShare} />
      {
        poolDetails._count?.participants > 0 ?

          <VStack px={5} flex={1}>
            <PoolHeader data={poolDetails} />
            <HStack bgColor="gray.800" p={1} rounded="sm" mb={5}>
              <Option title="Seus palpites" isSelected={optionSelected === 'Seus palpites'}
                onPress={() => setOptionSelected('Seus palpites')} />

              <Option title="Ranking do grupo" isSelected={optionSelected === 'Ranking do grupo'}
                onPress={() => setOptionSelected('Ranking do grupo')} />
            </HStack>
            <Guesses poolId={poolDetails.id} code={poolDetails.code} />
          </VStack>
          : <EmptyMyPoolList code={poolDetails.code} />
      }
    </VStack>

  );
}
