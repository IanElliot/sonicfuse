import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className='title'><span>Sonic Glue</span> News </h1>
      <style jsx>
        {`
          .title {
            color: red;
          }
        `}
      </style>
    </div>
    
  )
}

export default Header;
