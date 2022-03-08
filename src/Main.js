import React from 'react';
import TopNav from './components/Container/TopNav';
import ImagePresenter from './components/Presenter/ImagePresenter';
import {
  ImageWordPresenter,
  WordSetting,
  WordLine,
} from './components/Presenter/ImageWordPresenter';
import ButtonPresenter from './components/Presenter/ButtonPresenter';

function Main() {
  return (
    <>
      <TopNav />
      <ImagePresenter>
        <ImageWordPresenter>
          <WordSetting size={'55px'} content={'- 김수환 -'}></WordSetting>
          <WordSetting
            size={'55px'}
            content={'웹 개발자 포트폴리오'}
          ></WordSetting>
          <WordLine />
          <WordSetting
            size={'20px'}
            content={'안녕하세요.'}
            color={'#DDDDDD'}
          ></WordSetting>
          <WordSetting
            size={'20px'}
            content={'웹 개발에 도전 중인 대학생입니다.'}
            color={'#DDDDDD'}
          ></WordSetting>
          <WordSetting
            size={'20px'}
            content={'언제나 긍정적인 마인드로 공부를 하는게 제 장점입니다.'}
            color={'#DDDDDD'}
          ></WordSetting>
          <ButtonPresenter>자세히보기</ButtonPresenter>
        </ImageWordPresenter>
      </ImagePresenter>
    </>
  );
}

export default Main;
