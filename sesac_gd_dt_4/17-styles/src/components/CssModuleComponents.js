import React from 'react';
import styles from '../styles/cssModule.module.css';
// #2. CSS Module 사용
// - 클래스명 중복 방지
// - 반드시 .module.css 확장자로 작성해야 함.
// - CSS Module 파일을 import 후, 객체 형태로 클래스명을 사용

/* 
    [장점]
    - 스타일 충돌 방지
    - 컴포넌트 기반 스타일링

    [단점]
    - 동적 클래스명 조합이 번거로움
    - 매번 네이밍 module.css 작성 해야하는 번거로움
*/
console.log('styles >>', styles);

export default function CssModuleComponents() {
    return (
        <div className={styles.container}>
            <h1>Module CSS</h1>
            <div className={[styles.red, styles.box].join(' ')}>1</div>
            <div className={[styles.box, styles.orange].join(' ')}>2</div>
            <div className={`${styles.box} ${styles.yellow}`}>3</div>
        </div>
    );
}
