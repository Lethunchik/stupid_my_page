import {Link} from "react-router-dom";
import logo from './i.jpg';
import module from './App.css';
import './routerr'
import { Helmet } from 'react-helmet';

function App() {
  function mani(){
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  }
  function secret(){
    console.log('Меня зовут Кира Йошикагэ. Мне 33 года. Мой дом находится в северо-восточной части Морио, в районе поместий. Работаю в офисе сети магазинов Kame Yu и домой возвращаюсь, самое позднее, в восемь вечера. Не курю, выпиваю изредка. Ложусь спать в 11 вечера и убеждаюсь, что получаю ровно восемь часов сна, несмотря ни на что. Перед сном я пью тёплое молоко, а также минут двадцать уделяю разминке, поэтому до утра сплю без особых проблем. Утром я просыпаюсь, не чувствуя ни усталости, ни стресса, словно младенец. На медосмотре мне сказали, что никаких проблем нет. Я пытаюсь донести, что я обычный человек, который хочет жить спокойной жизнью. Я не забиваю себе голову проблемами вроде побед или поражений, и не обзавожусь врагами, из-за которых не мог бы уснуть. Я знаю наверняка: в таком способе взаимодействия с обществом и кроется счастье. Хотя, если бы мне пришлось сражаться, я бы никому не проиграл.')
  }
  const keywords = `Клоун, Программист, Гуманитарий, как же я люблю жить, Вся зарплата уходит на психолога`;
  const description = `Купить лабраторные или курсовые у клоуна Глебе! Жаль не Пальячи(, трижды подумайте перед тем как идти работать в музыкальную сферу.`;

  return (
    <div className={module.App}>
      <Helmet>
                <meta charSet="utf-8" />
                <title> Клоун | MQ</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
      </Helmet>

      <header className="App-header">
        <img src={logo} className={module.App-logo} alt="logo" />
        <p>
          Летяго Глеб Александрович <br/>
          Студент группы 21-СТ
        </p>
          <div>
            <button onClick={mani}>Много денег</button>
            <Link to={'/Tree'}><button>Древо</button></Link>
            <Link to={'/Formula'}><button>Формула</button></Link>
            <button onClick={secret}>Секрет</button>
          </div>
      </header>
    </div>
  );
}

export default App;
