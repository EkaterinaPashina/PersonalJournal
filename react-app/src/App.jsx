import './App.css';

import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';

function App() {
  const data = [
    {
      title: 'Заголовок',
      text: 'Текст',
      date: new Date()
    },
    {
      title: 'Заголовок',
      text: 'Текст',
      date: new Date()
    }
  ];

  return (
    <div className='app'>
      <LeftPanel>
        <Header />
        <JournalList>
          <CardButton>
            <JournalItem
              title={data[0].title}
              text={data[0].text}
              date={data[0].date}
            />
          </CardButton>
          <CardButton>
            <JournalItem
              title={data[1].title}
              text={data[1].text}
              date={data[1].date}
            />
          </CardButton>
        </JournalList>
      </LeftPanel>
      <Body>
        Body
      </Body>
    </div>
  );
}

export default App;