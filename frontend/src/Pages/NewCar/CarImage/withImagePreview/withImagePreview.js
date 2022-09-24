import { useState, useEffect } from "react";

const withImagePreview = (config) => {
  const { control } = config;
  return (ImagePreview, ImageInput) =>
    ({ backImage, onHandleChange,name, file, ...props }) => {
      // const [image, setImage] = useState(null);
      const [fileDataURL, setFileDataURL] = useState(null);
      const [fileDataURLS, setFIleDataURLS] = useState([]);
      // const onHandleChange = (e) => {
      //   const file = e.target.files[0];
      //   if (file.type.substr(0, 5) === "image") {
      //     setImage(file);
      //   } else {
      //     setImage(null);
      //   }
      // };

      const onHandleDelete = (e, ind) => {
        e.preventDefault();
        if (control) {
          setFileDataURL(null);
        } else {
          setFIleDataURLS((prev) => {
            return prev.filter((value, index) => {
              return index !== ind;
            });
          });
          
        }
      };

      useEffect(() => {
        let fileReader,
          isCancel = false;
        if (file) {
          fileReader = new FileReader();
          fileReader.onload = (e) => {
            const { result } = e.target;
            if (result && !isCancel) {
              control
                ? setFileDataURL(result)
                : setFIleDataURLS((prev) => [...prev, result]);
            }
          };
          fileReader.readAsDataURL(file);
        }
        console.log(fileDataURLS);
        return () => {
          isCancel = true;
          if (fileReader && fileReader.readyState === 1) {
            fileReader.abort();
          }
        };
      }, [file]);

      //   if (preview) { const mainImages = <></> }
      //   else {const otherImages =<></>}

      return (
        <>
          {control ? (
            <>
              {fileDataURL ? (
                <ImagePreview
                  fileDataURL={fileDataURL}
                  onHandleDelete={onHandleDelete}
                  {...props}
                />
              ) : (
                <ImageInput
                  backImage={backImage}
                  onHandleChange={onHandleChange}
                  name={name}
                  {...props}
                />
              )}
            </>
          ) : (
            <>
              {fileDataURLS.length > 0 &&
                fileDataURLS.map((value, index) => {
                  return (
                    <ImagePreview
                      key={index}
                      fileDataURL={value}
                      index={index}
                      onHandleDelete={onHandleDelete}
                      {...props}
                    />
                  );
                })}
              <ImageInput
                backImage={backImage}
                onHandleChange={onHandleChange}
                name={name}
                {...props}
              />
            </>
          )}
        </>
      );
    };
};

export default withImagePreview;
