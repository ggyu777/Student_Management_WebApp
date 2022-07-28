import styled from "styled-components";
import { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import { imgfile_icon, document_icon } from "../../assets";

const Attachment = ({ orgName, saveName, path, ext }) => {
  const [url, setUrl] = useState(path);

  useEffect(() => {
    const modifiedPath = path
      .replace("/ubed", "kimcodi.kr")
      .concat("", saveName);
    setUrl("https://" + modifiedPath);
  }, [{ saveName }]);

  const download = () => {
    saveAs(url, { orgName });
  };

  return (
    <Files>
      <H3>첨부파일</H3>
      <File>
        {ext === ".jpg" || ext === ".png" ? (
          <img src={imgfile_icon} alt="file-icon" />
        ) : (
          <img src={document_icon} alt="file-icon" />
        )}
        <Button onClick={download}>{orgName}</Button>
      </File>
    </Files>
  );
};

export default Attachment;

const Files = styled.div`
  background-color: #f5f5f5;
  padding: 10px 8px;
  border-radius: 4px;
  margiin-bottom: 10px;
`;

const H3 = styled.h3`
  width: 100%;
  border-bottom: 1px solid #d8d8d8;
  margin-bottom: 5px;
  font-size: 0.875rem;
  font-weight: 700;
  padding: 0 0 10px 10px;
`;

const File = styled.div`
  height: 36px;
  display: flex;
  align-items: cenger;
  padding: 8px;
  background-color: #ffffff;
  border: 0.5px solid #bababa;
  margin-bottom: 5px;
  border-radius: 2px;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 0.625rem;
  font-weight: 400;
  color: #6a6a6a;
`;
