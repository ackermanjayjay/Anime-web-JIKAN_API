import { useEffect, useState } from "react";
import { getAnime, SearchAnime } from "../helper/api";
import {
  Card,
  Image,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  Button,
  ButtonGroup,
  SimpleGrid,
  Container,
  Box,
  Input,
} from "@chakra-ui/react";

const AnimeListComponent = () => {
  const [PopularAnime, setPopularAnime] = useState([]);
  useEffect(() => {
    getAnime().then((result) => {
      setPopularAnime(result);
    });
  }, []);

  const PopularAnimeList =  () => {
    return PopularAnime.map((anime, i) => {
      return (
        <div key={i}>
          <Container>
            <SimpleGrid column={3} spacing={10} p={5}>
              <Box>
                <Card maxW="sm" gridColumn={3} boxShadow="dark-lg">
                  <CardBody>
                    <Image
                      src={anime.images.jpg.image_url}
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{anime.title}</Heading>
                      <Text>{anime.synopsis}</Text>
                      <Text color="blue.600" fontSize="2xl">
                        Score: {anime.score}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Button variant="solid" colorScheme="blue">
                        Buy now
                      </Button>
                      <Button variant="ghost" colorScheme="blue">
                        Add to cart
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              </Box>
            </SimpleGrid>
          </Container>
        </div>
      );
    });
  };

  const Search = async  (q) => {
    if ( q.length > 3){
      const query  =  await SearchAnime(q)
      console.log({data:query})
      setPopularAnime(query)

    }

  };

  return (
    <>
    <Text>Pencari Anime</Text>
        <Input
          placeholder="Search here"
          size="lg"
          onChange={({ target }) => Search(target.value)}
          />
          <PopularAnimeList></PopularAnimeList>
    </>
  );
};

export default AnimeListComponent;
