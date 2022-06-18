/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useDataPost } from "./hooks";

export const PostFeature = () => {
  const { body } = useDataPost();

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 767px;
      `}
    >
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
          box-shadow: 0 0 15px 0 #d6dbee;
          font-size: 24px;
          font-family: Arial, Helvetica, sans-serif;
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
    </div>
  );
};
