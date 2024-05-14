import React, {
  // useLayoutEffect,
  useCallback,
  useEffect,
  useState,
  useMemo,
  useRef,
} from "react";

import {
  // useMediaQuery,
  useTheme,
  Progress,
  VStack,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";
import ChevronRight from "SVG/ChevronRight";
import ChevronLeft from "SVG/ChevronLeft";
import { useWindowWidth } from "Hooks/index";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useBoundingRect } from "Hooks/index.js";
import { percentage } from "Utils/index.js";
import { isClient } from "../../../constants/index";

const MotionFlex = motion(Flex);

const transitionProps = {
  stiffness: 400,
  type: "spring",
  damping: 60,
  mass: 2,
};

const ChakraCarousel = ({ children, gap }) => {
  const [trackIsActive, setTrackIsActive] = useState(false);
  const [multiplier, setMultiplier] = useState(0.35);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const [constraint, setConstraint] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  let width = useWindowWidth();

  const initSliderWidth = useCallback((width) => setSliderWidth(width), []);

  const positions = useMemo(
    () => children.map((_, index) => -Math.abs((itemWidth + gap) * index)),
    [children, itemWidth, gap],
  );

  const { breakpoints } = useTheme();

  // const isBetweenBaseAndMd = width <= breakpoints.md;

  // const isBetweenBaseAndMd = width <= (breakpoints.base.split('px')) || width >= (breakpoints.md.split('px'));

  const isBetweenBaseAndMd =
    width >= parseInt(breakpoints.base.split("px")[0], 10) ||
    width <= parseInt(breakpoints.md.split("px")[0], 10);

  const isBetweenMdAndLg =
    width <= parseInt(breakpoints.md.split("px")[0], 10) ||
    width <= parseInt(breakpoints.lg.split("px")[0], 10);

  const isBetweenLgAndXl =
    width >= parseInt(breakpoints.lg.split("px")[0], 10) &&
    width <= parseInt(breakpoints.xl.split("px")[0], 10);

  const isGreaterThanXL = width > parseInt(breakpoints.xl.split("px")[0], 10);

  useEffect(() => {
    if (isBetweenBaseAndMd) {
      setItemWidth(sliderWidth - gap);
      setMultiplier(0.65);
      setConstraint(1);
    }
    if (isBetweenMdAndLg) {
      setItemWidth(sliderWidth - gap);
      setMultiplier(0.5);
      setConstraint(1);
    }
    if (isBetweenLgAndXl) {
      setItemWidth(sliderWidth / 2 - gap);
      setMultiplier(0.5);
      setConstraint(2);
    }
    if (isGreaterThanXL) {
      setItemWidth(sliderWidth / 2 - gap);
      setMultiplier(0.35);
      setConstraint(2);
    }
  }, [
    isBetweenBaseAndMd,
    isBetweenMdAndLg,
    isBetweenLgAndXl,
    isGreaterThanXL,
    sliderWidth,
    gap,
  ]);

  const sliderProps = {
    setTrackIsActive,
    initSliderWidth,
    setActiveItem,
    activeItem,
    constraint,
    itemWidth,
    positions,
    gap,
  };

  const trackProps = {
    setTrackIsActive,
    trackIsActive,
    setActiveItem,
    sliderWidth,
    activeItem,
    constraint,
    multiplier,
    itemWidth,
    positions,
    gap,
  };

  const itemProps = {
    setTrackIsActive,
    trackIsActive,
    setActiveItem,
    activeItem,
    constraint,
    itemWidth,
    positions,
    gap,
  };

  return (
    <Slider {...sliderProps}>
      <Track {...trackProps}>
        {children.map((child, index) => {
          return (
            <Item {...itemProps} index={index} key={index}>
              {child}
            </Item>
          );
        })}
      </Track>
    </Slider>
  );
};

function Slider({
  setTrackIsActive,
  initSliderWidth,
  setActiveItem,
  activeItem,
  constraint,
  itemWidth,
  positions,
  children,
  gap,
}) {
  const [ref, { width }] = useBoundingRect();

  useEffect(() => initSliderWidth(Math.round(width)), [width, initSliderWidth]);

  const handleFocus = () => {
    setTrackIsActive(true);
  };

  const handleDecrementClick = () => {
    setTrackIsActive(true);
    !(activeItem === positions.length - positions.length) &&
      setActiveItem((prev) => prev - 1);
  };

  const handleIncrementClick = () => {
    setTrackIsActive(true);
    !(activeItem === positions.length - constraint) &&
      setActiveItem((prev) => prev + 1);
  };

  // const isFirst = (activeItem === 0);
  // const isLast = (activeItem === positions.length - constraint);

  return (
    <Box position="relative">
      <Flex w={"100%"} mx="auto">
        <Button
          onClick={handleDecrementClick}
          onFocus={handleFocus}
          mr={`${gap / 2}px`}
          alignSelf={["flex-end", "center"]}
          color="gray.200"
          variant="link"
          minW={0}
          ml={4}
          maxW={18}
          _hover={{
            transform: `scale(1.3)`,
          }}
        >
          <ChevronLeft />
        </Button>

        <Box
          ref={ref}
          w={{ base: "100%", md: `calc(100% + ${gap}px)` }}
          ml={{ base: 0, md: `-${gap / 2}px` }}
          px={[`0px`, `${gap / 2}px`]}
          // pb={[0, 12, 12, 4, 4]}
          position="relative"
          overflow="hidden"
          _before={{
            bgGradient: "linear(to-r, base.d400, transparent)",
            position: "absolute",
            w: `${gap / 2}px`,
            content: "''",
            zIndex: 1,
            h: "100%",
            left: 0,
            top: 0,
          }}
          _after={{
            bgGradient: "linear(to-l, base.d400, transparent)",
            position: "absolute",
            w: `${gap / 2}px`,
            content: "''",
            zIndex: 1,
            h: "100%",
            right: 0,
            top: 0,
          }}
        >
          {children}
        </Box>

        <Button
          onClick={handleIncrementClick}
          onFocus={handleFocus}
          ml={`${gap / 2}px`}
          // alignSelf={["flex-end", "flex-end", "flex-end", "center", "center"]}
          alignSelf={["flex-end", "center"]}
          color="gray.200"
          variant="link"
          zIndex={2}
          minW={0}
          mr={4}
          maxW={18}
          _hover={{
            transform: `scale(1.3)`,
          }}
        >
          <ChevronRight />
        </Button>
      </Flex>
      <Progress
        value={percentage(activeItem, positions.length - constraint)}
        alignSelf="center"
        borderRadius="2px"
        bg="base.d100"
        px={2}
        mt={3}
        flex={1}
        h="3px"
        title="Progress Bar Label"
        aria-labelledby="testimonial-label"
        sx={{
          "> div": {
            backgroundColor: "gray.400",
          },
        }}
      />
    </Box>
  );
}

function Track({
  setTrackIsActive,
  trackIsActive,
  setActiveItem,
  activeItem,
  constraint,
  multiplier,
  itemWidth,
  positions,
  children,
}) {
  const [dragStartPosition, setDragStartPosition] = useState(0);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const node = useRef(null);

  const handleDragStart = () => setDragStartPosition(positions[activeItem]);

  const handleDragEnd = (_, info) => {
    const distance = info.offset.x;
    const velocity = info.velocity.x * multiplier;
    const direction = velocity < 0 || distance < 0 ? 1 : -1;

    const extrapolatedPosition =
      dragStartPosition +
      (direction === 1
        ? Math.min(velocity, distance)
        : Math.max(velocity, distance));

    const closestPosition = positions.reduce((prev, curr) => {
      return Math.abs(curr - extrapolatedPosition) <
        Math.abs(prev - extrapolatedPosition)
        ? curr
        : prev;
    }, 0);

    if (!(closestPosition < positions[positions.length - constraint])) {
      setActiveItem(positions.indexOf(closestPosition));
      controls.start({
        x: closestPosition,
        transition: {
          velocity: info.velocity.x,
          ...transitionProps,
        },
      });
    } else {
      setActiveItem(positions.length - constraint);
      controls.start({
        x: positions[positions.length - constraint],
        transition: {
          velocity: info.velocity.x,
          ...transitionProps,
        },
      });
    }
  };

  const handleResize = useCallback(() => {
    controls.start({
      x: positions[activeItem],
      transition: {
        ...transitionProps,
      },
    });
  }, [activeItem, controls, positions]);

  const handleClick = useCallback(
    (event) => {
      if (node.current.contains(event.target)) {
        setTrackIsActive(true);
      } else setTrackIsActive(false);
    },
    [setTrackIsActive],
  );

  const handleKeyDown = useCallback(
    (event) => {
      if (trackIsActive) {
        if (activeItem < positions.length - constraint) {
          if (event.key === "ArrowRight" || event.key === "ArrowUp") {
            event.preventDefault();
            setActiveItem((prev) => prev + 1);
          }
        }
        if (activeItem > positions.length - positions.length) {
          if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
            event.preventDefault();
            setActiveItem((prev) => prev - 1);
          }
        }
      }
    },
    [trackIsActive, setActiveItem, activeItem, constraint, positions.length],
  );

  useEffect(() => {
    if (!isClient) return;

    handleResize(positions);

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handleClick, handleResize, handleKeyDown, positions]);

  return (
    <>
      {itemWidth && (
        <VStack ref={node} spacing={5} alignItems="stretch">
          <MotionFlex
            dragConstraints={node}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={controls}
            style={{ x }}
            drag="x"
            _active={{ cursor: "grabbing" }}
            minWidth="min-content"
            flexWrap="nowrap"
            cursor="grab"
          >
            {children}
          </MotionFlex>
        </VStack>
      )}
    </>
  );
}

function Item({
  setTrackIsActive,
  setActiveItem,
  activeItem,
  constraint,
  itemWidth,
  positions,
  children,
  index,
  gap,
}) {
  const [userDidTab, setUserDidTab] = useState(false);

  const handleFocus = () => {
    setTrackIsActive(true);
  };

  const handleBlur = () => {
    userDidTab && index + 1 === positions.length && setTrackIsActive(false);
    setUserDidTab(false);
  };

  const handleKeyUp = (event) => {
    event.key === "Tab" &&
      !(activeItem === positions.length - constraint) &&
      setActiveItem(index);
  };

  const handleKeyDown = (event) => {
    event.key === "Tab" && setUserDidTab(true);
  };

  return (
    <Flex
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      w={`${itemWidth}px`}
      _notLast={{
        mr: `${gap}px`,
      }}
      py="4px"
    >
      {children}
    </Flex>
  );
}

export default ChakraCarousel;
