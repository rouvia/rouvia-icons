import React, { useState } from "react";
import { Meta } from "@storybook/react";
import * as AllIcons from "../index";

type AllIconsType = {
  [key: string]: React.ComponentType | null | undefined;
};

const Component = () => {
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIcon(text);

    setTimeout(() => {
      setCopiedIcon(null);
    }, 3000); // Removes "Copied" after 2 seconds
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 180px)",
        gap: "24px",
      }}
    >
      {Object.keys(AllIcons).map((iconKey, index) => {
        const Icon = (AllIcons as AllIconsType)[iconKey];
        if (!Icon) return null;
        return (
          <div
            key={index}
            style={{
              padding: "26px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              fontFamily: "Arial",
              fontSize: 14,
              position: "relative",
              transition: "all 0.2s ease-out",
              borderRadius: "8px",
              gap: "12px",
            }}
            onClick={() => copyToClipboard(iconKey)}
          >
            <div>{iconKey}</div>
            <div
              style={{
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            >
              {React.createElement(Icon)}
            </div>
            {copiedIcon === iconKey && (
              <div
                style={{
                  color: "#4CAF50",
                  position: "absolute",
                  bottom: "-8px",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "14px",
                }}
              >
                Copied
                <AllIcons.CheckSmallIcon />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const meta: Meta = {
  title: "Icons",
  component: Component,
};

export default meta;
export const IconsGallery = () => <Component />;
