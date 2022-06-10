import { Global, css } from "@emotion/react";

export const ResetStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }
      body {
      }
      li {
        list-style: none;
      }
      body,
      ul,
      li {
        margin: 0;
        padding: 0;
      }
      a {
        text-decoration: none;
        :hover {
          text-decoration: underline;
        }
      }
    `}
  />
);
