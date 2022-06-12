/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PostInterface } from "../interfaces";
import { Link } from "react-router-dom";

interface Props {
  post: PostInterface;
}

export const PostItem = ({
  post: { id, userId, title, tags, reactions },
}: Props) => (
  <div
    css={css`
      max-width: 800px;
      background: #d3bf9a;
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 20px;
    `}
  >
    <div
      css={css`
        width: 100%;
        height: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        cursor: pointer;
      `}
    >
      <h3
        css={css`
          height: 20px;
        `}
      >
        {userId}
      </h3>
      <p
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          background: #202020;
          width: 20px;
          border-radius: 50%;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
        `}
      >
        {reactions}
      </p>
    </div>
    <div>
      <div
        css={css`
          width: 200px;
          height: 20px;
          font-size: 12px;
          margin-bottom: 5px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: Arial, Helvetica, sans-serif;
        `}
      >
        <p>{tags}</p>
      </div>
    </div>
    <div
      css={css`
        background: white;
        border-radius: 10px;
        padding-left: 15px;
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
      `}
    >
      <p
        css={css`
          font-family: Arial, Helvetica, sans-serif;
        `}
      >
        <Link to={`/post/${id}`}>{title}</Link>
      </p>
    </div>
  </div>
);
