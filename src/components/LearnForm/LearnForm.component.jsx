import styles from './LearnForm.module.css';

const Search = () => {
  return (
    <form>
      <input type="search" />
    </form>
  )
}

const Filter = () => {
  return (
    <div>

    </div>
  )
}


const LearnForm = () => {
  return (
    <div>
      <Search/>
      <Filter/>
    </div>
  )
}

export default LearnForm;