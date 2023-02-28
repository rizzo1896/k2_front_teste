import "./styles.scss";
import { Icon } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

interface CustomButtonProps {
  title: string;
  icon?: string;
  onClick?: () => void;
}

export function CustomButton({ title, icon, onClick }: CustomButtonProps) {
  return (
    <button className="custom-buttom" onClick={onClick}>
      {title}
      {icon && (
        <Icon
          name={icon}
          design="Contrast"
          style={{
            marginLeft: "5px",
          }}
        />
      )}
    </button>
  );
}
