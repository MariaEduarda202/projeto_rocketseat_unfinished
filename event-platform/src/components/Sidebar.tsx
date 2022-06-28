import { gql, useQuery } from '@apollo/client';
import { Lesson } from './Lesson';


const GET_LESSONS_QUERY =gql  `
   query  {
   lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    id
    lessonType
    availableAt
    title
    slug
  }
} `

export function Sidebar(){
  const { data } = useQuery < GetLessonsQueryReponse>(GET_LESSONS_QUERY )
  


  interface GetLessonsQueryReponse{
   lessons:{
    id:string
    title: string;
    slug: string;
    availableAt: string;
    lessonType:'live'| 'class'
   }[]
  }
   return (
      
      
      <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600 "> 
        <span className="font-bold text-2xl pb-6 mg-6 border-b  border-gray-500 block">
         Cronograma de Aulas 
        </span>
        <div className='flex flex-col gap-8'>
        
         {data?.lessons.map(lesson =>{
          return (
            <Lesson
            key={lesson.id }
            title={lesson.title}
            slug= {lesson.slug}
            availableAt={new Date(lesson.availableAt )}
            type= {lesson.lessonType }/>
          )
         }

         )}
         

        </div>
      
      </aside>
      
    )
   }