import React from "react";
import "./FileUploader.css";

const FileUploader = () => {
  return (
    <div className="file-upload">
      <form className="">
        <div className="custom-form-group">
          <div className="custom-file-drop-area ">
            <input
              type="file"
              name="photos"
              placeholder="Enter photos"
              id="filephotos"
            />
            <label htmlFor="filephotos">Drag & Drop</label>
          </div>
          <div className="custom-file-preview">
            <div className="prev-img">
              <span>&times;</span>
              <img src="https://picsum.photos/id/237/200/300" alt="asd" />
            </div>
            <div className="prev-img">
              <span>&times;</span>
              <img src="https://picsum.photos/id/237/200/300" alt="asd" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FileUploader;
