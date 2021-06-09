import {
  Slider,
  Flex,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Collapse,
  useDisclosure,
  Image,
  IconButton,
  Stack,
  Box,
  Link,
  Text,
  Alert,
} from "@chakra-ui/react";
import { CodeRadioDataType } from "interfaces/CodeRadio";
import {
  AiFillPlayCircle,
  AiFillSound,
  AiFillPauseCircle,
  AiFillWarning,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { memo, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { detectMobileDevice } from "src/lib";

const ImageMotion = motion(Image);
const ICON_SIZE = 18;

const AudioPlayer = ({ data = {} }: { data: Partial<CodeRadioDataType> }) => {
  const t = useTranslations("Home");
  const { now_playing, station } = data;
  const audioRef = useRef<HTMLAudioElement>();
  const { isOpen, onToggle } = useDisclosure();
  const [volumen, setVolumen] = useState(0.2);
  const [pause, setPause] = useState(true);
  const [showPlayer, setShowPlayer] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volumen;
    }
  }, [volumen]);

  useEffect(() => {
    const asyncPlay = async () => {
      if (audioRef.current && !pause) {
        try {
          await audioRef.current.play();
        } catch (error) {
          console.log(error);
          setShowPlayer(false);
          setPause(true);
          <Alert status="error">
            <AiFillWarning />
            Ocurrio un error para reproducir el audio
          </Alert>;
        }
      }
    };
    if (audioRef.current && pause) {
      audioRef.current.pause();
    }
    asyncPlay();
  }, [pause]);

  if (!showPlayer) {
    return <></>;
  }
  return (
    <Flex
      zIndex="banner"
      position="sticky"
      direction="row"
      top={0}
      height="64px"
      bg="black"
      justify="space-between"
      p={4}
      wrap="wrap"
    >
      <Flex flex={1}>
        <IconButton
          onClick={() => setPause((prev) => !prev)}
          size="xs"
          icon={
            pause ? (
              <AiFillPlayCircle size={ICON_SIZE} />
            ) : (
              <AiFillPauseCircle size={ICON_SIZE} />
            )
          }
          variant={"ghost"}
          aria-label={"Volumen"}
          mr={4}
        />
        <ImageMotion
          loading="lazy"
          src={now_playing?.song?.art}
          width={6}
          height={6}
          whileHover={{ scale: 2.2 }}
          objectFit="contain"
        />
        <Box ml={4}>
          <Text
            fontSize="xx-small"
            mb={0}
            lineHeight="none"
            textTransform="capitalize"
            noOfLines={1}
          >
            {now_playing?.song?.title}
          </Text>
          <Text noOfLines={1} fontSize="xx-small" textTransform="capitalize">
            {now_playing?.song?.album} || {now_playing?.song?.artist}
          </Text>
        </Box>
        <Flex flex={1} />
        <Box>
          <Text fontSize="xx-small" mb={0} lineHeight="none">
            {t("thanks")}
          </Text>
          <Link href="https://coderadio.freecodecamp.org/" isExternal>
            <Image
              loading="lazy"
              src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg"
              width={{ base: 90, md: 163 }}
              mt="2"
              objectFit="contain"
            />
          </Link>
        </Box>
      </Flex>

      <Flex
        align="center"
        justify="center"
        flex={{ base: 1 / 3, md: 1 / 5 }}
        width="100%"
        direction="column"
      >
        <IconButton
          size="xs"
          icon={<AiFillSound size={ICON_SIZE} />}
          onClick={onToggle}
          variant={"ghost"}
          aria-label={"Volumen"}
        />
        <Collapse in={isOpen} animateOpacity style={{ width: "80%" }}>
          <Stack bg="black" as={Box} p={4}>
            <Slider
              aria-label="slider-ex-2"
              onChange={(value) => setVolumen(value)}
              max={1}
              step={0.1}
              value={volumen}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Stack>
        </Collapse>
      </Flex>
      <audio
        ref={audioRef}
        style={{ display: "none" }}
        controls
        id="audio"
        src={station?.listen_url}
        autoPlay
      />
    </Flex>
  );
};

export default memo(AudioPlayer);
