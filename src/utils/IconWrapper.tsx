import React, { useState } from "react";
import * as AllIcons from "../index";

type TProps = {
  Icon: React.ComponentType<object>;
  iconKey: string;
  isSearchedFor: boolean;
};
const IconWrapper: React.FC<TProps> = ({ Icon, iconKey, isSearchedFor }) => {
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
        padding: isSearchedFor ? undefined : "1px",
        border: isSearchedFor ? "1px solid #272937" : undefined,
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
          transition: "color 0.2s ease-out",
          color: isSearchedFor ? "#ec5b5e" : "#272937",
          borderRadius: "8px",
        }}
      >
        {React.createElement(Icon)}
      </div>
    </div>
  );
};

export { IconWrapper };
