"use client";

import classNames from "classnames";

// import type { StyleObject } from "@/interfaces";
// import styles from './styles/tractor_buton.module.css';
const styles: any = require(`./styles/${process.env.NEXT_PUBLIC_CSS_SLUG}_buton.module.css`);

interface ButtonProps {
  [key: string]: any;
  id?: string;
  className?: string | any;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  ["aria-label"]?: string;
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
}

export const Buton = (props: ButtonProps) => {
    console.log('here i am', process.env.NEXT_PUBLIC_CSS_SLUG)
  return (
    <button
      {...props}
      className={classNames({
        [styles?.[`btn_${props?.variant}`]]: props?.variant,
        [styles.btn]: true,
        [props?.className]: props?.className,
      })}
      onClick={props.onClick}
      id={props.id}
      type={props.type}
      disabled={props.isDisabled}
      aria-label={props["aria-label"]}
    >
      {props.children}
    </button>
  );
};

Buton.defaultProps = {
  onClick: () => {},
  className: "",
  type: "button",
  "aria-label": "button",
  variant: "primary",
};