import { useEffect, useState } from "react";
import { getAnime, SearchAnime } from "../helper/api";
import { Link } from "react-router-dom";
import {
  Card,
  Image,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  Container,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";

const AnimeListComponent = () => {
  const [PopularAnime, setPopularAnime] = useState([]);
  useEffect(() => {
    getAnime().then((result) => {
      setPopularAnime(result);
    });
  }, []);

  const PopularAnimeList = () => {
    return PopularAnime.map((anime, i) => {
      return (
        <div key={i}>
          <Link to= {`/details/${i}`}></Link>
              <Card maxW="md" marginX={5} gridColumn={3} boxShadow="dark-lg">
                <CardBody>
                  <Image
                    src={anime.images.jpg.image_url}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{anime.title}</Heading>
                    {/* <Text>{anime.synopsis}</Text> */}
                    <Text color="blue.600" fontSize="2xl">
                      Score: {anime.score}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
        </div>
      );
    });
  };

  const Search = async (q) => {
    if (q.length > 3) {
      const query = await SearchAnime(q);
      console.log({ data: query });
      setPopularAnime(query);
    }
  };

  return (
    <>
      <Container>
        <Text>Pencari Anime</Text>
        <Input
          placeholder="Search here"
          size="lg"
          onChange={({ target }) => Search(target.value)}
        />
        <SimpleGrid
          columns={2}
          spacingX="40px"
          height="80px"
          spacingY="20px"
          padding={5}
        >
          <PopularAnimeList></PopularAnimeList>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default AnimeListComponent;
