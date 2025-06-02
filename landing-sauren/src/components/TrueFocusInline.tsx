import React, { useEffect, useRef, useState, RefObject } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import "../TextAnimations/TrueFocus/TrueFocus";

interface TrueFocusInlineProps {
    text: string;
    manualMode?: boolean;
    blurAmount?: number;
    borderColor?: string;
    glowColor?: string;
    animationDuration?: number;
    pauseBetweenAnimations?: number;
}

const TrueFocusInline: React.FC<TrueFocusInlineProps> = ({
    text,
    manualMode = false,
    blurAmount = 5,
    borderColor = "green",
    glowColor = "rgba(0, 255, 0, 0.6)",
    animationDuration = 0.5,
    pauseBetweenAnimations = 1,
}) => {
    const containerRef: RefObject<HTMLDivElement> = useRef(null);
    const textRef: RefObject<HTMLSpanElement> = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [focusRect, setFocusRect] = useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0
    });

    useEffect(() => {
        if (!manualMode) {
            const interval = setInterval(() => {
                setIsHovered(prev => !prev);
            }, (animationDuration + pauseBetweenAnimations) * 1000);

            return () => clearInterval(interval);
        }
    }, [manualMode, animationDuration, pauseBetweenAnimations]);

    useEffect(() => {
        if (textRef.current && containerRef.current) {
            const parentRect = containerRef.current.getBoundingClientRect();
            const textRect = textRef.current.getBoundingClientRect();

            setFocusRect({
                x: textRect.left - parentRect.left,
                y: textRect.top - parentRect.top,
                width: textRect.width,
                height: textRect.height,
            });
        }
    }, [isHovered]);

    return (
        <Box
            ref={containerRef}
            sx={{
                display: 'inline-flex',
                position: 'relative',
            }}
            onMouseEnter={() => manualMode && setIsHovered(true)}
            onMouseLeave={() => manualMode && setIsHovered(false)}
        >
            <span
                ref={textRef}
                style={{
                    filter: isHovered || !manualMode ? 'none' : `blur(${blurAmount}px)`,
                    transition: `filter ${animationDuration}s ease`,
                    whiteSpace: 'nowrap',
                }}
            >
                {text}
            </span>

            {(isHovered || !manualMode) && (
                <motion.div
                    className="focus-frame"
                    initial={focusRect}
                    animate={focusRect}
                    transition={{ duration: animationDuration }}
                    style={{
                        position: 'absolute',
                        borderColor,
                        boxShadow: `0 0 10px ${glowColor}`,
                        borderRadius: '4px',
                    }}
                >
                    <span className="corner top-left"></span>
                    <span className="corner top-right"></span>
                    <span className="corner bottom-left"></span>
                    <span className="corner bottom-right"></span>
                </motion.div>
            )}
        </Box>
    );
};

export default TrueFocusInline;