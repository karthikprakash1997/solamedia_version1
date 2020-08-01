import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";

const slides = [
  {
    id: 0,
    url: "https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg",
  },
  {
    id: 1,
    url: "https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg",
  },
  {
    id: 2,
    url: "https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg",
  },
  { id: 3, url: "https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg" },
];

const CardAnimation = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  useEffect(
    () => void setInterval(() => set((state) => (state + 1) % 4), 2000),
    []
  );
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      class="bg"
      style={{
        ...props,
        backgroundImage: `url(${item.url})`,
      }}
    />
  ));
};

export default CardAnimation;
