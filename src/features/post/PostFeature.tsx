/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useDataPost } from "./hooks";

export const PostFeature = () => {
  const { body, userId } = useDataPost();

  return (
    <div
      css={css`
        max-width: 800px;
        background: #d3bf9a;
        border-radius: 10px;
        padding: 10px;
        margin-bottom: 20px;
      `}
    >
      <h1
        css={css`
          margin: auto;
        `}
      >
        {userId}
      </h1>
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
