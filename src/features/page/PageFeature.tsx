/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const PageFeature = ({ children }: any) => (
  <div
    css={css`
      max-width: 800px;
      margin: auto;
      padding: 15px;
      margin-top: 30px;
    `}
  >
    {children}
  </div>
);
