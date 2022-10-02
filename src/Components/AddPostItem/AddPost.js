import React,{useEffect,useState,useRef} from "react";

import "./AddPost.css";

const AddPost = () => {

    const [file , setFile] = useState();
    const [previewUrl , setPreviewUrl] = useState();
    const [isValid , setIsValid] = useState(false);

    const filePickerRef = useRef();

    useEffect(() => {
        if (!file) {
          return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
          setPreviewUrl(fileReader.result);
          console.log(fileReader.result)
        };
        fileReader.readAsDataURL(file);
      }, [file]);

      const pickedHandler = event =>{
        let pickedFile;
        let fileIsValid = isValid;
        if (event.target.files && event.target.files.length === 1) {
          pickedFile = event.target.files[0];
          setFile(pickedFile);
          setIsValid(true);
          fileIsValid = true;
        } else {
          setIsValid(false);
          fileIsValid = false;
        }
        // props.onInput(props.id, pickedFile, fileIsValid);
        
    }

      const pickImageHandler = () => {
        filePickerRef.current.click();
    }

  return (
    <div class="addPageContainer">
      <div class="Image">
      <div>
            <input
            // id = {props.id}
            ref = {filePickerRef}
            style = {{display : 'none'}}
            type = "file"
            accept = ".jpg,.png,.jpeg"
            onChange = {pickedHandler}
            />
        </div>
        <div className='img-picker'>
            <div className=  'imgPreview'>
                {previewUrl && <img src = {previewUrl} alt = "Preview"/>}
                {!previewUrl && <p>Please Pick An Image</p>}
                
            </div>
            <div className = "pickImg-btn">
            <button  class="bn632-hover bn25" type = "button" onClick = {pickImageHandler}>Pick Image</button>
            </div>
        </div>
      </div>
      <div class="AddComp">
        <div class="Button">
        <button class="bn5">SHARE</button>
        </div>
        <div class="CaptionSec">
            <textarea rows={8} cols={40} placeholder = "Caption Here ...." />
        </div>
      </div>
    </div>
  );
};

export default AddPost;
