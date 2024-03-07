/** @jsxImportSource @emotion/react */
import * as S from "./style";
import WideButton from "../../components/WideButton/WideButton";
import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid"

/**
 *  1. 사진 불러오기 버튼을 클릭 후 5개 이상의 이미지를 불러올 수 있어야함.
 *  2. PromiseAll을 사용하여 이미지를 순서대로 불러와야함.
 *  3. 불러오기가 완료되면 "이미지를 저장하시겠습니까?" 라는 확인 취소 메세지 창이 떠야함.
 *  4. 확인 클릭시 localStorage에 key: photo, value: JSON 데이터
 *      [
 *          {
 *              id: 1,
 *              imageUrl: ""
 *          },
 *          {
 *              id: 2,
 *              imageUrl: ""
 *          }
 *      ]
 *      형식으로 저장되어야함.
 *  5. 취소시 저정되면 안됨.
 */

function PhotoRegister() {

    const [ oldFiles, setOldFiles ] = useState([]);
    const uploadFilesId = useRef(0);
    const [ newFiles, setNewFiles ] = useState([]);
    const imgFileRef = useRef();
    const [ photo, setPhoto ] = useState([
       { id: 1,
        imageUrl: ""}
    ]);
    useEffect (() => {
        localStorage.getItem("photo");
        return 
    }, [])

    useEffect (() => {
        localStorage.getItem("photo");
        return 
    })
   
    const handleImgFileChange = (e) => {
        let newphoto = [];

        const loadFiles = Array.from(e.target.files);

        if(loadFiles.length === 0) {
            imgFileRef.current.value = "";
            return;
        }

        const uploadFiles = loadFiles.map(file => {
            return {
                id: uploadFilesId.current += 1,
                percent: 0,
                originFile: file,
                url: ""
            };
        });

        uploadFilesId.current = 0;

        let promises = [];

        promises = uploadFiles.map(file => new Promise((resolve) => {
            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                resolve(e.target.result);
            }

            fileReader.readAsDataURL(file.originFile);
        }));

        Promise.all(promises)
        .then(result => {
            setNewFiles(result.map((dataUrl, index) => {
                return {
                    ...uploadFiles[index],
                    preview: dataUrl
                };
            }));
        })
       ; 

        if (window.confirm("이미지를 저장하시겠습니까?")) {
           localStorage.setItem("photo", JSON.stringify(setNewFiles));
        } else {
            alert("취소합니다.");
            
        }
    }   
       

    return (
        <div css={S.layout}>
            <h1 css={S.title}>사진 등록하기</h1>
            {oldFiles?.map(file => 
                <div key={file.id} css={S.layout2}>
                    <img src={file.url} alt="" />
                </div>
            )}
            {newFiles?.map(file => 
                <>
                    <div key={file.id} css={S.layout2}>
                        <img src={file.preview} alt="" />
                    </div>
                </>
            )}
            <input type="file" style={{display: "none"}} multiple={true}  
            ref={imgFileRef} onChange={handleImgFileChange}
            />
            <WideButton text={"사진 불러오기"} onClick={() => imgFileRef.current.click()}/>
        </div>
    );
}

export default PhotoRegister;