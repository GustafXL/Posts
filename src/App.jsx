import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Posts } from "./components/Posts";

import style from "./App.module.css";
import "./global.css";

//? author: {avatar_url: "", name: "", role: ""}
//? publishedAt: Date
//? content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/GustafXL.png",
      name: "Gustavo Linhares",
      role: "Desenvolvedor Front End/Mobile"
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-09-10 12:30:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat"
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-09-12 14:25:00')
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={ style.wrapper }>
        <Sidebar />

        <main>
          {posts.map(posts => {
            return (
              <Posts
                key={posts.id}
                author={posts.author}
                content={posts.content}
                publishedAt={posts.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
};