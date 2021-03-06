import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import '@vime/core/themes/default.css'
import { gql, useQuery } from '@apollo/client';

const GET_LESSON_BY_SLUG_QUERY= gql ` 
   query GetLessonsBySlug($slug: String) {
  lesson(where: {slug: $slug}) {
    id
    title
     videoId
   description
    teacher {
      avatarURL
      bio
      name
    }
  }
}

  
  
`
interface GetLessonsBySlugResponse{
  lesson:{
    title: string,
    videoId:string,
    description:string,
    teacher:{
      bio:string,
      avatarURL:string,
      name:string,

    }
    }
  }


interface videoProps {
  lessonSlug:string;
}
export function Video(props:videoProps){
const {data} = useQuery<GetLessonsBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
  variables: {
    slug: props.lessonSlug
  }
})


   
    return (
  
  <div className="flex-1">
   <div className="bg-black flex justify-center" >
     <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video " >
       <Player>
       <Youtube videoId="v=SO4-izct7Mc"/>
          <DefaultUi/>
       </Player>
        </div>
         </div>
           <div className="p-8 max-w [1100px] mx-auto">
               <div className="flex items-start gap-16 " >
                    <div className="flex-1" >
                         <h1 className="text-2xl font-bold">{data?.lesson.title}

                         </h1>
                         <p className="mt-4 text-gray-200 leading-relaxed">
                         Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS,
                          Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS
                           criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
                         </p>
                         <div className="flex items-center gap-4 mt-6"  >
                              <img className="h-16 w-16 rounded-full border-2  border-blue-500"
                              src="https://github.com/MariaEduarda202.png"
                               alt="" />
                              <div className="leading-relaxed">
                                   <strong className="font-bold text-2xl block" >Maria Eduarda</strong>
                                   <span className="text-gray-200 text-sm block">Desenvolverdora Front end   </span>

                              </div>
                              </div>
                    </div>
                    <div className="flex flex-col gap-4">
                         <a href="" className="p-4 text-small bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-400 transition-colors " >
                              <DiscordLogo size={24}/>
                              comunidade do discord
                         </a>
                         <a href="" className="p-4 text-smal border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors" >
                              <Lightning  size={24}/>
                             Acesse o desafio
                         </a>
                         
                         
                   </div>
               </div>
               <div className="gap-8 mt-20 grid grid-cols-2">
                    <a href="" className="bg-gray-700 rounded overflow-hidden flex itens-stretch gap-6 hover:bg-gray-600 ">
                       <div className="bg-green-700 h-full p-6 flex items-center">
                         <FileArrowDown size={40}/>
                       </div>
                       <div className="pt-6 leading-relaxed">
                         <strong className="text-2xl"> Material Complementar </strong>
                         <p className="text-sm text-gray-200 mt-2"> Acesse o material complementar para acelerar o seu desenvolvimento</p>
                       </div>
                       <div className="h-full p-6 flex items-center" >
                         <CaretRight size={24} />
                         </div>  
                            </a>  
                   

                     <a href="" className="bg-gray-700 rounded overflow-hidden flex itens-stretch gap-6 hover:bg-gray-600 ">
                       <div className="bg-green-700 h-full p-6 flex items-center">
                         <FileArrowDown size={40}/>
                       </div>
                       <div className="pt-6 leading-relaxed">
                         <strong className="text-2xl">Wallpapers exclusivos </strong>
                         <p className="text-sm text-gray-200 mt-2"> Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina</p>
                       </div>
                       <div className="h-full p-6 flex items-center" >
                         <CaretRight size={24} />
                         
                         </div>  
                         
                     </a>  
               </div>
           
           </div>
    </div>
    
    )
   }