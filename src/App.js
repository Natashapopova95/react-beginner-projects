import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';
 //Тут список пользователей: https://reqres.in/api/users

function App() {
  //хроняться пользователи
  const [users, setUsers] = React.useState([]);
  const [invites, setInvites] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');
  


  //отправляем запрос на бэкенд и получает данные пользователя
  React.useEffect(() => {
    fetch('https://reqres.in/api/users').then(res => res.json()).then(JSON =>{
      setUsers(JSON.data);
    }).catch(err => {
      console.warn(err);
      alert('Ошибка при получении пользователей')
    })
    .finally(() => setIsLoading(false))
  }, []);

const onChangeSearchValue = (Evant) => {
  setSearchValue(Evant.target.value);
}

  return (
    <div className="App">
      <Users 
       onChangeSearchValue={onChangeSearchValue}
       searchValue={searchValue}
       items={users} 
       isLoading={isLoading}  />
      {/* <Success /> */}
    </div>
  );
}

export default App;
