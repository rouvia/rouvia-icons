import React from "react";
import { Meta } from "@storybook/react";
import * as AllIcons from "../index";
import { IconWrapper } from "../utils/IconWrapper";

type AllIconsType = {
  [key: string]: React.ComponentType | null | undefined;
};

const Component = () => {
  return (
    <div
      style={{
        padding: "60px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 36px)",
        gap: "12px",
      }}
    >
      {Object.keys(AllIcons).map((iconKey, index) => {
        const Icon = (AllIcons as AllIconsType)[iconKey];
        if (!Icon) return null;
        return <IconWrapper Icon={Icon} key={index} iconKey={iconKey} />;
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
