/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const PageFeature = ({ children }: any) => (
  <div
    css={css`
      max-width: 800px;
      margin: auto;
      box-shadow: 3px 3px 0 0 black;
      padding: 15px;
      margin-top: 30px;
    `}
  >
    {children}
  </div>
);
