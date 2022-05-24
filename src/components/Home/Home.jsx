import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'

export default function Home() {
    return (
      
     <div className='mainDiv'>
        {/* // <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}
        {/* <ul className="navbar-nav mr-auto"> */}
          {/* <li><Link to={'/'} className="nav-link"> Home </Link></li> */}
      

        <Link to={'/jobDetails'}  id="entry-button"className="btn btn-primary   btn-lg  " role="button"  >Employer entry</Link>

        <Link to={'/upload'}  id="entry-button" className="btn btn-primary btn-lg" role="button" >Employee entry</Link>
     
        </div>                                                                                                                                                                                                                                                                                                            
    )
}
