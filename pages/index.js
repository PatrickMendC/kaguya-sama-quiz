import Head from 'next/head';
import styled from 'styled-components'
import db from '../db.json';

import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

//  const BackgroundImage = styled.div`
//  background: url(${db.bg});
//  flex: 1;
//  background-size: cover;
//  background-position: center;
//  `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

// esete componente representa a página
export default function Home() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Kaguya-sama QUIZ"/>
        <meta property="og:description" content="Este é um quiz que tem o anime kaguya-sama como tema. Sendo ele desenvolvido em NextJS."/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://kaguya-sama-quiz.patrickmendc.vercel.app/"/>
        <meta property="og:image" content="kaguya-sama-quiz.png"/>
      </Head>
      <QuizBackground theme={db.theme} backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              
              <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Content>
              <h1>Quiz da Kaguya</h1>
              <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/patrickmendc" />
      </QuizBackground>
    </>
  );
}
