import React from 'react';
import '../styles/Prac.scss';
import image from '../assets/grass.png';
export default function Prac() {
    return (
        // 참고. 컴포넌트 코드
        <div className="larva">
            <div className="body body1">
                <div className="eye eye-white">
                    <div className="eye eye-black"></div>
                </div>
            </div>
            <div className="body body2"></div>
            <div className="body body3"></div>
            <div className="body body4"></div>
            <div className="body body5"></div>

            {/*  /public/images/grass.png 로드 */}
            <img className="grass" src={image} />
        </div>
    );
}
