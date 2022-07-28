import styled from "styled-components";

export default function Toolbar(props) {
  const { date } = props;

  const navigate = action => {
    props.onNavigate(action);
  };

  return (
    <Header className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button type="button" onClick={navigate.bind(null, "TODAY")}>
          이번달
        </button>
        <button type="button" onClick={navigate.bind(null, "PREV")}>
          <svg
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.101562"
              y="0.674805"
              width="10.6494"
              height="10.6494"
              rx="5.32471"
              fill="#F5F5F5"
            />
            <path
              d="M6.97937 4.00293L3.87329 5.9997L6.97937 7.99646"
              stroke="#1B1B1B"
            />
          </svg>
        </button>
        <span className="rbc-toolbar-label">{`${date.getFullYear()}년 ${
          date.getMonth() + 1
        }월`}</span>
        <button type="button" onClick={navigate.bind(null, "NEXT")}>
          <svg
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="10.8984"
              y="11.3252"
              width="10.6494"
              height="10.6494"
              rx="5.32471"
              transform="rotate(-180 10.8984 11.3252)"
              fill="#F5F5F5"
            />
            <path
              d="M4.02063 7.99707L7.12671 6.0003L4.02063 4.00354"
              stroke="#1B1B1B"
            />
          </svg>
        </button>
      </span>
    </Header>
  );
}

const Header = styled.div`
  button {
    border: none;
    :hover {
      background: none;
    }
  }
`;
