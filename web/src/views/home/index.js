import React, {useState , useEffect} from 'react'
import * as S from './styles'

import api from '../../services/api'

//components

import Header from '../../components/header'
import Footer from '../../components/footer'
import FilterCard from '../../components/filterCard'
import TaskCard from '../../components/taskCard'


function Home() {

  const [filterActived, setFilterActived]=useState('today')
  const [tasks,setTasks]=useState([])

  async function loadTask(){
    await api.get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
    .then(response=>{
      setTasks(response.data)
    })
  }

  useEffect(() =>{
    loadTask()
  },[filterActived])


    return (
    <S.Container>

      <Header/>

      <S.FilterArea>

        <button type="button" onClick={()=>setFilterActived("all")}>
          <FilterCard title="Todos"    actived={filterActived == "all"} />
        </button>
        
        <button type="button" onClick={()=>setFilterActived("today")}>
          <FilterCard title="Hoje"     actived={filterActived == "today"} />
        </button>
        
        <button type="button" onClick={()=>setFilterActived("late")}>
          <FilterCard title="Atrasados"actived={filterActived == "late"} />
        </button>
        
        <button type="button" onClick={()=>setFilterActived("Puérpera")}>
          <FilterCard title="Puérpera"actived={filterActived == "Puérpera"} />
        </button>

      </S.FilterArea>

      <S.Title>
        <h3>REGISTROS</h3>
      </S.Title>

      <S.Content>
        {
          tasks.map(t =>(

            <TaskCard type={t.type} nome={t.nome} entrega={t.entrega} registro={t.registro} especialidade={t.especialidade}/>

          ))

        }
      </S.Content>

      <Footer/>

    </S.Container>
    )
  }
  
  export default Home;