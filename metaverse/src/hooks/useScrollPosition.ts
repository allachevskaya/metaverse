import { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const [hideOnScroll, setHideOnScroll] = useState(true)
useScrollPosition(
    ({ prevPos, currPos }) => {
        const isShow = currPos.y > prevPos.y
        if (isShow !== hideOnScroll){
            setHideOnScroll(isShow)
        }
    },
    [hideOnScroll],
    false,
    false,
    200
)