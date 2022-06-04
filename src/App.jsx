import Ui from '../components/Ui'
import data from '../components/data'
import SingleQuestion from '../components/Question'
import './App.css'

function App() {
  return (
    <main>
      <div className="container">
        <h3>FAQ</h3>
        <section className="info">
          {data.map((question) => {
            return (
              <SingleQuestion
                title={question.title}
                key={question.id}
                info={question.info}
              />
            )
          })}
        </section>
      </div>
    </main>
  )
}

export default App
