/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
  item: { id: number; name: string; url: string };
}

export const MenuNavItem = ({ item: { id, name, url } }: Props) => (
  <li
    css={css`
      display: block;
      :first-of-type a {
      }
    `}
    key={id}
  >
    <a
      css={css`
        color: white;
        text-decoration: none;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        text-transform: uppercase;
        display: block;
      `}
      href={url}
    >
      {name}
    </a>
  </li>
);
