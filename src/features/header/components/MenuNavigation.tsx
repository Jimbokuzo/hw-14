/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import dataMenu from "./menu.json";

export const MenuNavigation = () => (
  <ul
    css={css`
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 50px;
    `}
  >
    {dataMenu.map(({ id, name, url }) => (
      <li
        css={css`
          display: block;
          :first-child a {
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
    ))}
  </ul>
);
