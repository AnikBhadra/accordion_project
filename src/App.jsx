import data from '../components/data'
import SingleQuestion from '../components/Question'
import './App.css'

function App() {
  return (
    <main>
      <div className="container">
        <h3>FAQ</h3>
        <section className="info">
          {/* map over data imported at the top and use SingleQuestion component */
            data.map(question => {
              return <SingleQuestion key={question.id} title={question.title} />
            })}
        </section>
      </div>
    </main>
  )
}

export default App
