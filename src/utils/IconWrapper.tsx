import React, { useState } from "react";
import * as AllIcons from "../index";

type TProps = {
  Icon: React.ComponentType<object>;
  iconKey: string;
};
const IconWrapper: React.FC<TProps> = ({ Icon, iconKey }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isIconCopied, setIsIconCopied] = useState<boolean>(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsIconCopied(true);

    setTimeout(() => {
      setIsIconCopied(false);
    }, 3000);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        fontFamily: "Arial",
        fontSize: 14,
        position: "relative",
        transition: "all 0.2s ease-out",
        borderRadius: "8px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => copyToClipboard(iconKey)}
    >
      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: "-40px",
            left: "0",
            background: "white",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {iconKey}
          {isIconCopied && (
            <div
              style={{
                color: "#4CAF50",
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              Copied
              <AllIcons.CheckSmallIcon style={{ height: 18 }} />
            </div>
          )}
        </div>
      )}
      <div
        style={{
          color: "#272937",
          borderRadius: "8px",
        }}
      >
        {React.createElement(Icon)}
      </div>
    </div>
  );
};

export { IconWrapper };
