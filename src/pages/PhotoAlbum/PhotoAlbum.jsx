
/**
 *  1. 사진 등록하기를 통해 등록된 이미지들을 각자 자유롭게 디자인하여 불러와야함.
 *  2. localStorage에 저장된 사진이 없으면 
 *      <h1>불러올 사진이 없습니다.<h1>
 *      문구가 중앙에 나오도록해야함.
 */

import { useRef, useState } from "react";


function PhotoAlbum() {
            
const [ preview, setPreview ] = useState("");

// const data = JSON.parse(
//     localStorage.getItem("photo") );

    return (
        <div>
            <img src={preview} alt="" />
        </div>
    );
}

export default PhotoAlbum;