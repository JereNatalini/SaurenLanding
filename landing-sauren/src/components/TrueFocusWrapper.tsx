import React from "react";
import { Box } from "@mui/material";
import TrueFocus from "../TextAnimations/TrueFocus/TrueFocus";

interface TrueFocusWrapperProps {
    text: string;
    manualMode?: boolean;
    blurAmount?: number;
    borderColor?: string;
    glowColor?: string;
    animationDuration?: number;
    pauseBetweenAnimations?: number;
}

const TrueFocusWrapper: React.FC<TrueFocusWrapperProps> = ({
    text,
    manualMode = false,
    blurAmount = 5,
    borderColor = "green",
    glowColor = "rgba(0, 255, 0, 0.6)",
    animationDuration = 0.5,
    pauseBetweenAnimations = 1,
}) => {
    return (
        <Box
            component="span"
            sx={{
                display: 'inline-flex',
                whiteSpace: 'nowrap',
                position: 'relative',
                '& .focus-container': {
                    display: 'inline-flex !important',
                    gap: '0.3em',
                    alignItems: 'center',
                    whiteSpace: 'nowrap',
                },
                '& .focus-word': {
                    display: 'inline-block !important',
                    whiteSpace: 'nowrap',
                }
            }}
        >
            <TrueFocus
                sentence={text}
                manualMode={manualMode}
                blurAmount={blurAmount}
                borderColor={borderColor}
                glowColor={glowColor}
                animationDuration={animationDuration}
                pauseBetweenAnimations={pauseBetweenAnimations}
            />
        </Box>
    );
};

export default TrueFocusWrapper;