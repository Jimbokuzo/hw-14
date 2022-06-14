/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useDataPost } from "./hooks";

export const PostFeature = () => {
  const { body } = useDataPost();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        max-width: 800px;
        background: #d3bf9a;
        border-radius: 10px;
        padding: 10px;
        margin-bottom: 20px;
      `}
    >
      <p
        css={css`
          background: white;
          border-radius: 10px;
          padding-left: 15px;
          width: 100%;
          padding: 15px;
          display: flex;
          align-items: center;
        `}
      >
        {body}
      </p>
    </div>
  );
};
