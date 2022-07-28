import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { DateLabel } from "../elements";
import { Dropdown_up, Dropdown_down } from "../assets";

const month = Array.from({ length: 12 }, (value, index) => 1 + index);

const Dropdown = ({ arr = month, _click, selected }) => {
  const ref = useRef();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (toggle && ref.current && !ref.current.contains(e.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [toggle]);

  return (
    <Wrapper ref={ref}>
      <ListHeader
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <ListTitle margin="3px">
          {<DateLabel date={selected ? selected : arr[arr.length - 1]} />}
        </ListTitle>
        {toggle ? (
          <Icon src={Dropdown_up} alt="dropdown-up" />
        ) : (
          <Icon src={Dropdown_down} alt="dropdown-down" />
        )}
        {toggle && (
          <ListConatiner>
            {arr.map((yr, idx) => (
              <List
                key={yr}
                onClick={e => {
                  const [yy, mm] = e.target.innerText.split(" / ");
                  const year = yy;
                  let month = mm;
                  if (month.length === 1) {
                    month = "0" + month;
                  }
                  _click(year + month);
                }}
                bg={selected === yr ? "#dddefd" : "#fff"}
              >
                <ListTitle>
                  <DateLabel date={yr} />
                </ListTitle>
              </List>
            ))}
          </ListConatiner>
        )}
      </ListHeader>
    </Wrapper>
  );
};

export default Dropdown;

const Wrapper = styled.div`
  font-weight: 500;
  line-height: 1.646em;
  font-size: 12px;
`;

const ListHeader = styled.div`
  position: relative;
  width: 82px;
  min-height: 20px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #9498ef;
  text-align: center;
  user-select: none;
  cursor: pointer;
`;

const ListTitle = styled.span`
  text-align: center;
  display: inline-block;
  margin-right: ${props => props.margin};
`;

const Icon = styled.img`
  position: absolute;
  top: 8px;
  right: 3px;
  width: 9px;
  height: 5px;
`;

const ListConatiner = styled.ul`
  position: absolute;
  top: 27px;
  left: -1px;
  width: 82px;
  max-height: 12.25em;
  background-color: #fff;
  overflow-y: auto;
  border-radius: 4px;
  border: 1px solid #9498ef;
  transform: scaleX(-1); //Reflects the parent horizontally
  z-index: 1;
  &::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e8e8e8;
    border-radius: 2px;
    border-right: 4px white solid;
    background-clip: padding-box;
  }
`;

const List = styled.li`
  transform: scaleX(-1); //Flips the child back to normal
  background-color: ${props => props.bg};
`;
