import { Input,  Row, Col } from 'antd';
import { IMovies } from '../pages/PopularMovies';


interface MovieResults {
  results: IMovies[]
}


const SearchMovie = ({movies, setPopular} : { movies: MovieResults, setPopular: React.Dispatch<React.SetStateAction<IMovies[] | null>>}) => {  
  

  const handleSubmit = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    
    
    const search = evt.target.value;
    if (search) {
      const searchM = movies?.results.filter((movie: IMovies) => movie.name.toLowerCase().includes(search.toLowerCase()))
          setPopular(searchM);
    }
    
    
  }
  return (
    <Row justify="center" style={{ margin: '20px 0' }}>
      <Col xs={24} sm={18} md={12} lg={8} xl={6}>
        <Input onChange={(evt) => handleSubmit(evt)} className='search-movie' style={{padding: '10px 15px'}}
          placeholder="Search here..."
          allowClear
          size="large"
        />
      </Col>
    </Row>
  );
}

export default SearchMovie;